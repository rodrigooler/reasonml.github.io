webpackJsonp([223],{"./node_modules/json-loader/index.js!./.cache/json/api-more-labels-set-s-html.json":function(e,t){e.exports={data:{file:{relativePath:"api/MoreLabels.Set.S.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="MoreLabels.Set.OrderedType.html" title="MoreLabels.Set.OrderedType">Previous</a>\n&#xA0;<a class="up" href="MoreLabels.Set.html" title="MoreLabels.Set">Up</a>\n&#xA0;</div>\n<h1>Module type <a href="type_MoreLabels.Set.S.html">MoreLabels.Set.S</a></h1>\n\n<pre><span class="keyword">module</span> type S = sig .. end</pre><hr width="100%">\n\n<pre><span class="keyword">type</span> elt;\n</pre>\n\n\n<pre><span class="keyword">type</span> t;\n</pre>\n\n\n<pre><span class="keyword">let</span> empty: t;\n</pre>\n<pre><span class="keyword">let</span> is_empty: t =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> mem: elt =&gt; t =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> add: elt =&gt; t =&gt; t;\n</pre>\n<pre><span class="keyword">let</span> singleton: elt =&gt; t;\n</pre>\n<pre><span class="keyword">let</span> remove: elt =&gt; t =&gt; t;\n</pre>\n<pre><span class="keyword">let</span> union: t =&gt; t =&gt; t;\n</pre>\n<pre><span class="keyword">let</span> inter: t =&gt; t =&gt; t;\n</pre>\n<pre><span class="keyword">let</span> diff: t =&gt; t =&gt; t;\n</pre>\n<pre><span class="keyword">let</span> compare: t =&gt; t =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> equal: t =&gt; t =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> subset: t =&gt; t =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> iter: f::(elt =&gt; unit) =&gt; t =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> fold: f::(elt =&gt; &apos;a =&gt; &apos;a) =&gt; t =&gt; init::&apos;a =&gt; &apos;a;\n</pre>\n<pre><span class="keyword">let</span> for_all: f::(elt =&gt; bool) =&gt; t =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> exists: f::(elt =&gt; bool) =&gt; t =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> filter: f::(elt =&gt; bool) =&gt; t =&gt; t;\n</pre>\n<pre><span class="keyword">let</span> partition: f::(elt =&gt; bool) =&gt; t =&gt; (t, t);\n</pre>\n<pre><span class="keyword">let</span> cardinal: t =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> elements: t =&gt; list elt;\n</pre>\n<pre><span class="keyword">let</span> min_elt: t =&gt; elt;\n</pre>\n<pre><span class="keyword">let</span> max_elt: t =&gt; elt;\n</pre>\n<pre><span class="keyword">let</span> choose: t =&gt; elt;\n</pre>\n<pre><span class="keyword">let</span> split: elt =&gt; t =&gt; (t, bool, t);\n</pre>\n<pre><span class="keyword">let</span> find: elt =&gt; t =&gt; elt;\n</pre>\n<pre><span class="keyword">let</span> of_list: list elt =&gt; t;\n</pre></div>'}}},pathContext:{relativePath:"api/MoreLabels.Set.S.html"}}}});
//# sourceMappingURL=path---api-more-labels-set-s-html-4ed5d2fad6cea319aa5b.js.map