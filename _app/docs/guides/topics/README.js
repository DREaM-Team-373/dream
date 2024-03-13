Ext.data.JsonP.topics({"guide":"<h1 id='topics-section-topics'>Topics</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/topics-section-overview'>Overview</a></li>\n<li><a href='#!/guide/topics-section-options'>Options</a></li>\n<li><a href='#!/guide/topics-section-see-also'>See Also</a></li>\n</ol>\n</div>\n\n<p>The Topics tool provides a rudimentary way of generating term clusters from a document or corpus and then seeing how each topic (term cluster) is distributed across the document or corpus.</p>\n\n<p>Use it with a <a href=\"../?view=Topics&corpus=austen\" target=\"_blank\">Jane Austen corpus</a> or with <a href=\"../?view=Topics\" target=\"_blank\">your own corpus</a>.</p>\n\n<h2 id='topics-section-overview'>Overview</h2>\n\n<p>The Topics tool is designed to help you understand what topics (term clusters) exist and how they are distributed. If you have a single document in your corpus then the document will be divided into segments of equal length for the topic modelling (how many text segments depends on the size of the document). If you have multiple documents then the topic modelling is performed on each document. It's worth noting that topic modelling probably works best with shorter documents (article length rather than book length). By default <em>Topics</em> only uses the first 1,000 words in a document (see the options for how to modify that).</p>\n\n<p>The topic modelling uses a technique called <a href=\"https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation\">latent Dirichlet allocation</a> and this tool uses an implementation called <a href=\"https://github.com/mimno/jsLDA\">jsLDA by David Mimno</a>. To simplify, words in each document are randomly assigned to a specified number of topics (you can determine the number of topics). The algorithm then goes through a number of iterations (50) and tries to refine the model of which terms are best suited to which topics (based on co-occurrence in the documents).</p>\n\n<p>It's important to understand that this algorithm starts by randomly assigning words to topics and so every time topic modelling is run you are likely to get different results. This can be frustrating and disconcerting, but at the same time, chances are good that every time it's run the topics have some internal coherence.</p>\n\n<p>Each topic technically contains every word in the corpus, but only the top 10 words are displayed. The order of the words is important and the first words likely contribute much more to the topic than the latter words.</p>\n\n<p>The table view shows the following two columns:</p>\n\n<ul>\n<li><em>Topic</em>: this is the topic, or cluster of terms (each row displays 10 words, the number of rows corresponds to the number of topics the user has specified, 25 by default)</li>\n<li><em>Scores</em>: this shows how prevalent the topic is for each document in the corpus (or segment in the document) – upward spikes show that this topic is more present (you can hover over the line to see which document is represented)</li>\n</ul>\n\n\n<iframe src=\"../tool/Topics/?corpus=austen&subtitle=The+Works+of+Jane+Austen\" style=\"width: 90%; height: 350px;\"></iframe>\n\n\n<div style=\"width: 90%; text-align: center; margin-bottom: 1em;\">Topics with the Works of Jane Austen. You can also <a href=\"../?view=Topics\" target=\"_blank\">use Topics with your own corpus</a>.</div>\n\n\n<h2 id='topics-section-options'>Options</h2>\n\n<p>You can search for words (or part words) displayed in the topics using the search box. Matches will be highlighted.</p>\n\n<p>You can use the <em>Topics</em> slider to determine how many topics to generate, from 1 to 200 (default is 25). Changing this value will remove current topics.</p>\n\n<p>You can run another 50 iterations of the topic modelling with the current topics (and repeat as often as you wish). The current topics are kept but the displayed terms may change with further iterations.</p>\n\n<p>Clicking on the <a href=\"#!/guide/options\">Options</a> icon also allows you to define a set of stopwords to exclude – see the <a href=\"#!/guide/stopwords\">stopwords guide</a> for more information.</p>\n\n<p>The options icon also allows you to modify the maximum number of terms per document to use for the topic modelling. By default this is set to 1,000 (words, including stopwords), which can be increased somewhat, but depending on the size of your corpus, you may not want to go too high since it can cause problems with the server and with your browser.</p>\n\n<h2 id='topics-section-see-also'>See Also</h2>\n\n<ul>\n<li><a href=\"#!/guide/start\">Getting Started</a></li>\n<li><a href=\"#!/guide/grids\">Grids</a></li>\n<li><a href=\"#!/guide/skins-section-default-skin\">Default Skin</a></li>\n<li><a href=\"#!/guide/tools\">List of Tools</a></li>\n</ul>\n\n","title":"Topics"});