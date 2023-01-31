import{_ as s,c as n,o as a,e as l}from"./app.8be5143c.js";const b=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"On-demand Import","slug":"on-demand-import","link":"#on-demand-import","children":[]}]}],"relativePath":"guide/getting-started.md","lastUpdated":1662695480000}'),p={name:"guide/getting-started.md"},e=l(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><ol><li><p>Add <code>excited-ui</code> and its supporting libraries</p><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#6272A4;"># pnpm</span></span>
<span class="line"><span style="color:#F8F8F2;">pnpm add excited-ui </span><span style="color:#FF79C6;">&amp;&amp;</span><span style="color:#F8F8F2;"> pnpm add unocss</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#6272A4;"># yarn</span></span>
<span class="line"><span style="color:#F8F8F2;">yarn add excited-ui </span><span style="color:#FF79C6;">&amp;&amp;</span><span style="color:#F8F8F2;"> yarn add unocss</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#6272A4;"># npm</span></span>
<span class="line"><span style="color:#F8F8F2;">npm install excited-ui </span><span style="color:#FF79C6;">&amp;&amp;</span><span style="color:#F8F8F2;"> npm install unocss</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ol><p>ExcitedUI is based on UnoCSS, it means that it works properly with uno, so you should install it.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><ol><li>Add UnoCSS to <code>vite.config.js</code></li></ol><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FF79C6;">import</span><span style="color:#F8F8F2;"> Unocss </span><span style="color:#FF79C6;">from</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">unocss/vite</span><span style="color:#E9F284;">&#39;</span></span>
<span class="line"><span style="color:#FF79C6;">export</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">default</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    plugins</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> [</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#50FA7B;">Unocss</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">    ],</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2"><li><p>Create UnoCSS Config file <code>uno.config.js</code> in root of the project with below content:</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#FF79C6;">import</span><span style="color:#F8F8F2;"> { presetThemeDefault } </span><span style="color:#FF79C6;">from</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&quot;</span><span style="color:#F1FA8C;">excited-ui</span><span style="color:#E9F284;">&quot;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#FF79C6;">import</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  defineConfig,</span></span>
<span class="line"><span style="color:#F8F8F2;">  presetIcons,</span></span>
<span class="line"><span style="color:#F8F8F2;">  presetUno,</span></span>
<span class="line"><span style="color:#F8F8F2;">} </span><span style="color:#FF79C6;">from</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">unocss</span><span style="color:#E9F284;">&#39;</span></span>
<span class="line"><span style="color:#FF79C6;">export</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">default</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;">defineConfig</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">  presets</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> [</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#50FA7B;">presetUno</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#50FA7B;">presetIcons</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">      scale</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#BD93F9;">1.2</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">      extraProperties</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">        height</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">1.5em</span><span style="color:#E9F284;">&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line highlighted"><span style="color:#F8F8F2;">        </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">flex-shrink</span><span style="color:#E9F284;">&#39;</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">0</span><span style="color:#E9F284;">&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">    }),</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#50FA7B;">presetThemeDefault</span><span style="color:#F8F8F2;">(),</span></span>
<span class="line"><span style="color:#F8F8F2;">  ],</span></span>
<span class="line"><span style="color:#F8F8F2;">  include</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> [</span><span style="color:#FF5555;">/</span><span style="color:#BD93F9;">.</span><span style="color:#FF79C6;">*</span><span style="color:#F1FA8C;">\\/excited-ui\\.js</span><span style="color:#FFB86C;">(</span><span style="color:#BD93F9;">.</span><span style="color:#FF79C6;">*</span><span style="color:#FFB86C;">)</span><span style="color:#FF79C6;">?$</span><span style="color:#FF5555;">/</span><span style="color:#F8F8F2;">, </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">./**/*.vue</span><span style="color:#E9F284;">&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">./**/*.md</span><span style="color:#E9F284;">&#39;</span><span style="color:#F8F8F2;">],</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></li><li><p>Update your <code>main.js</code> file like below:</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF79C6;">import</span><span style="color:#F8F8F2;"> { createApp } </span><span style="color:#FF79C6;">from</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">vue</span><span style="color:#E9F284;">&#39;</span></span>
<span class="line"><span style="color:#FF79C6;">import</span><span style="color:#F8F8F2;"> App </span><span style="color:#FF79C6;">from</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">./App.vue</span><span style="color:#E9F284;">&#39;</span></span>
<span class="line"><span style="color:#FF79C6;">import</span><span style="color:#F8F8F2;"> { ExcitedUI } </span><span style="color:#FF79C6;">from</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&quot;</span><span style="color:#F1FA8C;">excited-ui</span><span style="color:#E9F284;">&quot;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#6272A4;">// UnoCSS import</span></span>
<span class="line"><span style="color:#FF79C6;">import</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">uno.css</span><span style="color:#E9F284;">&#39;</span></span>
<span class="line"><span style="color:#6272A4;">// import styles</span></span>
<span class="line"><span style="color:#FF79C6;">import</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&quot;</span><span style="color:#F1FA8C;">excited-ui/dist/assets/index.css</span><span style="color:#E9F284;">&quot;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#6272A4;">// Using \`app.use(ExcitedUI)\` will register all the components globally</span></span>
<span class="line"><span style="color:#50FA7B;">createApp</span><span style="color:#F8F8F2;">(App)</span></span>
<span class="line"><span style="color:#F8F8F2;">  .</span><span style="color:#50FA7B;">use</span><span style="color:#F8F8F2;">(ExcitedUI)</span></span>
<span class="line"><span style="color:#F8F8F2;">  .</span><span style="color:#50FA7B;">mount</span><span style="color:#F8F8F2;">(</span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">#app</span><span style="color:#E9F284;">&#39;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li></ol><p>It&#39;s done! \u{1F973}</p><h3 id="on-demand-import" tabindex="-1">On-demand Import <a class="header-anchor" href="#on-demand-import" aria-hidden="true">#</a></h3><p>First you need to install <a href="https://github.com/antfu/unplugin-vue-components" target="_blank" rel="noreferrer">unplugin-vue-components</a> lets you auto import components on demand. With this you can omit import statement and still get benefits of tree shaking.</p><ol><li>install <code>unplugin-vue-components</code></li></ol><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#F8F8F2;">pnpm add -D unplugin-vue-components</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="2"><li><p>Add following in <code>vite.config.js</code>:</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#6272A4;">// other imports</span></span>
<span class="line"><span style="color:#FF79C6;">import</span><span style="color:#F8F8F2;"> Components </span><span style="color:#FF79C6;">from</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">unplugin-vue-components/vite</span><span style="color:#E9F284;">&#39;</span></span>
<span class="line"><span style="color:#FF79C6;">import</span><span style="color:#F8F8F2;"> { ExComponentResolver } </span><span style="color:#FF79C6;">from</span><span style="color:#F8F8F2;"> </span><span style="color:#E9F284;">&#39;</span><span style="color:#F1FA8C;">excited-ui</span><span style="color:#E9F284;">&#39;</span></span>
<span class="line"><span style="color:#FF79C6;">export</span><span style="color:#F8F8F2;"> </span><span style="color:#FF79C6;">default</span><span style="color:#F8F8F2;"> </span><span style="color:#50FA7B;">defineConfig</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">  plugins</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> [</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#6272A4;">// other plugins</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#50FA7B;">Components</span><span style="color:#F8F8F2;">({</span></span>
<span class="line"><span style="color:#F8F8F2;">      resolvers</span><span style="color:#FF79C6;">:</span><span style="color:#F8F8F2;"> [</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span><span style="color:#50FA7B;">ExComponentResolver</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">      ]</span></span>
<span class="line"><span style="color:#F8F8F2;">    }),</span></span>
<span class="line"><span style="color:#F8F8F2;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#6272A4;">// other config</span></span>
<span class="line"><span style="color:#F8F8F2;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li><li><p>Now, just use components without import manually because it will be auto imported on demand \u2728</p><div class="language-vue line-numbers-mode"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#FF79C6;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">  &lt;</span><span style="color:#8BE9FD;">ExButton</span><span style="color:#F8F8F2;">&gt;Primary&lt;/</span><span style="color:#8BE9FD;">ExButton</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#FF79C6;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ol>`,14),o=[e];function r(c,t,F,i,y,u){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{b as __pageData,m as default};