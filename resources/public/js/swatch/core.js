// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('swatch.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_();
swatch.core.rgb = (function swatch$core$rgb(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7330_SHARP_){
var G__7333 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__7330_SHARP_);
var G__7334 = (16);
return parseInt(G__7333,G__7334);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(2),c));
});
swatch.core.sqr = (function swatch$core$sqr(p1__7335_SHARP_){
return (p1__7335_SHARP_ * p1__7335_SHARP_);
});
swatch.core.dist = (function swatch$core$dist(p__7336,p__7337){
var vec__7340 = p__7336;
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7340,(0),null);
var g1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7340,(1),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7340,(2),null);
var vec__7341 = p__7337;
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7341,(0),null);
var g2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7341,(1),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7341,(2),null);
return Math.sqrt(((swatch.core.sqr((r1 - r2)) + swatch.core.sqr((g1 - g2))) + swatch.core.sqr((b1 - b2))));
});
swatch.core.cross = (function swatch$core$cross(p__7342,p__7343){
var vec__7346 = p__7342;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7346,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7346,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7346,(2),null);
var vec__7347 = p__7343;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7347,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7347,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7347,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((y1 * z2) - (y2 * z1)),((x2 * z1) - (x1 * z2)),((x1 * y2) - (x2 * y1))], null);
});
swatch.core.dist_pl = (function swatch$core$dist_pl(p1,p2,p){
return (swatch.core.dist(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),swatch.core.cross(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,p1,p2),p)) / swatch.core.dist(p1,p2));
});
swatch.core.octant = (function swatch$core$octant(p__7349){
var vec__7351 = p__7349;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7351,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7351,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7351,(2),null);
var c = vec__7351;
var dist_to = ((function (vec__7351,r,g,b,c){
return (function (p1__7348_SHARP_){
return swatch.core.dist_pl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),p1__7348_SHARP_,c);
});})(vec__7351,r,g,b,c))
;
var gray = dist_to(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null));
var dists = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$red,dist_to(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null)),cljs.core.cst$kw$green,dist_to(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null)),cljs.core.cst$kw$blue,dist_to(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null)),cljs.core.cst$kw$yellow,dist_to(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(0)], null)),cljs.core.cst$kw$cyan,dist_to(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255)], null)),cljs.core.cst$kw$magenta,dist_to(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(255)], null))], null);
if((gray < (40))){
return cljs.core.cst$kw$gray;
} else {
return cljs.core.key(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,cljs.core.val,dists));
}
});
swatch.core.parse_colors = (function swatch$core$parse_colors(s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
var r = swatch.core.rgb(c);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,[cljs.core.str("#"),cljs.core.str(c)].join(''),cljs.core.cst$kw$rgb,r,cljs.core.cst$kw$octant,swatch.core.octant(r)], null);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/,/));
});
swatch.core.colors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
swatch.core.update_colors_BANG_ = (function swatch$core$update_colors_BANG_(){
var G__7354 = swatch.core.colors;
var G__7355 = cljs.core.group_by(cljs.core.cst$kw$octant,swatch.core.parse_colors(location.hash.slice((1))));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__7354,G__7355) : cljs.core.reset_BANG_.call(null,G__7354,G__7355));
});
swatch.core.swatch = (function swatch$core$swatch(p__7356){
var map__7359 = p__7356;
var map__7359__$1 = ((((!((map__7359 == null)))?((((map__7359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7359):map__7359);
var c = map__7359__$1;
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7359__$1,cljs.core.cst$kw$octant);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7359__$1,cljs.core.cst$kw$color);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$swatch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data_DASH_color,color,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,color], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,color], null));
});
swatch.core.swatches = (function swatch$core$swatches(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5095__auto__ = (function swatch$core$swatches_$_iter__7372(s__7373){
return (new cljs.core.LazySeq(null,(function (){
var s__7373__$1 = s__7373;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__7373__$1);
if(temp__4425__auto__){
var s__7373__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7373__$2)){
var c__5093__auto__ = cljs.core.chunk_first(s__7373__$2);
var size__5094__auto__ = cljs.core.count(c__5093__auto__);
var b__7375 = cljs.core.chunk_buffer(size__5094__auto__);
if((function (){var i__7374 = (0);
while(true){
if((i__7374 < size__5094__auto__)){
var vec__7380 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5093__auto__,i__7374);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7380,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7380,(1),null);
cljs.core.chunk_append(b__7375,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,[cljs.core.str(cljs.core.name(g)),cljs.core.str("s")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map.cljs$core$IFn$_invoke$arity$2(swatch.core.swatch,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (i__7374,vec__7380,g,cs,c__5093__auto__,size__5094__auto__,b__7375,s__7373__$2,temp__4425__auto__){
return (function (p1__7361_SHARP_){
return swatch.core.dist(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),cljs.core.cst$kw$rgb.cljs$core$IFn$_invoke$arity$1(p1__7361_SHARP_));
});})(i__7374,vec__7380,g,cs,c__5093__auto__,size__5094__auto__,b__7375,s__7373__$2,temp__4425__auto__))
,cs))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,g], null)));

var G__7382 = (i__7374 + (1));
i__7374 = G__7382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7375),swatch$core$swatches_$_iter__7372(cljs.core.chunk_rest(s__7373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7375),null);
}
} else {
var vec__7381 = cljs.core.first(s__7373__$2);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7381,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7381,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,[cljs.core.str(cljs.core.name(g)),cljs.core.str("s")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map.cljs$core$IFn$_invoke$arity$2(swatch.core.swatch,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (vec__7381,g,cs,s__7373__$2,temp__4425__auto__){
return (function (p1__7361_SHARP_){
return swatch.core.dist(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),cljs.core.cst$kw$rgb.cljs$core$IFn$_invoke$arity$1(p1__7361_SHARP_));
});})(vec__7381,g,cs,s__7373__$2,temp__4425__auto__))
,cs))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,g], null)),swatch$core$swatches_$_iter__7372(cljs.core.rest(s__7373__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5095__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.val),cljs.core._GT_,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(swatch.core.colors) : cljs.core.deref.call(null,swatch.core.colors))));
})())], null);
});
var G__7383_7385 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [swatch.core.swatches], null);
var G__7384_7386 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__7383_7385,G__7384_7386) : reagent.core.render_component.call(null,G__7383_7385,G__7384_7386));
window.addEventListener("hashchange",(function (e){
return swatch.core.update_colors_BANG_();
}),false);
swatch.core.update_colors_BANG_();
