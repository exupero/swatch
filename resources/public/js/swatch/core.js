// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('swatch.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_();
swatch.core.rgb = (function swatch$core$rgb(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10444_SHARP_){
var G__10447 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__10444_SHARP_);
var G__10448 = (16);
return parseInt(G__10447,G__10448);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(2),c));
});
swatch.core.sqr = (function swatch$core$sqr(p1__10449_SHARP_){
return (p1__10449_SHARP_ * p1__10449_SHARP_);
});
swatch.core.dist = (function swatch$core$dist(p__10450,p__10451){
var vec__10454 = p__10450;
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10454,(0),null);
var g1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10454,(1),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10454,(2),null);
var vec__10455 = p__10451;
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10455,(0),null);
var g2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10455,(1),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10455,(2),null);
return Math.sqrt(((swatch.core.sqr((r1 - r2)) + swatch.core.sqr((g1 - g2))) + swatch.core.sqr((b1 - b2))));
});
swatch.core.cross = (function swatch$core$cross(p__10456,p__10457){
var vec__10460 = p__10456;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10460,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10460,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10460,(2),null);
var vec__10461 = p__10457;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10461,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10461,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10461,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((y1 * z2) - (y2 * z1)),((x2 * z1) - (x1 * z2)),((x1 * y2) - (x2 * y1))], null);
});
swatch.core.dist_pl = (function swatch$core$dist_pl(p1,p2,p){
return (swatch.core.dist(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),swatch.core.cross(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,p1,p2),p)) / swatch.core.dist(p1,p2));
});
swatch.core.most_like = (function swatch$core$most_like(p__10463){
var vec__10465 = p__10463;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10465,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10465,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10465,(2),null);
var c = vec__10465;
var dist_to = ((function (vec__10465,r,g,b,c){
return (function (p1__10462_SHARP_){
return swatch.core.dist_pl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),p1__10462_SHARP_,c);
});})(vec__10465,r,g,b,c))
;
var dists = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$gray,dist_to(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)),cljs.core.cst$kw$red,dist_to(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null)),cljs.core.cst$kw$green,dist_to(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null)),cljs.core.cst$kw$blue,dist_to(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null)),cljs.core.cst$kw$yellow,dist_to(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(0)], null)),cljs.core.cst$kw$cyan,dist_to(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255)], null)),cljs.core.cst$kw$magenta,dist_to(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(255)], null))], null);
return cljs.core.key(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,cljs.core.val,dists));
});
swatch.core.octant = (function swatch$core$octant(c){
return swatch.core.most_like(swatch.core.rgb(c));
});
swatch.core.find_max = (function swatch$core$find_max(m){
return cljs.core.key(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.val,m));
});
swatch.core.vote = (function swatch$core$vote(var_args){
var args10467 = [];
var len__5381__auto___10473 = arguments.length;
var i__5382__auto___10474 = (0);
while(true){
if((i__5382__auto___10474 < len__5381__auto___10473)){
args10467.push((arguments[i__5382__auto___10474]));

var G__10475 = (i__5382__auto___10474 + (1));
i__5382__auto___10474 = G__10475;
continue;
} else {
}
break;
}

var G__10469 = args10467.length;
switch (G__10469) {
case 1:
return swatch.core.vote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return swatch.core.vote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10467.length)].join('')));

}
});

swatch.core.vote.cljs$core$IFn$_invoke$arity$1 = (function (cs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10466_SHARP_){
return swatch.core.vote.cljs$core$IFn$_invoke$arity$2(cs,p1__10466_SHARP_);
}),cs);
});

swatch.core.vote.cljs$core$IFn$_invoke$arity$2 = (function (cs,c){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,cljs.core.cst$kw$vote,swatch.core.find_max(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core._PLUS_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10470){
var map__10471 = p__10470;
var map__10471__$1 = ((((!((map__10471 == null)))?((((map__10471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10471):map__10471);
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10471__$1,cljs.core.cst$kw$octant);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10471__$1,cljs.core.cst$kw$rgb);
var r = cljs.core.cst$kw$rgb.cljs$core$IFn$_invoke$arity$1(c);
return cljs.core.PersistentArrayMap.fromArray([o,((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,r)))?((1) / swatch.core.dist(x,r)):0.2)], true, false);
}),cs)))));
});

swatch.core.vote.cljs$lang$maxFixedArity = 2;
swatch.core.parse_colors = (function swatch$core$parse_colors(s){
return swatch.core.vote.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,[cljs.core.str("#"),cljs.core.str(c)].join(''),cljs.core.cst$kw$rgb,swatch.core.rgb(c),cljs.core.cst$kw$octant,swatch.core.octant(c)], null);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/,/)));
});
swatch.core.colors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
swatch.core.update_colors_BANG_ = (function swatch$core$update_colors_BANG_(){
var G__10479 = swatch.core.colors;
var G__10480 = cljs.core.group_by(cljs.core.cst$kw$vote,swatch.core.parse_colors(location.hash.slice((1))));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10479,G__10480) : cljs.core.reset_BANG_.call(null,G__10479,G__10480));
});
swatch.core.best_by = (function swatch$core$best_by(f,xs){
return cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10481_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__10481_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__10481_SHARP_) : f.call(null,p1__10481_SHARP_))],null));
}),xs)));
});
swatch.core.chain_by = (function swatch$core$chain_by(f,xs){
var acc = cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),xs);
var xs__$1 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),xs);
while(true){
if(cljs.core.seq(xs__$1)){
var x = cljs.core.last(acc);
var best = swatch.core.best_by(((function (acc,xs__$1,x){
return (function (p1__10482_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,p1__10482_SHARP_) : f.call(null,x,p1__10482_SHARP_));
});})(acc,xs__$1,x))
,xs__$1);
var xs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (acc,xs__$1,x,best){
return (function (p1__10483_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(best,p1__10483_SHARP_);
});})(acc,xs__$1,x,best))
,xs__$1);
var G__10484 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,best);
var G__10485 = xs__$2;
acc = G__10484;
xs__$1 = G__10485;
continue;
} else {
return acc;
}
break;
}
});
swatch.core.swatch = (function swatch$core$swatch(p__10486){
var map__10489 = p__10486;
var map__10489__$1 = ((((!((map__10489 == null)))?((((map__10489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10489):map__10489);
var c = map__10489__$1;
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10489__$1,cljs.core.cst$kw$octant);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10489__$1,cljs.core.cst$kw$color);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$swatch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data_DASH_color,color,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,color], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,color], null));
});
swatch.core.swatches = (function swatch$core$swatches(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5095__auto__ = (function swatch$core$swatches_$_iter__10503(s__10504){
return (new cljs.core.LazySeq(null,(function (){
var s__10504__$1 = s__10504;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10504__$1);
if(temp__4425__auto__){
var s__10504__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10504__$2)){
var c__5093__auto__ = cljs.core.chunk_first(s__10504__$2);
var size__5094__auto__ = cljs.core.count(c__5093__auto__);
var b__10506 = cljs.core.chunk_buffer(size__5094__auto__);
if((function (){var i__10505 = (0);
while(true){
if((i__10505 < size__5094__auto__)){
var vec__10511 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5093__auto__,i__10505);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10511,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10511,(1),null);
cljs.core.chunk_append(b__10506,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,[cljs.core.str(cljs.core.name(g)),cljs.core.str("s")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map.cljs$core$IFn$_invoke$arity$2(swatch.core.swatch,swatch.core.chain_by(((function (i__10505,vec__10511,g,cs,c__5093__auto__,size__5094__auto__,b__10506,s__10504__$2,temp__4425__auto__){
return (function (p1__10491_SHARP_,p2__10492_SHARP_){
return swatch.core.dist(cljs.core.cst$kw$rgb.cljs$core$IFn$_invoke$arity$1(p1__10491_SHARP_),cljs.core.cst$kw$rgb.cljs$core$IFn$_invoke$arity$1(p2__10492_SHARP_));
});})(i__10505,vec__10511,g,cs,c__5093__auto__,size__5094__auto__,b__10506,s__10504__$2,temp__4425__auto__))
,cs))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,g], null)));

var G__10513 = (i__10505 + (1));
i__10505 = G__10513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10506),swatch$core$swatches_$_iter__10503(cljs.core.chunk_rest(s__10504__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10506),null);
}
} else {
var vec__10512 = cljs.core.first(s__10504__$2);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10512,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10512,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,[cljs.core.str(cljs.core.name(g)),cljs.core.str("s")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.map.cljs$core$IFn$_invoke$arity$2(swatch.core.swatch,swatch.core.chain_by(((function (vec__10512,g,cs,s__10504__$2,temp__4425__auto__){
return (function (p1__10491_SHARP_,p2__10492_SHARP_){
return swatch.core.dist(cljs.core.cst$kw$rgb.cljs$core$IFn$_invoke$arity$1(p1__10491_SHARP_),cljs.core.cst$kw$rgb.cljs$core$IFn$_invoke$arity$1(p2__10492_SHARP_));
});})(vec__10512,g,cs,s__10504__$2,temp__4425__auto__))
,cs))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,g], null)),swatch$core$swatches_$_iter__10503(cljs.core.rest(s__10504__$2)));
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
var G__10514_10516 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [swatch.core.swatches], null);
var G__10515_10517 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10514_10516,G__10515_10517) : reagent.core.render_component.call(null,G__10514_10516,G__10515_10517));
window.addEventListener("hashchange",(function (e){
return swatch.core.update_colors_BANG_();
}),false);
swatch.core.update_colors_BANG_();
