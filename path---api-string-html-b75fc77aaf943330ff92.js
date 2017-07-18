webpackJsonp([188],{"./node_modules/json-loader/index.js!./.cache/json/api-string-html.json":function(e,s){e.exports={data:{file:{relativePath:"api/String.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Stream.html" title="Stream">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="StringLabels.html" title="StringLabels">Next</a>\n</div>\n<h1>Module <a href="type_String.html">String</a></h1>\n\n<pre><span class="keyword">module</span> String: sig .. end</pre><div class="info module top">\nString operations.\n<p>\n\n  A string is an immutable data structure that contains a\n  fixed-length sequence of (single-byte) characters. Each character\n  can be accessed in constant time through its index.\n</p><p>\n\n  Given a string <code class="code">s</code> of length <code class="code">l</code>, we can access each of the <code class="code">l</code>\n  characters of <code class="code">s</code> via its index in the sequence. Indexes start at\n  <code class="code">0</code>, and we will call an index valid in <code class="code">s</code> if it falls within the\n  range <code class="code">[0...l-1]</code> (inclusive). A position is the point between two\n  characters or at the beginning or end of the string.  We call a\n  position valid in <code class="code">s</code> if it falls within the range <code class="code">[0...l]</code>\n  (inclusive). Note that the character at index <code class="code">n</code> is between\n  positions <code class="code">n</code> and <code class="code">n+1</code>.\n</p><p>\n\n  Two parameters <code class="code">start</code> and <code class="code">len</code> are said to designate a valid\n  substring of <code class="code">s</code> if <code class="code">len &gt;= 0</code> and <code class="code">start</code> and <code class="code">start+len</code> are\n  valid positions in <code class="code">s</code>.\n</p><p>\n\n  OCaml strings used to be modifiable in place, for instance via the\n  <a href="String.html#VALset"><code class="code">String.set</code></a> and <a href="String.html#VALblit"><code class="code">String.blit</code></a> functions described below. This\n  usage is deprecated and only possible when the compiler is put in\n  &quot;unsafe-string&quot; mode by giving the <code class="code">-unsafe-string</code> command-line\n  option (which is currently the default for reasons of backward\n  compatibility). This is done by making the types <code class="code">string</code> and\n  <code class="code">bytes</code> (see module <a href="Bytes.html"><code class="code">Bytes</code></a>) interchangeable so that functions\n  expecting byte sequences can also accept strings as arguments and\n  modify them.\n</p><p>\n\n  All new code should avoid this feature and be compiled with the\n  <code class="code">-safe-string</code> command-line option to enforce the separation between\n  the types <code class="code">string</code> and <code class="code">bytes</code>.<br>\n</p></div>\n<hr width="100%">\n\n<pre><span class="keyword">let</span> length: string =&gt; int;\n</pre><div class="info ">\nReturn the length (number of characters) of the given string.<br>\n</div>\n\n<pre><span class="keyword">let</span> get: string =&gt; int =&gt; char;\n</pre><div class="info ">\n<code class="code">String.get s n</code> returns the character at index <code class="code">n</code> in string <code class="code">s</code>.\n   You can also write <code class="code">s.[n]</code> instead of <code class="code">String.get s n</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">n</code> not a valid index in <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> set: bytes =&gt; int =&gt; char =&gt; unit;\n</pre><div class="info ">\n<span class="warning">Deprecated.</span>This is a deprecated alias of <a href="Bytes.html#VALset"><code class="code">Bytes.set</code></a>.<code class="code">\n</code><br>\n<code class="code">String.set s n c</code> modifies byte sequence <code class="code">s</code> in place,\n   replacing the byte at index <code class="code">n</code> with <code class="code">c</code>.\n   You can also write <code class="code">s.[n] &lt;- c</code> instead of <code class="code">String.set s n c</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">n</code> is not a valid index in <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> create: int =&gt; bytes;\n</pre><div class="info ">\n<span class="warning">Deprecated.</span>This is a deprecated alias of <a href="Bytes.html#VALcreate"><code class="code">Bytes.create</code></a>.<code class="code">\n</code><br>\n<code class="code">String.create n</code> returns a fresh byte sequence of length <code class="code">n</code>.\n   The sequence is uninitialized and contains arbitrary bytes.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">n &lt; 0</code> or <code class="code">n &gt; </code><a href="Sys.html#VALmax_string_length"><code class="code">Sys.max_string_length</code></a>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> make: int =&gt; char =&gt; string;\n</pre><div class="info ">\n<code class="code">String.make n c</code> returns a fresh string of length <code class="code">n</code>,\n   filled with the character <code class="code">c</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">n &lt; 0</code> or <code class="code">n &gt; </code><a href="Sys.html#VALmax_string_length"><code class="code">Sys.max_string_length</code></a>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> init: int =&gt; (int =&gt; char) =&gt; string;\n</pre><div class="info ">\n<code class="code">String.init n f</code> returns a string of length <code class="code">n</code>, with character\n    <code class="code">i</code> initialized to the result of <code class="code">f i</code> (called in increasing\n    index order).\n<p>\n\n    Raise <code class="code">Invalid_argument</code> if <code class="code">n &lt; 0</code> or <code class="code">n &gt; </code><a href="Sys.html#VALmax_string_length"><code class="code">Sys.max_string_length</code></a>.<br>\n<b>Since</b> 4.02.0<br>\n</p></div>\n\n<pre><span class="keyword">let</span> copy: string =&gt; string;\n</pre><div class="info ">\n<span class="warning">Deprecated.</span>Because strings are immutable, it doesn&apos;t make much\n    sense to make identical copies of them.<br>\nReturn a copy of the given string.<br>\n</div>\n\n<pre><span class="keyword">let</span> sub: string =&gt; int =&gt; int =&gt; string;\n</pre><div class="info ">\n<code class="code">String.sub s start len</code> returns a fresh string of length <code class="code">len</code>,\n   containing the substring of <code class="code">s</code> that starts at position <code class="code">start</code> and\n   has length <code class="code">len</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">start</code> and <code class="code">len</code> do not\n   designate a valid substring of <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> fill: bytes =&gt; int =&gt; int =&gt; char =&gt; unit;\n</pre><div class="info ">\n<span class="warning">Deprecated.</span>This is a deprecated alias of <a href="Bytes.html#VALfill"><code class="code">Bytes.fill</code></a>.<code class="code">\n</code><br>\n<code class="code">String.fill s start len c</code> modifies byte sequence <code class="code">s</code> in place,\n   replacing <code class="code">len</code> bytes with <code class="code">c</code>, starting at <code class="code">start</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">start</code> and <code class="code">len</code> do not\n   designate a valid range of <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> blit: string =&gt; int =&gt; bytes =&gt; int =&gt; int =&gt; unit;\n</pre><div class="info ">\nSame as <a href="Bytes.html#VALblit_string"><code class="code">Bytes.blit_string</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> concat: string =&gt; list string =&gt; string;\n</pre><div class="info ">\n<code class="code">String.concat sep sl</code> concatenates the list of strings <code class="code">sl</code>,\n    inserting the separator string <code class="code">sep</code> between each.\n<p>\n\n    Raise <code class="code">Invalid_argument</code> if the result is longer than\n    <a href="Sys.html#VALmax_string_length"><code class="code">Sys.max_string_length</code></a> bytes.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> iter: (char =&gt; unit) =&gt; string =&gt; unit;\n</pre><div class="info ">\n<code class="code">String.iter f s</code> applies function <code class="code">f</code> in turn to all\n   the characters of <code class="code">s</code>.  It is equivalent to\n   <code class="code">f s.[0]; f s.[1]; ...; f s.[String.length s - 1]; ()</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> iteri: (int =&gt; char =&gt; unit) =&gt; string =&gt; unit;\n</pre><div class="info ">\nSame as <a href="String.html#VALiter"><code class="code">String.iter</code></a>, but the\n   function is applied to the index of the element as first argument\n   (counting from 0), and the character itself as second argument.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre><span class="keyword">let</span> map: (char =&gt; char) =&gt; string =&gt; string;\n</pre><div class="info ">\n<code class="code">String.map f s</code> applies function <code class="code">f</code> in turn to all the\n    characters of <code class="code">s</code> (in increasing index order) and stores the\n    results in a new string that is returned.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre><span class="keyword">let</span> mapi: (int =&gt; char =&gt; char) =&gt; string =&gt; string;\n</pre><div class="info ">\n<code class="code">String.mapi f s</code> calls <code class="code">f</code> with each character of <code class="code">s</code> and its\n    index (in increasing index order) and stores the results in a new\n    string that is returned.<br>\n<b>Since</b> 4.02.0<br>\n</div>\n\n<pre><span class="keyword">let</span> trim: string =&gt; string;\n</pre><div class="info ">\nReturn a copy of the argument, without leading and trailing\n   whitespace.  The characters regarded as whitespace are: <code class="code">&apos; &apos;</code>,\n   <code class="code">&apos;\\012&apos;</code>, <code class="code">&apos;\\n&apos;</code>, <code class="code">&apos;\\r&apos;</code>, and <code class="code">&apos;\\t&apos;</code>.  If there is neither leading nor\n   trailing whitespace character in the argument, return the original\n   string itself, not a copy.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre><span class="keyword">let</span> escaped: string =&gt; string;\n</pre><div class="info ">\nReturn a copy of the argument, with special characters\n   represented by escape sequences, following the lexical\n   conventions of OCaml.  If there is no special\n   character in the argument, return the original string itself,\n   not a copy. Its inverse function is Scanf.unescaped.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if the result is longer than\n   <a href="Sys.html#VALmax_string_length"><code class="code">Sys.max_string_length</code></a> bytes.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> index: string =&gt; char =&gt; int;\n</pre><div class="info ">\n<code class="code">String.index s c</code> returns the index of the first\n   occurrence of character <code class="code">c</code> in string <code class="code">s</code>.\n<p>\n\n   Raise <code class="code">Not_found</code> if <code class="code">c</code> does not occur in <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> rindex: string =&gt; char =&gt; int;\n</pre><div class="info ">\n<code class="code">String.rindex s c</code> returns the index of the last\n   occurrence of character <code class="code">c</code> in string <code class="code">s</code>.\n<p>\n\n   Raise <code class="code">Not_found</code> if <code class="code">c</code> does not occur in <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> index_from: string =&gt; int =&gt; char =&gt; int;\n</pre><div class="info ">\n<code class="code">String.index_from s i c</code> returns the index of the\n   first occurrence of character <code class="code">c</code> in string <code class="code">s</code> after position <code class="code">i</code>.\n   <code class="code">String.index s c</code> is equivalent to <code class="code">String.index_from s 0 c</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">i</code> is not a valid position in <code class="code">s</code>.\n   Raise <code class="code">Not_found</code> if <code class="code">c</code> does not occur in <code class="code">s</code> after position <code class="code">i</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> rindex_from: string =&gt; int =&gt; char =&gt; int;\n</pre><div class="info ">\n<code class="code">String.rindex_from s i c</code> returns the index of the\n   last occurrence of character <code class="code">c</code> in string <code class="code">s</code> before position <code class="code">i+1</code>.\n   <code class="code">String.rindex s c</code> is equivalent to\n   <code class="code">String.rindex_from s (String.length s - 1) c</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">i+1</code> is not a valid position in <code class="code">s</code>.\n   Raise <code class="code">Not_found</code> if <code class="code">c</code> does not occur in <code class="code">s</code> before position <code class="code">i+1</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> contains: string =&gt; char =&gt; bool;\n</pre><div class="info ">\n<code class="code">String.contains s c</code> tests if character <code class="code">c</code>\n   appears in the string <code class="code">s</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> contains_from: string =&gt; int =&gt; char =&gt; bool;\n</pre><div class="info ">\n<code class="code">String.contains_from s start c</code> tests if character <code class="code">c</code>\n   appears in <code class="code">s</code> after position <code class="code">start</code>.\n   <code class="code">String.contains s c</code> is equivalent to\n   <code class="code">String.contains_from s 0 c</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">start</code> is not a valid position in <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> rcontains_from: string =&gt; int =&gt; char =&gt; bool;\n</pre><div class="info ">\n<code class="code">String.rcontains_from s stop c</code> tests if character <code class="code">c</code>\n   appears in <code class="code">s</code> before position <code class="code">stop+1</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">stop &lt; 0</code> or <code class="code">stop+1</code> is not a valid\n   position in <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> uppercase: string =&gt; string;\n</pre><div class="info ">\nReturn a copy of the argument, with all lowercase letters\n   translated to uppercase, including accented letters of the ISO\n   Latin-1 (8859-1) character set.<br>\n</div>\n\n<pre><span class="keyword">let</span> lowercase: string =&gt; string;\n</pre><div class="info ">\nReturn a copy of the argument, with all uppercase letters\n   translated to lowercase, including accented letters of the ISO\n   Latin-1 (8859-1) character set.<br>\n</div>\n\n<pre><span class="keyword">let</span> capitalize: string =&gt; string;\n</pre><div class="info ">\nReturn a copy of the argument, with the first character set to uppercase.<br>\n</div>\n\n<pre><span class="keyword">let</span> uncapitalize: string =&gt; string;\n</pre><div class="info ">\nReturn a copy of the argument, with the first character set to lowercase.<br>\n</div>\n\n<pre><span class="keyword">type</span> t = string;\n</pre>\n<div class="info ">\nAn alias for the type of strings.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> compare: t =&gt; t =&gt; int;\n</pre><div class="info ">\nThe comparison function for strings, with the same specification as\n    <a href="Pervasives.html#VALcompare"><code class="code">Pervasives.compare</code></a>.  Along with the type <code class="code">t</code>, this function <code class="code">compare</code>\n    allows the module <code class="code">String</code> to be passed as argument to the functors\n    <a href="Set.Make.html"><code class="code">Set.Make</code></a> and <a href="Map.Make.html"><code class="code">Map.Make</code></a>.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/String.html"}}}});
//# sourceMappingURL=path---api-string-html-b75fc77aaf943330ff92.js.map