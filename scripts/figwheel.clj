(require '[figwheel-sidecar.repl :as r]
         '[figwheel-sidecar.repl-api :as ra])

(ra/start-figwheel!
  {:figwheel-options {:server-port 3455
                      :css-dirs ["resources/public/css"]}
   :build-ids ["dev"]
   :all-builds
   [{:id "dev"
     :figwheel true
     :source-paths ["src"]
     :optimizations :none
     :compiler {:main 'swatch.core
                :asset-path "js-dev"
                :output-to "resources/public/js-dev/main.js"
                :output-dir "resources/public/js-dev"
                :verbose true}}]})

(ra/cljs-repl)
