import "../../styles/style.css";
function SelectedModelCarsInput({ onModelChange, onMarqueChange }) {
  const handleModelChange = (event) => {
    const selectedModel = event.target.value;
    // Appeler la fonction de rappel du parent avec la nouvelle valeur du modèle
    onModelChange(selectedModel);
  };

  const handleMarqueChange = (event) => {
    // Appeler la fonction de rappel du parent avec la nouvelle valeur de la marque
    const selectedMarque = event.target.value;
    onMarqueChange(selectedMarque);
  };

  return (
    <>
      <label class="mb-2" for="Marque">
        Marque
      </label>
      <select
        class="form-select form-select-lg mb-3"
        aria-label="Large select example"
        onChange={handleMarqueChange}
      >
        <option value="136">Acura</option>
        <option value="127">Aiways</option>
        <option value="2">Alfa-Romeo</option>
        <option value="143">AM General</option>
        <option value="99">Asia Motors</option>
        <option value="5">Audi</option>
        <option value="96">Authi</option>
        <option value="100">Automobiles Grandin</option>
        <option value="113">Azure</option>
        <option value="106">Barkas</option>
        <option value="105">BMC</option>
        <option value="8">BMW</option>
        <option value="88">Bolloré</option>
        <option value="110">Borgward</option>
        <option value="112">Buddy</option>
        <option value="144">Bugatti</option>
        <option value="120">BYD</option>
        <option value="125">Caselani</option>
        <option value="11">Caterham</option>
        <option value="12">Chevrolet</option>
        <option value="14">Chrysler</option>
        <option value="15">Citroen</option>
        <option value="74">Corvette</option>
        <option value="117">Cupra</option>
        <option value="16">Dacia</option>
        <option value="17">Daewoo</option>
        <option value="18">Daihatsu</option>
        <option value="75">Dangel</option>
        <option value="119">DFSK</option>
        <option value="19">Dodge</option>
        <option value="128">DR</option>
        <option value="129">DS</option>
        <option value="135">Elaris</option>
        <option value="21">Fiat</option>
        <option value="76">Fisker</option>
        <option value="22">Ford</option>
        <option value="126">Freze</option>
        <option value="109">FSO</option>
        <option value="103">Gaz</option>
        <option value="142">Genesis</option>
        <option value="108">Glas</option>
        <option value="137">GMC</option>
        <option value="24">Honda</option>
        <option value="130">Hongqi</option>
        <option value="102">Hotchkiss</option>
        <option value="26">Hyundai</option>
        <option value="27">Infiniti</option>
        <option value="28">Isuzu</option>
        <option value="77">Iveco</option>
        <option value="141">JAC</option>
        <option value="29">Jaguar</option>
        <option value="30">Jeep</option>
        <option value="31">Kia</option>
        <option value="32">Lada</option>
        <option value="34">Lancia</option>
        <option value="35">Land-Rover</option>
        <option value="132">Landwind</option>
        <option value="78">LDV</option>
        <option value="36">Lexus</option>
        <option value="104">Lincoln</option>
        <option value="37">Lotus</option>
        <option value="107">LTI</option>
        <option value="124">Lynk &amp; Co</option>
        <option value="79">Mahindra</option>
        <option value="118">Man</option>
        <option value="134">Matra</option>
        <option value="114">Maxus</option>
        <option value="39">Mazda</option>
        <option value="40">Mega</option>
        <option value="147">Mehari Loisirs Technologie</option>
        <option value="41">Mercedes-Benz</option>
        <option value="138">Mercury</option>
        <option value="42">Mg</option>
        <option value="83">Mia-Electric</option>
        <option value="43">Mini</option>
        <option value="44">Mitsubishi</option>
        <option value="122">Nio</option>
        <option value="46">Nissan</option>
        <option value="97">Oldsmobile</option>
        <option value="47">Opel</option>
        <option value="92">Panhard</option>
        <option value="131">Panther</option>
        <option value="48">Peugeot</option>
        <option value="49">Pgo</option>
        <option value="89">Piaggio</option>
        <option value="115">Polestar</option>
        <option value="139">Ram</option>
        <option value="52">Renault</option>
        <option value="145">Rivian</option>
        <option value="54">Rover</option>
        <option value="55">Saab</option>
        <option value="56">Santana</option>
        <option value="140">Saturn</option>
        <option value="111">Scion</option>
        <option value="57">Seat</option>
        <option value="91">Simca</option>
        <option value="58">Skoda</option>
        <option value="59">Smart</option>
        <option value="60">Ssangyong</option>
        <option value="61">Subaru</option>
        <option value="62">Suzuki</option>
        <option value="95">Tata Motors</option>
        <option value="90">Tesla</option>
        <option value="146">Think</option>
        <option value="64">Toyota</option>
        <option value="65">Triumph</option>
        <option value="133">Tropos</option>
        <option value="98">Vauxhall</option>
        <option selected="selected" value="67">
          Volkswagen
        </option>
        <option value="68">Volvo</option>
        <option value="123">XEV</option>
        <option value="116">Xpeng</option>
        <option value="121">Zhidou</option>
        <option value="other">Autre</option>
      </select>
      <label class="mb-2" for="Modele">
        Modèle
      </label>
      <select
        class="form-select form-select-lg mb-3"
        aria-label="Large select example"
        onChange={handleModelChange}
      >
        <option disabled="disabled" selected="selected" value="">
          Modèle
        </option>
        <option value="1257">Amarok</option>
        <option value="2003">Arteon</option>
        <option value="2594">Atlas</option>
        <option value="2597">Atlas Cross Sport</option>
        <option value="2972">Atlas SE 4MOTION</option>
        <option value="2249">Beetle</option>
        <option value="2008">Beetle Antique</option>
        <option value="608">Bora</option>
        <option value="1258">Bora Break</option>
        <option value="609">Caddy</option>
        <option value="1760">Caddy Combi</option>
        <option value="1520">Caddy Maxi</option>
        <option value="1521">Caddy Maxi Tramper</option>
        <option value="1522">Caddy Maxi Van</option>
        <option value="1523">Caddy Tramper</option>
        <option value="1524">Caddy Van</option>
        <option value="610">California</option>
        <option value="1260">California Beach</option>
        <option value="1259">California Combi</option>
        <option value="611">Caravelle</option>
        <option value="3181">CC 4Motion</option>
        <option value="718">Coccinelle</option>
        <option value="1261">Coccinelle Cabriolet</option>
        <option value="612">Combi</option>
        <option value="613">Corrado</option>
        <option value="614">Crafter</option>
        <option value="1525">Crafter Chassis Cabine</option>
        <option value="1526">Crafter Chassis Double Cabine</option>
        <option value="1527">Crafter Combi</option>
        <option value="1528">Crafter Van</option>
        <option value="1519">Cross Caddy</option>
        <option value="1262">Cross Golf Plus</option>
        <option value="1263">Cross Polo</option>
        <option value="1264">Cross Touran</option>
        <option value="615">Crossgolf</option>
        <option value="1871">Derby</option>
        <option value="2312">e-Crafter</option>
        <option value="1517">e-Golf</option>
        <option value="1533">e-Up !</option>
        <option value="617">Eos</option>
        <option value="1265">Eos Cabriolet</option>
        <option value="618">Fox</option>
        <option selected="selected" value="619">
          Golf
        </option>
        <option value="2887">Golf Alltrack</option>
        <option value="1266">Golf Cabriolet</option>
        <option value="2888">Golf City</option>
        <option value="2123">Golf Country</option>
        <option value="1694">Golf GTD</option>
        <option value="1969">Golf GTE</option>
        <option value="1692">Golf GTI</option>
        <option value="1994">Golf Kombi</option>
        <option value="620">Golf Plus</option>
        <option value="2083">Golf R</option>
        <option value="2980">Golf R-Line</option>
        <option value="1678">Golf Société</option>
        <option value="1532">Golf Sportsvan</option>
        <option value="2596">Golf SportWagen</option>
        <option value="621">Golf SW</option>
        <option value="2362">Golf SW Alltrack</option>
        <option value="3185">Golf TDI</option>
        <option value="2033">Golf Variant</option>
        <option value="2339">ID. Buzz</option>
        <option value="2340">ID. Buzz Cargo</option>
        <option value="2156">ID.3</option>
        <option value="2173">ID.4</option>
        <option value="2318">ID.5</option>
        <option value="2019">Iltis</option>
        <option value="622">Jetta</option>
        <option value="3174">Jetta 1.4T S</option>
        <option value="2891">Jetta City</option>
        <option value="2889">Jetta GLI</option>
        <option value="2910">Jetta GLI PZEV</option>
        <option value="2890">Jetta Hybride</option>
        <option value="2934">Jetta S</option>
        <option value="2913">Jetta SE</option>
        <option value="2892">Jetta Sportwagen</option>
        <option value="2984">Jetta TDI</option>
        <option value="1981">Karmann</option>
        <option value="1977">Karmann Ghia</option>
        <option value="623">Lt</option>
        <option value="624">Lupo</option>
        <option value="625">Multivan</option>
        <option value="1267">Multivan Beach</option>
        <option value="2015">Multivan Camper</option>
        <option value="626">New Beetle</option>
        <option value="1548">New Beetle Cabriolet</option>
        <option value="627">Passat</option>
        <option value="1269">Passat AllTrack</option>
        <option value="628">Passat CC</option>
        <option value="2132">Passat GTE</option>
        <option value="2932">Passat GTE Hybride</option>
        <option value="1995">Passat Kombi</option>
        <option value="3149">Passat S</option>
        <option value="1270">Passat SW</option>
        <option value="629">Phaeton</option>
        <option value="630">Polo</option>
        <option value="2076">Polo GTI</option>
        <option value="2962">Polo R-Line</option>
        <option value="1679">Polo Société</option>
        <option value="2893">R32</option>
        <option value="2595">Rabbit</option>
        <option value="2598">Routan</option>
        <option value="631">Scirocco</option>
        <option value="1693">Scirocco R</option>
        <option value="633">Sharan</option>
        <option value="2085">T-Cross</option>
        <option value="1988">T-Roc</option>
        <option value="2623">T-Roc Cabriolet</option>
        <option value="2290">Taigo</option>
        <option value="2599">Taos</option>
        <option value="3060">Taos S 4MOTION</option>
        <option value="634">Tiguan</option>
        <option value="2894">Tiguan Limited</option>
        <option value="2974">Tiguan SE 4MOTION</option>
        <option value="635">Touareg</option>
        <option value="636">Touran</option>
        <option value="2247">Touran Van</option>
        <option value="719">Transporter</option>
        <option value="2133">Transporter 6.1 Business Line</option>
        <option value="2134">Transporter 6.1 Business Line Minibus</option>
        <option value="1993">Transporter Camper</option>
        <option value="1529">Transporter Chassis Cabine</option>
        <option value="1530">Transporter Chassis Double Cabine</option>
        <option value="1531">Transporter Combi</option>
        <option value="761">Type 181</option>
        <option value="1271">Up!</option>
        <option value="2012">Variant</option>
        <option value="779">Vento</option>
        <option value="1979">Westfalia</option>
        <option value="other">Autre</option>
      </select>
    </>
  );
}

export default SelectedModelCarsInput;
