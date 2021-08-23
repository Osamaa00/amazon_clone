import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product id={ 1 } title="RGB Keyboard" price="345" rating={ 3 } image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.techpowerup.com%2Fimg%2FUW6bTlEPpX955Mov.jpg&f=1&nofb=1" />
        <Product id={ 2 } title="Alexa Music" price="995" rating={ 4 } image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.OqYgMvNjJHrJMQBr99yz9wHaDQ%26pid%3DApi&f=1" />
      </div>
      <div className="home__row">
        <Product id={ 3 } title="The Hobbit" price="14" rating={ 4 } image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F0ea6502b-4cb2-4176-bfbf-63d0cb845909_1.77f6a15dcfb606189b287b4e156ec141.jpeg&f=1&nofb=1" />
        <Product id={ 4 } title="Kenwood Mixer" price="222" rating={ 5 } image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.thcdn.com%2Fproductimg%2F960%2F960%2F11192166-8334343275097082.jpg&f=1&nofb=1" />
        <Product id={ 5 } title="Smart Watch" price="334" rating={ 4 } image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages2.drct2u.com%2Fpdp_main_tablet_x2%2Fproducts%2Fiu%2Fiu689%2Fp12iu689501a.jpg&f=1&nofb=1" />
      </div>
      <div className="home__row">
        <Product id={ 6 } title="Ultra wide monitor" price="1089" rating={ 5 } image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.en.koreaportal.com%2Fdata%2Fimages%2Ffull%2F33243%2Fsamsungs-new-ultra-wide-qled-49-gaming-monitor.jpg%3Fw%3D750&f=1&nofb=1" />
      </div>
    </div>
  );
}

export default Home;
