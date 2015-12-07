(ns swatch.core
  (:require [clojure.string :as string]
            [reagent.core :as r]))

(enable-console-print!)

(defn rgb [c]
  (->> c
    (partition 2 2)
    (map #(js/parseInt (apply str %) 16))))

(def sqr #(* % %))

(defn dist [[r1 g1 b1] [r2 g2 b2]]
  (.sqrt js/Math
    (+
      (sqr (- r1 r2))
      (sqr (- g1 g2))
      (sqr (- b1 b2)))))

(defn cross [[x1 y1 z1] [x2 y2 z2]]
  [(- (* y1 z2)
      (* y2 z1))
   (- (* x2 z1)
      (* x1 z2))
   (- (* x1 y2)
      (* x2 y1))])

(defn dist-pl [p1 p2 p]
  (/ (dist [0 0 0] (cross (map - p1 p2) p))
     (dist p1 p2)))

(defn most-like [[r g b :as c]]
  (let [dist-to #(dist-pl [0 0 0] % c)
        dists {:gray (dist-to [255 255 255])
               :red (dist-to [255 0 0])
               :green (dist-to [0 255 0])
               :blue (dist-to [0 0 255])
               :yellow (dist-to [255 255 0])
               :cyan (dist-to [0 255 255])
               :magenta (dist-to [255 0 255])}]
    (key (apply min-key val dists))))

(defn octant [c]
  (most-like (rgb c)))

(defn find-max [m]
  (key (apply max-key val m)))

(defn vote
  ([cs] (map #(vote cs %) cs))
  ([cs c]
   (->> cs
     (map (fn [{o :octant x :rgb}]
            (let [r (:rgb c)]
              {o (if-not (= x r)
                   (/ (dist x r))
                   0.2)})))
     (remove nil?)
     (apply merge-with +)
     find-max
     (assoc c :vote))))

(defn parse-colors [s]
  (->> (string/split s #",")
    (map (fn [c]
           {:color (str "#" c)
            :rgb (rgb c)
            :octant (octant c)}))
    vote))

(def colors (r/atom []))

(defn update-colors! []
  (->> (.slice js/location.hash 1)
    parse-colors
    (group-by :vote)
    (reset! colors)))

(defn best-by [f xs]
  (->> xs
    (map #(vector % (f %)))
    (apply min-key second)
    first))

(defn chain-by [f xs]
  (loop [acc (take 1 xs)
         xs (drop 1 xs)]
    (if (seq xs)
      (let [x (last acc)
            best (best-by #(f x %) xs)
            xs (remove #(= best %) xs)]
        (recur (conj acc best) xs))
      acc)))

(defn swatch [{o :octant :keys [color] :as c}]
  ^{:key color}
  [:div.swatch {:data-color color
                :style {:background color}}])

(defn swatches []
  [:div
   (doall
     (for [[g cs] (sort-by (comp count val) > @colors)]
       ^{:key g}
       [:div
        [:h3 (str (name g) "s")]
        [:div
         (->> cs
           (chain-by #(dist (:rgb %1) (:rgb %2)))
           (map swatch))]]))])

(r/render-component [swatches]
                    (.getElementById js/document "app"))

(.addEventListener js/window "hashchange" (fn [e] (update-colors!)) false)

(update-colors!)
