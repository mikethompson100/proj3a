import './App.css';
import axios from 'axios';
import { useState } from 'react'
import { BASE_URL, API_KEY } from './components/Global'
import DisplayButtons from './components/DisplayButtons'
import ShowConversion from './components/ShowConversion'

function App() {
  const [currency1Code, setCurrency1Code] = useState("")  
  const [currency2Code, setCurrency2Code] = useState("")
  const [currency1Object, setCurrency1Object] = useState([])  
  const [currency2Object, setCurrency2Object] = useState([])
  const [requestedAmount, setRequestedAmount] = useState(1)
  const [togglePage, setTogglePage] = useState(true)

  async function anyButtonClick(e) {  
      if ((currency1Code !== "") && (currency2Code !== "")) {
        alert("You already have both currencies. Please hit the CONVERT button to perform the conversion or the CLEAR VALUES button to start over.")
      }
      else if (currency1Code === "") {
        const code = e.target.getAttribute("index")
        setCurrency1Code(code)
        const object1 = await axios.get(`${BASE_URL}/${API_KEY}/latest/${code}`)
        setCurrency1Object(object1)
      }
      else if (currency2Code === "") {
        const code = e.target.getAttribute("index")
        setCurrency2Code(code)
        const object2 = await axios.get(`${BASE_URL}/${API_KEY}/latest/${code}`)
        setCurrency2Object(object2)
      }
      
    } 

const clearValues = () => {
  setCurrency1Code("")
  setCurrency2Code("")
  setCurrency1Object([])
  setCurrency2Object([])
  setRequestedAmount(1)
}

const togglePages = () => {
  if ((currency1Code === "") && (currency2Code === "") ) {
    alert("Please click on two currencies.")
  }
  else if ((currency1Code === "") || (currency2Code === "")) {
    alert("Please click on the second currency.")
  }
  else if (togglePage === true) {
      setTogglePage(false)
  }
  else if (togglePage === false) {
      setTogglePage(true)
  }
  else console.log('error')
  
}

const goBack = () => {
  setTogglePage(true)
  clearValues()
}

const getAmount = (e) => {
   setRequestedAmount(e.target.value)
}

  return (
    <div id="main">            
      {
        togglePage ? (
          <div className="contain">
            <div id="toolTipContainer">
            <div className="tooltip">Legend
              <span className="tooltiptext">  
              We support all 161 commonly circulating world currencies listed below. These cover 99% of all UN recognized states and territories.		
              
              Currency Code	Currency Name	Country<br/><br/>
                  
              AED	- UAE Dirham	- United Arab Emirates<br/>
              AFN	- Afghan Afghani	- Afghanistan<br/>
              ALL	- Albanian Lek	- Albania<br/>
              AMD	- Armenian Dram	- Armenia<br/>
              ANG	- Netherlands Antillian Guilder	- Netherlands Antilles<br/>
              AOA	- Angolan Kwanza	- Angola<br/>
              ARS	- Argentine Peso	- Argentina<br/>
              AUD	- Australian Dollar	- Australia<br/>
              AWG	- Aruban Florin	- Aruba<br/>
              AZN	- Azerbaijani Manat	- Azerbaijan<br/>
              BAM	- Bosnia and Herzegovina Mark	- Bosnia and Herzegovina<br/>
              BBD	- Barbados Dollar	- Barbados<br/>
              BDT	- Bangladeshi Taka	- Bangladesh<br/>
              BGN	- Bulgarian Lev	- Bulgaria<br/>
              BHD	- Bahraini Dinar	- Bahrain<br/>
              BIF	- Burundian Franc	- Burundi<br/>
              BMD	- Bermudian Dollar	- Bermuda<br/>
              BND	- Brunei Dollar	- Brunei<br/>
              BOB	- Bolivian Boliviano	- Bolivia<br/>
              BRL	- Brazilian Real	- Brazil<br/>
              BSD	- Bahamian Dollar	- Bahamas<br/>
              BTN	- Bhutanese Ngultrum	- Bhutan<br/>
              BWP	- Botswana Pula	- Botswana<br/>
              BYN	- Belarusian Ruble	- Belarus<br/>
              BZD	- Belize Dollar	- Belize<br/>
              CAD	- Canadian Dollar	- Canada<br/>
              CDF	- Congolese Franc	Democratic - Republic of the Congo<br/>
              CHF	- Swiss Franc	- Switzerland<br/>
              CLP	- Chilean Peso	- Chile<br/>
              CNY	- Chinese Renminbi	- China<br/>
              COP	- Colombian Peso	- Colombia<br/>
              CRC	- Costa Rican Colon	- Costa Rica<br/>
              CUP	- Cuban Peso	- Cuba<br/>
              CVE	- Cape Verdean Escudo	- Cape Verde<br/>
              CZK	- Czech Koruna	- Czech Republic<br/>
              DJF	- Djiboutian Franc	- Djibouti<br/>
              DKK	- Danish Krone	- Denmark<br/>
              DOP	- Dominican Peso	- Dominican Republic<br/>
              DZD	- Algerian Dinar	- Algeria<br/>
              EGP	- Egyptian Pound	- Egypt<br/>
              ERN	- Eritrean Nakfa	- Eritrea<br/>
              ETB	- Ethiopian Birr	- Ethiopia<br/>
              EUR	- Euro	European - Union<br/>
              FJD	- Fiji Dollar	- Fiji<br/>
              FKP	- Falkland Islands Pound	- Falkland Islands<br/>
              FOK	- Faroese Króna	- Faroe Islands<br/>
              GBP	- Pound Sterling	- United Kingdom<br/>
              GEL	- Georgian Lari	- Georgia<br/>
              GGP	- Guernsey Pound	- Guernsey<br/>
              GHS	- Ghanaian Cedi	- Ghana<br/>
              GIP	- Gibraltar Pound	- Gibraltar<br/>
              GMD	- Gambian Dalasi	- The Gambia<br/>
              GNF	- Guinean Franc	- Guinea<br/>
              GTQ	- Guatemalan Quetzal	- Guatemala<br/>
              GYD	- Guyanese Dollar	- Guyana<br/>
              HKD	- Hong Kong Dollar	- Hong Kong<br/>
              HNL	- Honduran Lempira	- Honduras<br/>
              HRK	- Croatian Kuna	- Croatia<br/>
              HTG	- Haitian Gourde	- Haiti<br/>
              HUF	- Hungarian Forint	- Hungary<br/>
              IDR	- Indonesian Rupiah	- Indonesia<br/>
              ILS	- Israeli New Shekel	- Israel<br/>
              IMP	- Manx Pound	- Isle of Man<br/>
              INR	- Indian Rupee	- India<br/>
              IQD	- Iraqi Dinar	- Iraq<br/>
              IRR	- Iranian Rial	- Iran<br/>
              ISK	- Icelandic Króna	- Iceland<br/>
              JEP	- Jersey Pound	- Jersey<br/>
              JMD	- Jamaican Dollar	- Jamaica<br/>
              JOD	- Jordanian Dinar	- Jordan<br/>
              JPY	- Japanese Yen	- Japan<br/>
              KES	- Kenyan Shilling	- Kenya<br/>
              KGS	- Kyrgyzstani Som	- Kyrgyzstan<br/>
              KHR	- Cambodian Riel	- Cambodia<br/>
              KID	- Kiribati Dollar	- Kiribati<br/>
              KMF	- Comorian Franc	- Comoros<br/>
              KRW	- South Korean Won	- South Korea<br/>
              KWD	- Kuwaiti Dinar	- Kuwait<br/>
              KYD	- Cayman Islands Dollar	- Cayman Islands<br/>
              KZT	- Kazakhstani Tenge	- Kazakhstan<br/>
              LAK	- Lao Kip	- Laos<br/>
              LBP	- Lebanese Pound	- Lebanon<br/>
              LKR	- Sri Lanka Rupee	- Sri Lanka<br/>
              LRD	- Liberian Dollar	- Liberia<br/>
              LSL	- Lesotho Loti	- Lesotho<br/>
              LYD	- Libyan Dinar	- Libya<br/>
              MAD	- Moroccan Dirham	- Morocco<br/>
              MDL	- Moldovan Leu	- Moldova<br/>
              MGA	- Malagasy Ariary	- Madagascar<br/>
              MKD	- Macedonian Denar	- North Macedonia<br/>
              MMK	- Burmese Kyat	- Myanmar<br/>
              MNT	- Mongolian Tögrög	- Mongolia<br/>
              MOP	- Macanese Pataca	- Macau<br/>
              MRU	- Mauritanian Ouguiya	- Mauritania<br/>
              MUR	- Mauritian Rupee	- Mauritius<br/>
              MVR	- Maldivian Rufiyaa	- Maldives<br/>
              MWK	- Malawian Kwacha	- Malawi<br/>
              MXN	- Mexican Peso	- Mexico<br/>
              MYR	- Malaysian Ringgit	- Malaysia<br/>
              MZN	- Mozambican Metical	- Mozambique<br/>
              NAD	- Namibian Dollar	- Namibia<br/>
              NGN	- Nigerian Naira	- Nigeria<br/>
              NIO	- Nicaraguan Córdoba	- Nicaragua<br/>
              NOK	- Norwegian Krone	- Norway<br/>
              NPR	- Nepalese Rupee	- Nepal<br/>
              NZD	- New Zealand Dollar	- New Zealand<br/>
              OMR	- Omani Rial	- Oman<br/>
              PAB	- Panamanian Balboa	- Panama<br/>
              PEN	- Peruvian Sol	- Peru<br/>
              PGK	- Papua New Guinean Kina	- Papua New Guinea<br/>
              PHP	- Philippine Peso	- Philippines<br/>
              PKR	- Pakistani Rupee	- Pakistan<br/>
              PLN	- Polish Złoty	- Poland<br/>
              PYG	- Paraguayan Guaraní	- Paraguay<br/>
              QAR	- Qatari Riyal	- Qatar<br/>
              RON	- Romanian Leu	- Romania<br/>
              RSD	- Serbian Dinar	- Serbia<br/>
              RUB	- Russian Ruble	- Russia<br/>
              RWF	- Rwandan Franc	- Rwanda<br/>
              SAR	- Saudi Riyal	- Saudi Arabia<br/>
              SBD	- Solomon Islands Dollar	- Solomon Islands<br/>
              SCR	- Seychellois Rupee	- Seychelles<br/>
              SDG	- Sudanese Pound	- Sudan<br/>
              SEK	- Swedish Krona	- Sweden<br/>
              SGD	- Singapore Dollar	- Singapore<br/>
              SHP	- Saint Helena Pound	- Saint Helena<br/>
              SLL	- Sierra Leonean Leone	- Sierra Leone<br/>
              SOS	- Somali Shilling	- Somalia<br/>
              SRD	- Surinamese Dollar	- Suriname<br/>
              SSP	- South Sudanese Pound	- South Sudan<br/>
              STN	- São Tomé and Príncipe Dobra	- São Tomé and Príncipe<br/>
              SYP	- Syrian Pound	- Syria<br/>
              SZL	- Eswatini Lilangeni	- Eswatini<br/>
              THB	- Thai Baht	- Thailand<br/>
              TJS	- Tajikistani Somoni	- Tajikistan<br/>
              TMT	- Turkmenistan Manat	- Turkmenistan<br/>
              TND	- Tunisian Dinar	- Tunisia<br/>
              TOP	- Tongan Paʻanga	- Tonga<br/>
              TRY	- Turkish Lira	- Turkey<br/>
              TTD	- Trinidad and Tobago Dollar	- Trinidad and Tobago<br/>
              TVD	- Tuvaluan Dollar	- Tuvalu<br/>
              TWD	- New Taiwan Dollar	- Taiwan<br/>
              TZS	- Tanzanian Shilling	- Tanzania<br/>
              UAH	- Ukrainian Hryvnia	- Ukraine<br/>
              UGX	- Ugandan Shilling	- Uganda<br/>
              USD	- United States Dollar	- United States<br/>
              UYU	- Uruguayan Peso	- Uruguay<br/>
              UZS	- Uzbekistani So'm	- Uzbekistan<br/>
              VES	- Venezuelan Bolívar Soberano	- Venezuela<br/>
              VND	- Vietnamese Đồng	- Vietnam<br/>
              VUV	- Vanuatu Vatu	- Vanuatu<br/>
              WST	- Samoan Tālā	- Samoa<br/>
              XAF	- Central African CFA Franc	- CEMAC<br/>
              XCD	- East Caribbean Dollar	- Organisation of Eastern Caribbean States<br/>
              XDR	- Special Drawing Rights	- International Monetary Fund<br/>
              XOF	- West African CFA franc	- CFA<br/>
              XPF	- CFP Franc	Collectivités - d'Outre-Mer<br/>
              YER	- Yemeni Rial	- Yemen<br/>
              ZAR	- South African Rand	- South Africa<br/>
              ZMW	- Zambian Kwacha	- Zambia<br/>
              ZWL	- Zimbabwean Dollar	- Zimbabwe<br/>    
              </span>
            </div>
            </div>
          <div className="clearValues"><button onClick={clearValues}>CLEAR VALUES</button></div>
          Please click on two currency buttons to convert the first into the second one.<br/><br/> 
          Enter a money amount below (optional, default is 1).<br/>
          $<input type="text" id="requestedAmount" name="requestedAmount" onChange={getAmount} /> - <button onClick={togglePages}>CONVERT</button>

          <div className="dashboard">
                <div className="choice1">Choice 1 selected:&nbsp;&nbsp;<span className="b">{currency1Code}</span></div>
                <div className="choice2">Choice 2 selected:&nbsp;&nbsp;<span className="b">{currency2Code}</span></div>
                <div className="amount">Monetary amount chosen: $<span className="b">{requestedAmount}</span></div>
            </div>          
          
          <DisplayButtons anyButtonClick={anyButtonClick} />
          </div>
        )
        :
        (          
          <div className="contain">
            <ShowConversion requestedAmount={requestedAmount} currency1Object={currency1Object} currency2Object={currency2Object} currency1Code={currency1Code} currency2Code={currency2Code} goBack={goBack} /> 
          </div>
        )
      }
    </div>
  );
}

export default App;
