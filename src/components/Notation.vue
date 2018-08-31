<style scoped>
code {
  font-weight: bold;
  padding: 0 0.5em;
}

.notation {
  line-height: 170%;
  max-width: 640px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
</style>


<template>
    <div class="notation">
        <p>許容せん断応力は許容引張応力の<code>0.8倍</code>を初期値にしています。実験的にはこの程度になることが多いですが、ミーゼスの降伏条件式からは<code>1/&radic;3</code>と導かれます。</p>
        <p>単位は何でもいいです。寸法と<code>&sigma;</code>の長さの単位を合わせてください。荷重・トルクともに<code>&sigma;</code>に含まれる単位で表示されます。<code>&sigma;</code>に<code>N/mm<sup>2</sup></code>を使用するとトルクは<code>N&sdot;mm</code>となるので注意してください。</p>
        <p>結果は保証値ではありません 。様々な単純化や近似をして計算しています。計算過程の詳細はこちら</p>
        <p>スプリングピンを使用する場合はピン径として呼び径を入力し、<code>g</code>の数値がピンの2重せん断荷重(破壊荷重)から推定した許容荷重と等しくなるように<code>&sigma;p</code>を設定してください。耐力(許容応力)と引張強度(破壊応力)の違いに注意してください。</p>
        <p>間違いの指摘や、実験や経験での知見をお持ちでしたら<a target="_blank" href="https://twitter.com/RyoNawa"><i class="fab fa-twitter"></i>@RyoNawa</a>または<a href="mailto:&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#109;&#115;&#104;&#97;&#99;&#107;&#101;&#114;&#115;&#46;&#99;&#111;&#46;&#106;&#112;"><i class="far fa-envelope"></i>&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#109;&#115;&#104;&#97;&#99;&#107;&#101;&#114;&#115;&#46;&#99;&#111;&#46;&#106;&#112;</a>までお願いします。</p>
    </div>
</template>
