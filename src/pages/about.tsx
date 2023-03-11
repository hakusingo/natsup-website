import Head from 'next/head';
import Layout from '@/components/layout';
import Hero from '@/components/parts/hero';
import Image from 'next/image';
import Endroll from '@/components/parts/endroll';

const aboutSugaringTitle = "シュガーリングについて"

const Contents = (props: any) => {
  return (
    <div className='mx-auto px-4 container '>
      <p className='whitespace-pre-wrap font-mill leading-loose text-[14px] text-[#656565]'>{props.contentsText}</p>
    </div>
  )
}


const Heading = (props: any) => {
  return (
    <div className='mt-24 px-4 container mx-auto'>
      <h3 className='text-center font-mill text-[14px] text-main-gold tracking-widest'>
        {props.title}
      </h3>
      <Image
        className='mt-4'
        src={props.imagePath}
        alt={props.title}
        width={500}
        height={500}
      />
    </div>
  )
}

const contentsText: string = `
シュガーリングサロンナチュピは、最小限のダメージで快適な環境のお肌が長持ちする施術を…

シュガーリングは正しい技術で施術をすれば無害で安全な脱毛方法 お肌に優しいシュガーリングを提供するには、とても高度な技術が必要とされるシュガーリング。

ナチュピでは技術を大切にしており、いかに肌にダメージをあたえず、快適ですべすべのお肌が長く保つように施術していきます。

ナチュピでは自信と責任を持って、シュガーリングを提供しております。
`

const aboutSugaringText: string = `
近年ではナチュラル志向で健康や環境に配慮する人が増えてきました また日本でもエチケットとしてアンダーヘアーの脱毛も増えてきましたね レーザーや光脱毛は不安でやらないけど、ワックスも肌にダメージあるしと思っていて なかなか脱毛がはじめられていない方も 是非シュガーリングで無害で安全なシュガーリングで、キレイに清潔に快適な日々を。

シュガーリングは古代エジプトからの使用されていて お砂糖お水とレモンのみを煮詰めたペーストで脱毛すること 今でもイスラム圏では固いシュガーペーストを肌に押し当てヘアに絡ませ抜き取っていきます。 当サロンの手法は人肌よりも少し温かくやわらかいシュガーペーストで肌を撫でるように塗布して いき、お肌にダメージを最小限にサラッとぽろっと毛根から剥がれる技術で脱毛していきます。

当サロンのシュガーペーストは 日本の気候に合わせて1つ1つオーダーメイドでお砂糖、お水、レモンのみで作られた食べられ るシュガーペストです。
天然素材で無添加のペシュガーペーストも大事ですが、もっと大切なのは技術です。

技術次第で、ワックスよりも角質層を剥がしお肌にダメージをかけ 表皮剥離や内出血をしてしまい、吹き出物や埋もれ毛に繋がります。

シュガーリングはとても奥が深く、繊細さと熟練の技術の仕上がりで肌質、次に生えてくる新し い毛髪の速度や柔らかさも変わってきます。
是非、他の脱毛方法に不安や不満がある方、痛みに不安な方も、スピーディーに施術して欲しい方 アジア人の毛質以外の方も外国人の方、男性の方も、安心してお任せください。
`

const whatSugaringText: string = `
当店のシュガーリングのペーストはお砂糖、水、レモンだけの天然素材の材料のみを煮詰めたペーストを使用しています。

そのペーストは化学物質などの毛経皮吸収の心配がなく 高濃度なお砂糖成分で殺菌作用と保湿作用があります。

お肌に優しいと言われているシュガーリングですが、実は高度な技術が技術次第です。

自己処理や剃毛したヘアは5mm以上の長さがないとシュガーペーストがヘアに絡まらず綺麗に抜けきれない可能性がありますので、キレイに仕上がりを求めるならなるべく伸ばしてからのご来店をお勧めしております。

また少しでも取れるヘアだけ取ることもできますのでご相談ください
`

const sugaringMerit: string = `
・皮膚に塗布した時に熱くないので低温やけどの心配がないのでヒリヒリして赤みが引かないとか、イングロウヘアの心配がない。

・シュガーペーストは毛穴の入口に入り込み毛根から取れるので、切れ毛が少なくツルッと感が長く続く。

・お砂糖が持つ性質の保湿効果と抗菌作用でお肌がしっとりと清潔に保てる。
`

const owner: string = `
2017年から主にシュガーリングを、ワックス脱毛と光脱毛の施術を毎月100名ほどの施術を担当し多くの毛質、肌質タイプに対応しております。

当サロンナチュピではすべての施術を担当し、カウンセリングからアフターフォローまで、一人一人に向き合い一人一人に合わせた施術を提供いたします。
(技術向上のため定期的に講習に参加し、常に技術向上のため勉強しています)

防犯上のため入口に防犯カメラを設置しています。
`

const Home = () => {
  const heroData = {
    pageName: 'ABOUT',
    pageTitle: 'Natupiについて',
    imagePath: '/about/about-hero.jpg',
  };

  return (
    <Layout>
      <Head>
        <title>Natsup | About Natupiについて</title>
        <meta name="description" content="葛飾区にあるシュガーリングサロン「Natupi(ナチュピ)」の公式ホームページです。Natupiはシュガーリングという技術をつかい脱毛を行います。はちみつや砂糖を原料とした無添加のペーストで身体に優しい方法で脱毛を行います。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero heroData={heroData} />
        <Contents contentsText={contentsText} />
        <Heading
          title={aboutSugaringTitle}
          imagePath={"/about/about-sugaring.jpg"}
        />
        <Contents contentsText={aboutSugaringText} />
        <Heading
          title="シュガーリングとは"
          imagePath={"/about/what-sugaring.jpg"}
        />
        <Contents contentsText={whatSugaringText} />
        <Heading
          title="シュガーリングのメリット"
          imagePath={"/about/sugaring-merit.jpg"}
        />
        <Contents contentsText={sugaringMerit} />
        <div className="mt-24 container mx-auto px-4">
          <h3 className='font-thin text-main-gold text-[32px] text-center flex flex-col'>
            Owner
            <span className='text-[14px] font-mill mt-1'>
              オーナー
            </span>
          </h3>
          <Image
            className='mt-4'
            src="/about/owner.jpg"
            alt="owner satomi"
            width={500}
            height={500}
          />
        </div>
        <Contents contentsText={owner} />
        <Endroll />
      </main>
    </Layout>
  );
};

export default Home;