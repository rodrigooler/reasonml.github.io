webpackJsonp([220],{"./node_modules/json-loader/index.js!./.cache/json/api-obj-html.json":function(n,e){n.exports={data:{file:{relativePath:"api/Obj.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Nativeint.html" title="Nativeint">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Oo.html" title="Oo">Next</a>\n</div>\n<h1>Module <a href="type_Obj.html">Obj</a></h1>\n\n<pre><span class="keyword">module</span> Obj: sig .. end</pre><div class="info module top">\nOperations on internal representations of values.\n<p>\n\n   Not for the casual user.<br>\n</p></div>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> t;\n</pre>\n\n\n<pre><span class="keyword">let</span> repr: &apos;a =&gt; t;\n</pre>\n<pre><span class="keyword">let</span> obj: t =&gt; &apos;a;\n</pre>\n<pre><span class="keyword">let</span> magic: &apos;a =&gt; &apos;b;\n</pre>\n<pre><span class="keyword">let</span> is_block: t =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> is_int: t =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> tag: t =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> set_tag: t =&gt; int =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> size: t =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> field: t =&gt; int =&gt; t;\n</pre>\n<pre><span class="keyword">let</span> set_field: t =&gt; int =&gt; t =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> double_field: t =&gt; int =&gt; float;\n</pre>\n<pre><span class="keyword">let</span> set_double_field: t =&gt; int =&gt; float =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> new_block: int =&gt; int =&gt; t;\n</pre>\n<pre><span class="keyword">let</span> dup: t =&gt; t;\n</pre>\n<pre><span class="keyword">let</span> truncate: t =&gt; int =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> add_offset: t =&gt; Int32.t =&gt; t;\n</pre>\n<pre><span class="keyword">let</span> first_non_constant_constructor_tag: int;\n</pre>\n<pre><span class="keyword">let</span> last_non_constant_constructor_tag: int;\n</pre>\n<pre><span class="keyword">let</span> lazy_tag: int;\n</pre>\n<pre><span class="keyword">let</span> closure_tag: int;\n</pre>\n<pre><span class="keyword">let</span> object_tag: int;\n</pre>\n<pre><span class="keyword">let</span> infix_tag: int;\n</pre>\n<pre><span class="keyword">let</span> forward_tag: int;\n</pre>\n<pre><span class="keyword">let</span> no_scan_tag: int;\n</pre>\n<pre><span class="keyword">let</span> abstract_tag: int;\n</pre>\n<pre><span class="keyword">let</span> string_tag: int;\n</pre>\n<pre><span class="keyword">let</span> double_tag: int;\n</pre>\n<pre><span class="keyword">let</span> double_array_tag: int;\n</pre>\n<pre><span class="keyword">let</span> custom_tag: int;\n</pre>\n<pre><span class="keyword">let</span> final_tag: int;\n</pre>\n<pre><span class="keyword">let</span> int_tag: int;\n</pre>\n<pre><span class="keyword">let</span> out_of_heap_tag: int;\n</pre>\n<pre><span class="keyword">let</span> unaligned_tag: int;\n</pre>\n<pre><span class="keyword">let</span> extension_name: &apos;a =&gt; string;\n</pre>\n<pre><span class="keyword">let</span> extension_id: &apos;a =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> extension_slot: &apos;a =&gt; t;\n</pre><br>\nThe following two functions are deprecated.  Use module <a href="Marshal.html"><code class="code">Marshal</code></a>\n    instead.<br>\n\n<pre><span class="keyword">let</span> marshal: t =&gt; bytes;\n</pre>\n<pre><span class="keyword">let</span> unmarshal: bytes =&gt; int =&gt; (t, int);\n</pre></div>'}}},pathContext:{relativePath:"api/Obj.html"}}}});
//# sourceMappingURL=path---api-obj-html-458dbd745e5e75f3cf81.js.map