import './App.css';


import BottomCardContainer from "./components/BottomCardContainer";
import BottomSectionHeader from "./components/BottomSectionHeader";
import Tags from "./components/Tags";
import TopSectionHeader from "./components/TopSection/TopSectionHeader";
import PeopleCard from "./components/TopSection/PeopleCard";
import Subscribe from "./components/Subscribe";
import postersImg from "./assets/posters.jpg"
import MyArticle from "./components/MyArticle";
import MyArticleExpresion from "./components/MyArticleExpresion";
const topSecionData = {
  title: 'The band!',
  subTitle: 'We love music',
  para: 'We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  cardName: 'Shop',
  cardImage: 'cart.jpg',

};









function App() {
  return (
    <div className='App'>
        <MyArticle><p>Tis is text in my paragraph</p>
            <h4>Antraste</h4>
            <button>ckick me</button>

        </MyArticle>
        <MyArticleExpresion title="Exp title">
            <p>Express yourself</p>
        </MyArticleExpresion>
      <section className='top container'>
      <TopSectionHeader
          title={topSecionData.title}
          subTitle={topSecionData.subTitle}
          body={topSecionData.para}

      />
        <div className='people-container d-flex justify-around'>

            <PeopleCard
                cardName= 'Posters'
                cardImage={topSecionData.cardImage}

            />
          <PeopleCard
              cardName='Band T-Shirts'
              cardImage= {topSecionData.cardImage}

          />
          <PeopleCard
              cardName= 'Equipment'
              cardImage={topSecionData.cardImage}

          />


        </div>
      </section>
      <section className='black'>
        <div className='container'>
<BottomSectionHeader title='Our new dates' subTittle='Book now before  its too late'/>

<BottomCardContainer />
          <BottomSectionHeader title='Thank You' subTittle='See you soon'/>
        </div>
      </section>
      <section className='extra container'>
        <Tags tag1='Paris' tag2='Brussels' tag3='Vilnius' tag4='Warsaw' tagSpecial ='Mexico City' />
      </section>
        <section className='subscribe container'>
            <Subscribe input='enter text'/>
        </section>
    </div>
  );
}

export default App;
