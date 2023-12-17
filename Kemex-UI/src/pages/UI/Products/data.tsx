import PaintingIcon from '@/components/lib/icons/PaintingIcon'
import PvcIcon from '@/components/lib/icons/PvcIcon'
import DetergentIcon from '@/components/lib/icons/DetergentIcon'
import IndustrialIcon from '@/components/lib/icons/IndustrialIcon'
import AntiFreezeIcon from '@/components/lib/icons/AntiFreezeIcon'
import ChlorIcon from '@/components/lib/icons/ChlorIcon'
import ProductIcon1 from '@/components/lib/icons/ProductIcon1'
import ProductIcon2 from '@/components/lib/icons/ProductIcon2'
import ProductIcon3 from '@/components/lib/icons/ProductIcon3'
import ProductIcon4 from '@/components/lib/icons/ProductIcon4'
import ProductIcon5 from '@/components/lib/icons/ProductIcon5'



export const icons = [
  {
    id: 1,
    icon: <PaintingIcon color={'#fff'} /> ,
    img: '/products-img/paint.jpg',

  },
  {
    id: 2,
    icon: <DetergentIcon color={'#fff'} /> ,
    img: '/products-img/alcohols.jpg',
  },
  {
    id: 3,
    icon: <AntiFreezeIcon color={'#fff'} />,
    img: '/products-img/automative.jpg',

  },
  {
    id: 4,
    icon: <ChlorIcon color={'#fff'} />,
    img: '/products-img/detergent.webp',

  }, {
    id: 5,
    icon: <PvcIcon color={'#fff'} />,
    img: '/products-img/esters.webp',

  },
  {
    id: 6,
    icon: <ProductIcon1 color={'#fff'} />,
    img: '/products-img/industrial.webp',
  },
  {
    id: 7,
    icon: <ProductIcon2 color={'#fff'} />,
    img: '/products-img/product1.webp',
  },
  {
    id: 8,
    icon: <ProductIcon3 color={'#fff'} />,
    img: '/products-img/prod-image.jpg',
  },
  {
    id: 9,
    icon: <ProductIcon4 color={'#fff'} />,
    img: '/products-img/product2.jpg',
  },
  {
    id: 10,
    icon: <IndustrialIcon color={'#fff'} />,
    img: '/products-img/product3.jpg',
  },
  {
    id: 11,
    icon: <ProductIcon5 color={'#fff'} />,
    img: '/products-img/product4.jpg',
  },
  {
    id: 12,
    icon: <ChlorIcon color={'#fff'} />,
    img: '/products-img/industrial.webp',
  },
]
export const productsData = [
  {
    id: 2,
    name: "2-Ethyl Hexyl Acrylate",
    details: {
      whatIs: {
        head1: 'What is 2-Ethyl Hexyl Acrylate?',
        sub1: '2-ethyl hexyl acrylate is an acrylate monomor with a molecular formula of CH2=CHCOOC8H17.  It is a clear liquid which is completely soluble in alcohols and ethers but not soluble in water.  2 ethylhexyl acrylate is not a very flammable liquid with a flashpoint between 75 – 90° C and has a characteristic acrylic odour.',
        sub2: 'It is easily miscible with other organic solvents and is readily polymerized with monomer molecules to create polymer chains. 2-ethyl acrylate will react with oxidising agents such as alkalis and will polymerise with the application of heat. Polymerisation is inhibited with methyl ether or hydroquinone.',
        img: '/products-img/ethyi-hexyl-acrylate.png',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: '2-ethyl acrylate is commonly produced by combining 2-ethyl hexanol and an acrylic acid in a dehydraisation process that acts as the catalyst (sulphuric acid). Using solid catalysts can help reduce the drawbacks of this process such as corrosion and spillage of the spent acid.',
      },
      distribute: {
        head1: 'How is stored and distributed?',
        desc1: 'A solvent trader would have a bulk petrochemical storage facility to maintain the product which is normally in a cool, dry and well-ventilated facility away from oxidising agents.  2-ethyl acrylate should be kept out of direct sunlight, heat and open flames.  Suitable storage includes drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
        desc2: 'This chemical would normally be distributed in bulk vessels or tank trucks throughout regions such as the UK, Europe, Africa and America. For transportation purposes, 2-ethyl acrylate is classed as a flammable liquid with a fire hazard rating of 2 and is a packing group 2.',
      },
      used: {
        head1: 'What is 2-Ethyl Hexyl Acrylate used for?',
        desc1: '2-ethyl acrylate is used in the chemical manufacturing industry for the production of homopolymers and co-polymers which have further uses in creating aqueous polymers.  It is used as a co-polymer for caulks, paint coatings, pressure sensitive adhesives, leather finishing, textiles and paper coatings.  Due to its low volatile nature and reactivity of double bonds, it is the perfect choice for plasticising many applications.  The primary end user market of this product is the textiles, leather, adhesive, paints and coatings industry.',
      },

    },
    category: {
      id: 1,
      name: "Acrylates"
    },
  },
  {
    id: 3,
    name: "Acrylic Acid",
    details: {
      whatIs: {
        head1: 'What is Acrylic Acid?',
        sub1: 'Acrylic acid (also known as 2-proenoic acid, vinyl formic acid, and propene acid) is a versatile, clear, colourless, corrosive, and flammable liquid that has a pungent odour. It has the formula C3H4O2 and is miscible with water, alcohol, ether, benzene, chloroform, and acetone. Acrylic acid is valuable as it is a chemical intermediate widely used in the production of many industrial and consumer products.',
        img: '/products-img/acrylates-2.jpg',
      },
      technicalProps: {
        head: 'Technical Properties',
        props: [
          {
            desc: 'Technical properties of acrylic acid:',
          },
          {
            desc: 'Cas Number: 79-10-7',
          },
          {
            desc: 'Chemical Formula: C3H4O2',
          },
          {
            desc: 'Synonyms: Acroleic acid, propenoic acid and prop-2-enoic acid',
          },
          {
            desc: 'Molecular Mass: 72.06 g/mol',
          },
          {
            desc: 'Flashpoint (open cup): 122 °F / 50 °C',
          },
          {
            desc: 'Autoignition temperature: 820 °F / 438 °C',
          },
          {
            desc: 'Boiling Point: 286 °F / 141.1 °C',
          },
          {
            desc: 'Melting Point: 55 °F / 12.8 °C',
          },
          {
            desc: 'Density: 1.051 g/mL',
          },
        ],
      },
      produce: {
        head1: 'Acylic Acid Production',
        desc1: 'Acrylic acid manufacturers produce this chemical by the vapour-phase oxidation of propylene. This process involves two reactors, with the first reactor converting the propylene to acrolein and the second converting the acrolein to acrylic acid.',
        desc2: 'This method is quite expensive due to use of propylene however there are some cheaper options that may also be possible. Another commercial manufacturing process involves the sequential oxidative dehydrogenation of selective oxidation of propane to acrylic acid using a two-catalyst bed in a reactor.',
        desc3: 'Historically, acrylic acid has been produced through the carbonylation of acetylene involving nickel carbonyl, carbon monoxide and acetylene. However, this process was more expensive due to the higher price of acetylene in comparison to propylene.',
      },
      distribute: {
        head1: 'Storage and distribution',
        subHead1: 'Health hazards',
        desc1: 'Acrylic acid can cause severe irritation to the skin if handled directly with swelling and chemical burns possible. If the acid enters the eyes, then severe irritation can occur with the potential for long-term eye damage. Finally, inhaling acrylic acid can be severely irritating to the respiratory tract including the nose, throat, and lungs.',
        desc2: 'Therefore, when acrylic acid is handled, a protective suit along with suitable gloves should be worn to ensure skin contact is avoided. Well fitted safety goggles should be always worn when the chemical is being handled to avoid eye contact. Along with a respirator to avoid the inhalation of vapours from the acid if the environment lacks sufficient ventilation.',
        subHead2: 'Transportation',
        desc4: 'The acid is sensitive to heat and sunlight and should be stored in a cool, dry, and well-ventilated chemical store that is free from all sources of ignition. It is supplied with inhibitors that prevent dangerous polymerisation and an explosion as it can become quite unstable.',
        desc5: 'It has a flashpoint of 50oC (closed cup) and is therefore flammable and it has a specific gravity of 1.05. For transportation purposes, it’s classified as pack group II, hazard class 8 and should it be labelled as corrosive, flammable, and dangerous to the environment.',
      },
      used: {
        head1: 'What is Acrylic Acid used for?',
        desc1: 'Acrylic acid is an important industrial chemical as it is a chemical intermediate that is employed in the production processes of many common industrial and consumer products. There are two main uses for acrylic acid.',
        subHead2: 'Chemical intermediate',
        desc2: 'The first use of acrylic acid is as a chemical intermediate in the production of acrylic esters and resins which include ethyl acrylate, butyl acrylate, methyl acrylate, and 2-ethylhexyl acrylate. They are then polymerised and become ingredients in paint formulations, coatings, textiles (woven and non-woven), adhesives, polishes, and plastics. Methyl acrylate is also used in the manufacturing of vitamin B1. The resins can be made into such things as moulding powders for signs, construction units, and decorative emblems.',
        subHead3: 'Polymers',
        desc3: 'The second major use for acrylic acid is as a building block in the production of polyacrylic acid polymers.  These polymers are cross-linked polyacrylates and are super absorbent with the ability to absorb and retain more than one hundred times their own weight.  They are used to make nappies, feminine hygiene products and adult incontinence pads. Acrylic acid is also utilised in the production of detergent polymers and in the production of flocculants which are employed in wastewater treatment plants.',
        desc4: 'Demand for the acid has seen continued growth with increased interest in laundry products after the pandemic as well as for architectural coatings in the Asia-Pacific region.',
      },

    },
    category: {
      id: 1,
      name: "Acrylates"
    },
  },
  {
    id: 4,
    name: "Butyl Acrylate",
    details: {
      whatIs: {
        head1: 'What is Butyl Acrylate?',
        sub1: 'Butyl Acrylate is an acrylate monomer with a molecular formula of CH2=CHCOO(CH2)3CH3.   It is a clear and reasonably volatile liquid which is slightly soluble in water and completely soluble in alcohols, ethers and almost all organic solvents.  It is a reasonably flammable liquid with a flashpoint around 40° C and has a distinct fruity, pungent odour.   It is easily miscible with other organic solvents and is readily polymerized with monomer molecules to create polymer chains.',
        img: '/products-img/acrylates-3.jpg',
      },
      produce: {
        head1: 'How is Butyl Acrylate produced?',
        desc1: 'Butyl acrylate can be manufactured by reacting n-butanol with acrylic acid in the presence of an acid catalyst in an elevated temperature zone to produce  butyl acrylate, water and other by-products.  The product mixture is then purified in a distillation zone to create a higher purity of butyl acrylate.  The typical yield of this process ranges between 94-97%.',
      },
      distribute: {
        head1: 'How is Butyl Acrylate stored and distributed?',
        desc1: 'A chemical stockist would have a bulk petrochemical storage facility to maintain the product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Butyl acrylate should be kept out of direct sunlight, heat and open flames.  Solvents such as butyl acrylate should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
        desc2: 'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, the product is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 3.',
      },
      used: {
        head1: 'What is Butyl Acrylate used for?',
        desc1: 'Butyl acrylate is primarily used in the production of homopolymers and co-polymers for use in water based industrial and architectural paints.  It can also be used in cleaning products, antioxidant agents, enamels, adhesives, textiles, caulks and paper finishes.  The double bond reactivity also allows for this product to be used as a chemical intermediary.  The primary end user markets of this product would be the water, plastics, leathers, paints, adhesives and textiles industries.',
      },

    },
    category: {
      id: 1,
      name: "Acrylates"
    },
  },
  {
    id: 5,
    name: "Ethyl Acrylate",
    details: {
      whatIs: {
        head1: 'What is Ethyl Acrylate?',
        sub1: 'Ethyl acrylate is a clear and volatile liquid that is slightly soluble in water and completely soluble in alcohols, ethers and almost all organic solvents. It is a very flammable liquid (fire hazard rating 3) with a flashpoint of 16° C and has a sharp acrid odour.',
        img: '/products-img/acrylates-4.jpg',
      },
      technicalProps: {
        head: 'Technical Properties',
        props: [
          {
            desc: 'Technical properties of ethyl acrylate:',
          },
          {
            desc: 'Cas Number: 140-88-5',
          },
          {
            desc: 'Chemical Formula: C5H8O2',
          },
          {
            desc: 'Synonyms:  Acrylic acid ethyl ester, ethyl propenoate and ethyl prop-2-enoate',
          },
          {
            desc: 'Molecular Mass: 100.12 g/mol',
          },
          {
            desc: 'Flashpoint (open cup): 60 °F / 16 °C',
          },
          {
            desc: 'Autoignition temperature: 653 °F / 345 °C',
          },
          {
            desc: 'Boiling Point: 210 °F / 99 °C',
          },
          {
            desc: 'Melting Point:  -96 °F / -71 °C',
          },
          {
            desc: 'Density: 0.92 g/mL',
          },
        ],
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Ethyl acrylate can be chemically manufactured using several industrial methods.  The most prominent method is to cause a reaction between acrylonitrile and ethanol using sulphuric acid as the catalyst.  Additionally, manufacturers may also use phenollic type inhibitors, soluble manganese or cerium salts to aid its production.  Other chemicals used in this reaction are  acetylene, carbon monoxide and ethanol.',
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'A chemical distributor would have a bulk storage facility to maintain the chemical’s stability. Storage should be in a cool, dry, well-ventilated facility that is out of direct sunlight. The acrylate should also be kept separate from oxidisers, polymerises and strong alkalisers.',
        desc2: 'Ethyl acrylate would normally be distributed by a solvent exporter in bulk vessels or tank trucks. For transportation purposes, ethyl acrylate is classed as a flammable liquid as it has a fire hazard rating of 3. This compound contains an inhibitor (hydroquinone) to stabilise it during transportation and stop polymerisation.',
        subHead2: 'Health hazards',
        desc4: 'Ethyl acrylate is rated a 2 for a health risk under the NFPA 704, indicating intense or continued use could cause a temporary incapacitation or residual injury with the potential for contact to burn the skin and eyes. If the compound is breathed in, the lungs can be irritated and cause coughing and shortness of breath. For these reasons, appropriate protection equipment including protective clothing and eye protection should be always worn while handling the chemical.',
        desc5: 'The acrylate is possibly carcinogenic to humans, especially for colorectal cancer, although the evidence has been inconclusive so far. As a result of animal studies indicating the possible link, ethyl acrylate is no longer authorised to be used as a food additive by the FDA. Therefore, foods in the US should only contain this compound if it occurs naturally in the product such as pineapples and some cheeses.',
        subHead3: 'Ethyl acrylate allergies',
        desc6: 'Individuals can be allergic to ethyl acrylate, often discovered when they use artificial nails, dentist materials and various adhesives. This results in contact dermatitis; a red, itchy rash that can be uncomfortable, although is not contagious or life-threatening.',
        desc7: 'A patch test performed by a clinician can be used to test for an ethyl acrylate allergy. If you are allergic, you will be advised to read product labels carefully to avoid contact as well as to test new products on a small skin area.',
      },
      used: {
        head1: 'Ethyl acrylate uses',
        desc1: 'Ethyl acrylate is primarily used in the production of emulsion-base polymers. Manufacturers produce acrylic resins which can then be used as paints, coatings, or latex products. It is mainly used in polyacrylate elastomers, acrylic rubber, textiles, acrylic fibres, leather products and denture materials. It can be used as a coating on most household items such as books, magazines, frozen food packaging, as a fragrance additive and as an adhesive for envelopes and labels. The primary end user markets are the plastics, leather, paints, packaging, paper, and textiles industries.',
      },

    },
    category: {
      id: 1,
      name: "Acrylates"
    },
  },
  {
    id: 6,
    name: "Methyl Acrylate",
    details: {
      whatIs: {
        head1: 'What is Methyl Acrylate?',
        sub1: 'Methyl Acrylate (also known as acrylic acid methyl ester, and methyl 2-propenoate) is an ester of acrylic acid and has the formula C4H6O2. It is a colourless, transparent liquid which has an unpleasant odour.  It is found in nature as the volatile component of pineapple.  It has slight solubility in water but is completely soluble in alcohols, esters, and many other organic solvents.',
        img: '/products-img/acrylates-5.jpg',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Methyl acrylate is made from technical grade acrylic acid.  This acrylic acid is reacted with methanol, in a reactor bed at elevated temperatures, to produce methyl acrylate with water produced as a by-product.',
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Storage tanks and pipes for Methyl acrylate should be made of stainless steel or aluminium and the product is often distributed in steel tanks or glass bottles.',
        desc2: 'Methyl acrylate must be stored under air to prevent polymerisation but is stable under recommended storage conditions.  It is also light sensitive so must be protected from direct sunlight, and must also be stored in a cool, dry, and well-ventilated area that is free from the risk of ignition.  It is classified as Hazard class 3.2 and pack group II and should be labelled as Harmful and Highly Flammable as it has a flash point of -3oC (closed cup).  It has a specific gravity of 0.954 at 20oC.',
      },
      used: {
        head1: 'What is Methyl Acrylate used for?',
        desc1: 'Methyl acrylate is a chemical that can be employed across a range of industries as it reacts readily with a wide variety of organic and inorganic compounds.  It is therefore a very useful chemical intermediate in a variety of production processes.',
        desc2: 'One of the major areas that Methyl acrylate is employed in is the production of surface coatings These surface and water-based coatings are found in a range of industries and include the paint industry where Methyl acrylate can be a component of paints and lacquers. This is because methyl acrylate provides good water resistance, low temperature flexibility, and sunlight resistance to products, for example, latex paint formulations.',
        desc3: 'The textile industry and the leather industry also employ methyl acrylate as a component of coatings.  The leather industry uses it to provide different finishes e.g. suede and nubuck, to its products while the textile industry employs methyl acrylate in the manufacturing and finishing of woven and non-woven textiles.  The paper industry also uses methyl acrylate in paper coatings, and in the manufacture of paper itself.',
        desc4: 'Methyl acrylate is also employed in the manufacture of consumer, technical, and construction adhesives.  It is also used employed in the manufacture of acrylic and modacyrlic fibres and in the production of plastic film.',
        desc5: 'Methyl acrylate is also useful for water treatment as it is used to produce DMAEA (dimethylaminoethylacrylate) which is used as a flocculant in water treatment processes.',
      },

    },
    category: {
      id: 1,
      name: "Acrylates"
    },
  },
  {
    id: 7,
    name: "Methyl Methacrylate",
    details: {
      whatIs: {
        head1: 'What is Methyl Methacrylate?',
        sub1: 'Methyl Methacrylate (also known as MMA, 2-methylmethacrylate, or methyl 2-methyl propenoate) is an ester of methacrylic acid.  It has the formula C5H8O2 and is a clear, colourless liquid that has an acrid odour and is not known to occur naturally.  It is insoluble in water, but is soluble in most organic solvents and it is also volatile and is flammable in both a liquid and vapour state.',
        img: '/products-img/acrylates-6.jpg',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'The main route of MMA production is by reacting hydrogen cyanide with acetone to form acetone cyanohydrin.  This is then reacted with concentrated sulphuric acid to produce methacrylate sulfate.  This is then reacted with methanol and water to form methyl methacrylate.  However, producers are looking at alternate production methods as this process involves the handling of highly toxic hydrogen cyanide, and also produces large amounts of ammonium bisulfate, as a by-product, which must then be disposed of.',
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Methyl methacrylate must be transported and stored in containers made of stainless steel, glass, aluminium, or carbon steel.  It should be stored in a cool, dry, well-ventilated area that is out of the direct sunlight and is away from all sources of ignition.  It is normally supplied with an inhibitor as autopolymerisation can occur, especially in light.',
        desc2: 'MMA has a specific gravity of 0.939 and a flash point of 10 oC (closed cup) so must be labelled as highly flammable and it should also be labelled as an irritant.  For transportation purposes, MMA is classified as hazard class 3, and pack group II.',
      },
      used: {
        head1: 'What is Methyl Methacrylate used for?',
        desc1: 'Methyl methacrylate is an important chemical as it is the monomer for polymethyl methacrylate (PMMA) polymers and copolymers.  These polymers and copolymers are then used in the manufacture of a variety of other products.  These include clear plastics (such as Plexiglass), resins, and acrylic sheets.  Some of the end products that have utilised these chemicals are advertising signs and displays, skylights, building panels and sidings, and plumbing and bathroom fittings.',
        desc2: 'MMA is also polymerised to form lubricant viscosity modifiers, dispersions,  molding/extrusion powder, and coatings.  These are then utilised in the production of such things as acrylic surface and paper coatings, adhesives, sealants, leather and paper coating, inks, textile finishes, latex paints, and lacquer and enamel resins.',
        desc3: 'MMA is also used in the fields of medicine and dentistry as it is used to make prosthetic devices, surgical bone cements, and as a ceramic filler or cement.  It can also be used in the production of orthotic shoe inserts, and in leaded acrylic radiation shields.',
        desc4: 'MMA can also be used in the impregnation of concrete as it makes the concrete water repellent.  It can also be used to partially replace styrene in unsaturated polyester resins as it gives better water resistance and a longer life to the final products.',
      },

    },
    category: {
      id: 1,
      name: "Acrylates"
    },
  },
  {
    id: 8,
    name: "Ethanol",
    details: {
      whatIs: {
        head1: 'What is Ethanol?',
        sub1: 'Ethanol (also known as ethyl alcohol, drinking alcohol, grain alcohol, methylcarbinol, TSDA or Ethos) is an organic chemical compound with the chemical formula C2H6O. It is a primary alcohol and the key ingredient present in alcoholic beverages consumed around the world. It is volatile, flammable, clear, colourless with a characteristic vinous odour resembling wine. Ethanol is miscible with water and many organic solvents. It has a wide array of uses including as an antiseptic, disinfectant, antidote, a depressant, a fuel source and a solvent.',
        img: '/products-img/alcohols-1.jpg',
      },
      technicalProps: {
        head: 'Technical Properties',
        props: [
          {
            desc: 'Chemical and physical properties of ethanol:',
          },
          {
            desc: 'Molecular Formula: C2H6O / CH3−CH2−OH / C2H5OH',
          },
          {
            desc: 'Synonyms: ethyl alcohol, grain alcohol, methylcarbinol, TSDA, Ethos, absolute alcohol, drinking alcohol, ethylic alcohol, hydroxyethane',
          },
          {
            desc: 'Cas Number: 34-17-5',
          },
          {
            desc: 'Molecular Mass: 46.041 g·mol−1',
          },
          {
            desc: 'Exact Mass: 46.041865 g/mol',
          },
          {
            desc: 'Flashpoint: 55°F / 12.8°C',
          },
          {
            desc: 'Boiling Point: 173.3°F / 78.5°C at 760 mm Hg ',
          },
          {
            desc: 'Melting Point: -173.4°F / -114.1°C',
          },
          {
            desc: 'Vapour Pressure: 59.3 mm Hg at 25 °CBoiling Point: 286 °F / 141.1 °C',
          },
          {
            desc: 'Melting Point: 55 °F / 12.8 °C',
          },
          {
            desc: 'Water Solubility: Miscible',
          },
          {
            desc:'Density: 0.7893 g/cu (at 20 °C)'
          },
          {
            desc:'Ethanol occurs naturally in many areas such as in corn, safflower, in urine, faeces, blood and sweat, emissions from fires, volcanoes, insects, fermentation of sugars and also fruit (when overripe). Ethanol is a byproduct of the metabolism of yeast, indicating that it is present in most yeast habitats and is also produced during the germination of plants.'
          }
        ],
      },
      produce: {
        head1: 'Production',
        desc1: 'Ethanol has been produced for thousands of years and is one of the oldest organic processes utilized by humankind with people throughout history appreciating its intoxicating properties.',
        desc2: 'Historically, it was produced via ethanol fermentation which is the process of converting sugars, such as glucose, into cellular energy which produces ethanol as a result:',
        desc3: 'C6H12O6 → 2 CH3CH2OH + 2 CO2',
        desc4: 'Large volumes of ethanol are still produced by fermentation and are mainly used for alcoholic and fuel uses of ethanol. Raw materials can be used in replacement of sugars, including starch and sugar-based feedstocks, such as corn grain or sugar cane, or cellulosic feedstocks such as grass, wood, crop residues, or agricultural waste.',
        desc5:'Carbon dioxide can also be used to replace the sugars or raw materials using electrochemical reactions. However, this method tends to produce smaller amounts of ethanol.',
        desc6:'Another method of producing ethanol is through the acid-catalysed hydration of ethylene in the presence of a catalyst such as phosphoric acid:',
        desc7:'C2H4 + H2O → CH3CH2OH',
        desc8:'This method is typically used for producing ethanol for solvent uses.',
        desc9:'Ethanol is also produced through the enzymatic hydrolysis of cellulose, wet milling of corn and the oxidation of methane.',
        desc10:'It is produced for use in a wide range of industries with demand increasing most rapidly in the fuel industry where government changes in legislation are requiring fuel manufacturers to increase the percentage of ethanol in their fuel.  The global production of ethanol is rising with approximately 52 million tonnes produced in 2008 alone.',
        subHead2:'Reactions',
        desc11:'Ethanol is highly flammable and soluble in water. It reacts violently with acetyl bromide and chloride and explosive mixtures can be formed if ethanol is mixed with highly concentrated hydrogen peroxide.',
        desc12:'Several enzyme reactions use ethanol, one of which being the oxidisation of ethanol to acetaldehyde with nicotinamide-adenine dinucleotide, in the presence of an alcohol dehydrogenase catalyst:',
        desc13:'Ethanol + NAD+ → acetaldehyde + NADH + H+',
        desc14:'Other reactions include hypochlorous acid or chlorine to form ethyl hypochlorite.',
        desc15:'Ethanol reacts with carboxylic acids such as amino or fatty acids to produce ethyl esters in the presence of an acid catalyst such as hydrofluoric and phosphoric acid.',
        desc16:'RCOOH + HOCH2CH3 → RCOOCH2CH3 + H2O',
        desc17:'Other reactions include the combustion of ethanol forming CO2 and water, reacting with alkali metals or strong bases and the dehydration of ethanol with an acid catalyst.'
      },
      distribute: {
        head1: 'Handing, storage & distribution',
        subHead1: 'Hazards & toxicity',
        desc1: 'Ethanol has an NFPA rating of 2 and can cause temporary incapacitation or residual injury. Ethanol (in vapour form only) will irritate the eyes, nose and throat. It has a fire rating of 3  and can be ignited under almost all ambient temperature conditions.',
        subHead2: 'Safety & procedures',
        desc4: 'Personal protective equipment should be warn at all times to prevent possible contact with your skin and eyes.  If contact is made with your skin, immediately wash the contaminated area. Wet clothing should be removed immediately and replaced.',
        desc5: 'In the case of spillage, attempt to isolate the leak to a minimum of 50 metres. The leak should be absorbed using dry earth or non-combustible materials. Access to sewers, basements and waterways should be blocked. Alcohol-resistant foam, CO2 or water spray extinguishers should be used. Ignition sources should be removed to prevent a fire or further fires developing.',
        subHead3: 'Storage & distribution',
        desc6:'Ethanol is stored in storage tanks and/or stainless-steel drums and can be transported by bulk vessels or tank trucks.  For transportation purposes, ethanol is classed as packing group II and hazard class 3 as it has a flashpoint of 14 °C (closed cup) and is highly flammable.  It should be kept in a cool, dry, well-ventilated area that is free from all fire hazards.  It has a specific gravity of 0.789.'
      },
      used: {
        head1: 'Uses',
        subHead1:'Industrial uses of ethanol',
        desc1: 'The primary use of ethanol is in the manufacturing of alcoholic beverages. Other manufacturing uses include in the production of acetaldehyde, ethyl chloride, ethyl acetate,  ethylene dibromide, acetic acid, glycol ethers, ethylamines and also in explosives, dyes, detergents, fillers, lubricants, lacquers, additives, coatings, cosmetics, perfumes, food extracts flavourings, gasoline and pharmaceuticals.',
        desc1_2:'Pharmaceutical uses of ethanol include as an antiseptic in wipes and anti-bacterial spray. It is also used occasionally as an antidote to methanol poisoning and as a neurotoxin, teratogenic agent and a human metabolite. Ethanol can relieve chronic pain for inoperable cancer patients through the neurolysis of nerves.',
        desc1_3:'Another primary use of ethanol is as an engine cleaner burner fuel additive. The majority of gasoline produced in the U.S. contains 10% ethanol which oxygenates the fuel reducing its pollution.',
        subHead2: 'Uses of ethanol as a solvent',
        desc2: 'Ethanol has many uses as a solvent including for resins, fatty acids, hydrocarbons, fats, oils and waxes. It is also present in personal care products, air care products, paints and markers. Ethanol’s structure enables for the dissolving into polar compounds such as water, non-polar and hydrophilic such as hexane and hydrophobic.',
        desc2_2:'Ethanol is also used as a medicinal solvent due to its low toxicity and non-polar capabilities. It is seen in drugs for pain relief and medicines for coughs and colds.',
        subHead3: 'Commercial uses of ethanol',
        desc3: 'Ethanol is found in many cosmetic, beauty and personal care products, antibacterial gels and sanitisers due to its cleaning properties and helps to separate sprays into the air and keep lotions and jells from splitting',
        desc4: 'It is also present in paints, varnishes, oils, vanilla extracts, fuel, alcoholic beverages, anti-freezes, inks, adhesives.',
      },

    },
    category: {
      id: 2,
      name: "Alcohols"
    },
  },
  {
    id: 9,
    name: "Iso Butanol",
    details: {
      whatIs: {
        head1: 'What is Iso Butanol?',
        sub1: 'Iso butanol is a primary alcohol and an organic compound with a molecular formula of (CH3)2CHCH2OH.  It is a colourless, flammable liquid with a characteristic sweet, musty smell that is used predominantly in agrictural chemical formulations.  It only has limited miscibility in water, however is easily soluble in regular solvents such as ethers and alcohol.  Iso butanol is highly flammable with a flash point between 26 – 29º C.',
        img: '/products-img/alcohols-2.jpg',
      },
      produce: {
        head1: 'How is Iso Butanol Produced?',
        desc1: 'Iso butanol is produced in the carbonation of propylene.  There are two methods in the industrial manufacturing of iso butanol.  The first is the hydroformylation of propylene which generates a mixture of normal and isobutyraldehydes which are then hydrogenated into separate alcohols.  The second method, which is less common, is to use reppe carbonylation to create iso butanol.  Iso butanol can also occur naturally as product of the fermentation of sugars and other carbohydrates.',
      },
      distribute: {
        head1: 'Storage and Distribution of Iso Butanol',
        desc1: 'A chemical trader would have a bulk petrochemical storage facility to maintain the product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Iso butanol should be kept out of direct sunlight, heat and open flames.  Solvents such as iso butanol should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
        desc2:'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, iso butanol is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 3.',
      },
      used: {
        head1: 'What is Iso Butanol used for?',
        desc1: 'The majority of iso butanol production is converted into derivates (esters) for use as a solvent in the coatings industry.  It is very suitable for acid-curable lacquers and baking finishes.  It can also be used as a derivate in the manufacturing of plastics and rubber mixtures.  Other major applications include paint solvent, varnish remover, floor polishes, cleaning agents, stain removal, solubiliser in the textile industry, additive in gasoline, additive in de-icing fluids, dehydrating agent, mobile phase in thin layer chromatography, feedstock productions of ethers/acrylates and anti-corrosion inhibitors in engine oils.  The main end user markets are the coatings, plastics, rubber, cleaning, textiles and motor industries.',
      },

    },
    category: {
      id: 2,
      name: "Alcohols"
    },
  },
  {
    id: 10,
    name: "Iso Propanol",
    details: {
      whatIs: {
        head1: 'What is Iso Propanol?',
        sub1: 'Isopropanol (also known as 2-propanol, Isopropyl alcohol, Propan-2-ol or rubbing alcohol) is a structural isomer of propanol (propyl alcohol) and has the molecular formula of C3H8O. It is a clear, colourless and volatile liquid and has a distinctive strong alcohol or acetone-like odour. This solvent is highly flammable, with a flashpoint of around 11 – 13° C. Isopropanol is soluble in most solvents, including water.',
        img: '/products-img/alcohols-3.jpg',
        sub_desc1:'Isopropanol is a common sterilising agent with antibacterial properties which is used in many cleaning applications including hand wipes, disinfectants, hand sanitisers and spray-in-air or ultrasonic products. It also has effective uses in hospitals and medical centres including eliminating skin pathogens.',
        sub_desc2:'Solutions of Isopropanol of around 70% are the most effective at disinfection and sterilisation (with a 10 – 40% solution of purified water). This is because when concentrations of alcohol drop below 50%, its sterilising properties decrease at a considerable rate and consequently when this percentage rises to 90%, these properties sustain their disinfection rates.'
      },
      technicalProps: {
        head: 'Technical Properties',
        props: [
          {
            desc: 'Isopropanol and propyl alcohol (1-propanol) are structural isomers of each other and have similar molecules, the difference being their -OH is attached at a different location. It is miscible in water (infinitely), ether, chloroform, acetone and alcohol and chloroform and insoluble in salt solutions.',
          },
          {
            desc: 'Technical properties of Isopropanol:',
          },
          {
            desc: 'Molecular Formula: C3H8O, CH3CHOHCH3, (CH3)2CHOH',
          },
          {
            desc: 'Molecular weight: 60.1 g/mol',
          },
          {
            desc: 'Acidity: 16.5ph',
          },
          {
            desc: 'Flashpoint: 53°F / 11.7°C',
          },
          {
            desc: 'Boiling Point: 180.5°F / 82.3°C',
          },
          {
            desc: 'Melting Point:-127.3°F / -89.5°C',
          },
          {
            desc: 'Density: 0.786 g/cm3 (20°C)',
          },
          {
            desc: 'Melting Point: 55 °F / 12.8 °C',
          },
          {
            desc: 'Refractive index: 1.3772 (20°C)',
          },
          {
            desc:'Log P: -0.16'
          },
        ],
      },
      produce: {
        head1: 'How is Isopropanol Produced?',
        desc1: 'The sterilising agent is chemically manufactured using several commercial methods of direct and indirect hydration.',
        desc2: 'The direct method (and the more modern adaptation) of manufacturing is by reacting very high-quality propene (90-99%) with water with an acidic catalyst, which removes the requirement of sulphuric acid. The two are heated and the vapour produced flows through a reactor that contains sulfonated polystyrene cation ion exchange resins.',
        desc3: 'The indirect method is a two-step process; step one is reacting propene and sulphuric acid to form sulphate esters and the second step is the hydrolysis of sulfonate esters into isopropanol. Separate reactors are used for the two different steps, and, unlike the direct method, this process can use a lower quality grade of propene.',
        desc4: 'In both the above methods, the mixture of water and by-products need to go through a distillation process to separate the isopropanol (around 90% purity).',
      },
      distribute: {
        head1: 'Handing, Storage & Distribution',
        subHead1: 'Storage & Distribution',
        desc1: 'Isopropanol should be stored in an air-tight storage unit/container in a cool, dry place at room temperature (avoid preserving in hot environments). Isopropyl alcohol can react with oxygen and air over time, forming unstable peroxides which can explode if it is incorrectly stored.',
        desc2:'The environment should be well ventilated, and it must be kept away from oxidising agents. Isopropanol should also be protected from direct sunlight, heat and sparks or open flames as it is highly flammable. Containers such as iso tanks made of stainless steel, aluminium or carbon steel are suitable storage units.',
        desc3:'A solvent stockist, such as Solventis, would have a bulk petrochemical storage facility to maintain the product with all relevant safety considerations in place.',
        desc3_1:'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks. For transportation purposes, isopropanol is classed as a flammable liquid with a fire hazard rating of 3 and is a packing group 2.',
        subHead2: 'Isopropanol Health Hazards',
        desc4: 'Inhalation of Isopropanol can cause irritation and burning sensations in the mouth, throat, eyes and nose. Ingestion can lead to drowsiness, dizziness, increased heart rate, stomach upsets and, in more severe cases, heart problems.',
        desc5: 'It is advised that eye protection should be always worn when handling isopropanol, if any clothing becomes soaked in the chemical it should be removed immediately and not worn again until clean.',
        desc6:'Isopropanol is also known to easily absorb through the skin. Consequently, prolonged, or repeated contact can cause rashes, itching, skin dryness, and redness. Skin contact should be avoided by using protective clothing when handling.'
      },
      used: {
        head1: 'Isopropyl Alcohol Uses',
        desc1: 'Isopropanol is used as both an intermediate and a solvent in an array of industries, most popularly in the pharmaceutical industry but also in the automotive, laboratory and disinfectant industries.',
        subHead2: 'Solvent',
        desc2: 'Isopropanol is used as a solvent and cleaning fluid as it is non-toxic compared to other alternatives, for example in consumer uses such as paints, thinners for wood furnishings, inks, dye solutions, cosmetics, and toiletries (lotions, body oils, polishes, shampoos, hair sprays) lubricants, greases, glasses cleaners, and disinfectants.',
        subHead3: 'Intermediate',
        desc3: 'Isopropanol is used as a chemical intermediate in the manufacture of acetone and its by-products through the process of oxidisation. Other applications include esterification to produce isopropyl acetate and reacting with aluminium metal and titanium tetrachloride to form titanium and aluminium isopropoxide.',
        subHead4:'Laboratory',
        desc4: 'In DNA extraction, isopropyl alcohol is added to precipitate DNA, which is then centrifuged to form a pellet to be studied. Therefore, iso propanol has great application in studying the genetic causes of disease to allow for new diagnostics and treatments to be developed. In addition to being used in forensic science, in which DNA extraction is used for determining paternity or sequencing genomes.',
        desc5:'Isopropyl alcohol can also be used as a biological specimen preservative with a solution mixture of around 90%. It has benefits over alternatives such as formaldehyde as it is less toxic and thus easier to be used in laboratories.',
        subHead5:'Disinfectant/Pharmaceutical',
        desc6:'In combination with 70% alcohol and a 10 - 40% solution of purified water, isopropanol is an extremely effective steriliser. For this reason, it is found in disinfectant products for homes, rubbing alcohol, hand sanitisers, care products, household cleaning products, and personal care products.',
        desc7:'This 70% concentration allows the IPA to permeate the whole cell of microorganisms and cause the proteins in the cell to coagulate or clot. This quickly kills the microorganism.',
        desc8:'Water is added to slow the evaporation of the isopropanol, increasing contact time with the surface that is being cleaned and improving the effectiveness of the product. Although concentrations of IPA that are too highly diluted will not be able to permeate the cell wall of microorganisms and therefore be less effective.',
        desc9:'Isopropyl alcohol is especially effective for the cleaning of glass surfaces, such as mirrors and windows. The high volatility of the chemical means that it evaporates very quickly, leaving no residue or streaks. As a result, IPA is commonly used in the electronics industry for cleaning specialist parts after manufacture, where no residue must be left for the function of the component.',
        desc10:'Additionally, isopropanol is used in medical and pharmaceutical applications, such as laboratory chemicals, and bathing solutions. As a water-drying aid, it can be used to prevent a swimmer\'s ear (also known as otitis externa).',
        subHead6:'Automotive',
        desc11:'Automotive industry uses of isopropanol include anti-freeze products, adhesives, coating additives and paints. It also plays an important role in making the water component of petrol more soluble so that it does not freeze. Due to its quick-drying and streak-free cleaning, it is also used in the detailing industry, such as for sticker residue removal.',
        desc12:'The information above shows that isopropanol has a variety of practical applications and can have significant benefits in our daily lives when it is handled correctly.'
      },

    },
    category: {
      id: 2,
      name: "Alcohols"
    },
  },
  {
    id: 11,
    name: "Methanol",
    details: {
      whatIs: {
        head1: 'Methanol',
        sub1: 'Methanol (also known as methyl alcohol; methyl hydroxide; monohydroxymethane; and wood alcohol) has the chemical formula CH3OH and is a clear, colourless liquid which has a mild, characteristic alcohol odour.  It is soluble in water and is also soluble in other alcohols, esters, ketones, ethers, and in most other organic solvents.',
        img: '/products-img/alcohols-4.jpg',
      },
      produce: {
        head1: 'Production',
        desc1: 'Methanol is produced naturally in the environment by the anaerobic metabolism of many varieties of bacteria but it was first isolated in 1661 by Robert Boyle who produced it via the distillation of boxwood.',
        desc2: 'Since then it has become one of the most heavily traded chemicals in the world with an estimated global demand of 29 million metric tons per year.  This is because Methanol is a very versatile chemical which forms the basis of hundreds of chemicals which are then used in many every day products.',
        desc3: 'Methanol is produced in a three stage process consisting of Reforming, Compression, and Distillation.  In the first step, natural gas is combined with steam, under heat, to produce synthesis gas which consists of hydrogen, carbon monoxide, and carbon dioxide.  In step two, this synthesis gas is pressurised (compressed) and reacted to form methanol.  In the third stage, the liquid mixture is heated to separate the components.  The resulting vapour is then cooled and condensed to provide pure methanol.',
      },
      distribute: {
        head1: 'Storage and Transportation',
        desc1: 'Methanol has a flash point of 12oC (closed cup) which makes it Flammable and, as such, is classified for transport as Class 3, Pack group II.  It also has a specific gravity of 0.7915.',
        desc4: 'It should be stored in a cool, well-ventilated, area that is free from all sources of ignition and the container should be kept tightly closed when not in use.',
        desc5: 'Methanol can be poisonous if consumed so should also be labelled as toxic.',
      },
      used: {
        head1: 'Uses',
        desc1: 'Methanol is an important chemical feedstock which is utilised primarily in the production of formaldehyde, methyl tertiary butyl ether (MTBE), and acetic acid.  It is also used in the manufacture of DMT, MMA, chloromethanes, methylamines, glycol methyl ethers, and fuels.  Methanol also has general solvent and antifreeze uses so can be found as a component of paint stripper, and de-icers.',
        desc1_2:'This means that methanol is an integral part of everyday life as it can be found in plastics, synthetic fibres, fuels, resins, paints, safety glass laminate, adhesives, solvents, carpeting, insulation, refrigerants, particle board, pigments and dyes.',
        desc1_3:'Methanol is also used in waste water treatment as it provides a carbon food source for the denitrifying bacteria as the nutrient rich nitrates in sewage effluent can have a major effect on water eco-systems, for example, enabling algae blooms.',
        desc2: 'It seems that Methanol will remain an important chemical in the future, as many countries are seeking to expand methanol fuelling programmes.  This is because methanol is readily available, has a high octane rating, and is easy to transport.  If methanol production costs can be cut, via large scale plants consuming natural gas, methanol could also be used to make ethylene and propylene, and dimethyl ether.  It could also be utilised in power generation.',
      },

    },
    category: {
      id: 2,
      name: "Alcohols"
    },
  },
  {
    id: 12,
    name: "Mosstanol L",
    details: {
      whatIs: {
        head1: 'Mosstanol L',
        sub1: 'Mosstanol L is a unique product compromising of anhydrous ethyl alcohol and iso propanol in approximately the following quantities: 60% ethanol and 40% iso propanol.  Mosstanol L is a clear liquid with a mild pleasant odour and has a freezing point of -112° C.  It is miscible with water, alcohol, ether, chloroform and acetone.  Mosstanol L is highly flammable with a flashpoint of 12° C.',
      },
      produce: {
        desc1: 'Mosstanol L is a by-product of a chemical process based on the Fischer-Tropsch synthesis.',
      },
      distribute: {
        head1: 'Storage and Distribution',
        desc1: 'A chemical wholesaler would have a bulk petrochemical storage facility to maintain the product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Mosstanol L should be kept out of direct sunlight, heat and open flames.  Solvents such as mosstanol L should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
        desc4: 'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, mosstanol L is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.',
      },
      used: {
        head1: 'Uses',
        desc1: 'Mosstanol L is predominantly used in paints and lacquers as a diluting product, in the printing industry as a medium of ink, window cleaning/washer fluid, fuel blending, adhesives, air fresheners, varnishes, anti-freeze in compressed air systems and de-icer.  The primary end user markets are the printing, paint, motor, consumer products and adhesive industries.',
      },

    },
    category: {
      id: 2,
      name: "Alcohols"
    },
  },
  {
    id: 13,
    name: "N-Butanol",
    details: {
      whatIs: {
        head1: 'What is N-Butanol?',
        sub1: 'n-Butanol (also known as normal butanol and n-butyl alcohol) is a primary alcohol with a molecular formula of C4H10O. It is a colourless liquid of medium volatility and a characteristic banana-like odour. n-Butanol has limited miscibility in water; however, it is easily soluble in regular solvents such as ethers, alcohol, glycols and hydrocarbons. This solvent is very flammable, with a flashpoint of around 35° C.',
        img: '/products-img/alcohols-6.jpg',
      },
      technicalProps: {
        head: 'Technical Properties',
        props: [
          {
            desc: 'Technical properties of n-Butanol:',
          },
          {
            desc: 'Cas Number: 71-36-3',
          },
          {
            desc: 'Molecular Formula: C4H10O',
          },
          {
            desc: 'Synonyms: butan-1-ol, 1-butanol, normal butanol, and n-butyl alcohol',
          },
          {
            desc: 'Molecular Mass: 74.12',
          },
          {
            desc: 'Flashpoint (closed cup): 29 °C (84.2 °F)',
          },
          {
            desc: 'Autoignition temperature: 343 °C (649.4 °F)',
          },
          {
            desc: 'Boiling Point: 117 °C (242.6 °F)',
          },
          {
            desc: 'Melting Point: -90 °C (-130 °F)',
          },
          {
            desc: 'Vapour Pressure: 0.58 kPa at 20 °C (68 °F)',
          },
          {
            desc: 'Density: 0.81 at 20 °C (68 °F)',
          },
          {
            desc:'Log P: 0.88'
          },
        ],
      },
      produce: {
        head1: 'The Production of N-Butanol',
        desc1: 'N-butanol can occur naturally as a product of the fermentation of sugars and other carbohydrates. However, the major use (and therefore production) is in the industrial arena. It is a bulk petrochemical manufactured from the feedstock of propylene in an ‘oxo process’ in the presence of a homogeneous catalyst. This creates butyraldehyde which is subsequently hydrogenated to produce n-butanol.',
      },
      distribute: {
        head1: 'How is N-Butanol stored and distributed?',
        desc1: 'A chemical wholesaler would have a bulk petrochemical storage facility to maintain the product. Storage is normally in a cool, dry, and well-ventilated facility away from oxidising agents. N-butanol should be kept out of direct sunlight, heat, and open flames. Solvents such as n-butanol should be stored in drummed containers such as iso tanks made of stainless steel, aluminium, or carbon steel.',
        desc2:'N-butanol is classed as a flammable liquid with a flammability rating of 3 under the NDPA 704 due to its flashpoint of 35 °C. A bulk solvent exporter, such as Solventis, would normally distribute this solvent in bulk vessels or tank trucks.',
      },
      used: {
        head1: 'What is N-Butanol used for?',
        desc1: '1-Butanol can be used as a chemical intermediate to create other chemicals (e.g., esters, n-butyl acetate, and amino resins); alternatively, it can be used as a solvent in the creation of consumer products. N-butanol is used as a solvent for paints, coatings, varnishes, fats, oils, waxes, rubber, and plasticizers.',
        desc2: 'Other uses include coating fabric in the textiles industry, as a cleaning or polishing agent, gasoline, brake fluid and in consumer products such as make-up, nail products, hygiene products and shaving products in the cosmetic industry.',
        desc3: 'Butanol at 85% can be used in car engines that are designed for gasoline with no engine modification required. This allows for lower fuel consumption than other gasoline alternatives such as ethanol due to the lower oxygen content of n-butanol.',
        desc4: 'The chemical is present in several foods and beverages as an artificial flavouring. It is also used in food preparation such as during the manufacture of hop extract for beermaking.',
        desc5:'The main user end market of this product is the chemical, petrochemical, textiles, cleaning, and cosmetics industries.',
      },

    },
    category: {
      id: 2,
      name: "Alcohols"
    },
  },
  {
    id: 14,
    name: "N-Propanol",
    details: {
      whatIs: {
        head1: 'What is N-Propanol?',
        sub1: 'N-propanol (also known as 1-propanol, n-propanol alcohol, propan-1-ol, propyl alcohol) is a primary alcohol in which the OH entity is bonded to a primary carbon atom. N-propanol (CH3CH2CH2OH) is one of two isomers of propanol (C3H8O); the other is 2-propanol ((CH3)2CHOH). It is a clear, colourless transparent liquid that has a typical sharp musty odour that is comparable with the smell of rubbing alcohol.',
        img: '/products-img/alcohols-7.jpg',
        sub_desc1:'Miscible in water and freely miscible with all common solvents such as glycols, ketones, alcohols, aldehydes, ethers and aliphatic hydrocarbons, 1-propanol is primarily used as a solvent in the manufacturing of pharmaceuticals, cosmetics, coatings and as a chemical intermediate.',
      },
      technicalProps: {
        head: '1-propanol technical properties',
        props: [
          {
            desc: 'Chemical and physical properties of n-propanol:',
          },
          {
            desc: 'Molecular Formula: CH3CH2CH2OH / n-PrOH',
          },
          {
            desc: 'Synonyms: 1-propanol, n-propanol alcohol, propan-1-ol, propyl alcohol, n-PrOH, 1-hydroxypropane, propionic alcohol',
          },
          {
            desc: 'Cas Number: 71-23-8',
          },
          {
            desc: 'Molecular Mass: 60.096 g/mol-1',
          },
          {
            desc: 'Exact Mass: 60.057515 g/mol',
          },
          {
            desc: 'Flashpoint: 77 °F / 22 °C',
          },
          {
            desc: 'Boiling Point: 207 °F (at 760 mm Hg) / 97.2 °C',
          },
          {
            desc: 'Melting Point: -195 °F / -126 °C',
          },
          {
            desc: 'Vapour Pressure: 1.99 kPa (at 20 °C)',
          },
          {
            desc: 'Water Solubility: miscible',
          },
          {
            desc:'Density: 0.803 g/mL'
          },
          {
            desc: 'Log P: 0.329'
          },
          {
            desc:'N-propanol forms naturally during fermentation processes. The human gastrointestinal microbiota can also produce small amounts.'
          }
        ],
      },
      produce: {
        head1: 'How is N-Propanol produced?',
        desc1: 'Normal propanol is manufactured by a catalytic hydrogenation of propionaldehyde.  The propionaldehyde is itself produced via the oxo process, by hydroformylation of ethylene using carbon monoxide and hydrogen in the presence of a catalyst such as cobalt octacarbonyl or a rhodium complex.',
        desc2: 'Hydrogenation is the process of adding pairs of hydrogen atoms to unsaturated compounds, with the aim of saturating these compounds.',
        desc3: 'H2C=CH2 + CO + H2 → CH3CH2CH=O',
        desc4: 'CH3CH2CH=O + H2 → CH3CH2CH2OH',
      },
      distribute: {
        head1: 'Handing, Storage & Distribution',
        subHead1: 'Hazards & Toxicity',
        desc1: 'N-propanol has an NFPA health rating of 1, causing irritation to your eyes, nose, and throat. High exposure can cause burning, nausea, headaches, and dizziness. Vapours of n-propanol are heavier than air and can also irritate and burn. It has a flammability rating of 3, demonstrating that it can be easily ignited under most ambient temperatures. An instability rating of 0 indicates that n-propanol will remain stable, even when under fire conditions.',
        desc2:'N-propanol sits in the alcohol and polyol reactive groups. It reacts with alkali metal, nitrides, oxoacids and carboxylic acids. It is not reactive with strong oxidising agents.',
        desc3:'It reacts the same way as primary alcohols. It can be converted to alkyl halides (red phosphorus, iodine), acetic acid to give propyl acetate and chromic acids to give propionic acid.',
        subHead2: 'Storage & Distribution',
        desc4: 'N-propanol alcohol is typically bulk stored within a petrochemical storage facility for regulation. Storage is normally in a cool, dry and well ventilated facility away from oxidising agents. It should be kept out of direct sunlight, heat, and open flames. It can be stored in drummed containers such as iso tanks made of stainless steel, aluminium or carbon steel.',
        desc5: 'N-propanol alcohol is exported in bulk vessels or tank trucks. For transportation purposes, it is classed as a flammable liquid with a fire hazard rating of 2. A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa, and America. It belongs to packing group 2.',
        subHead3:'Safety & Procedures',
        desc6:'Personal protective equipment should be worn to prevent contact with the skin, eyes, nose and mouth, including respirators, safety glasses/goggles, gloves and contact lenses. If contact is made with the skin, immediately wash the contaminated area and clothing should be removed.',
        desc7:'Immediately wash the eyes with large amounts of water and seek medical attention immediately. Seek fresh air if large amounts of n-propanol have been inhaled.'
      },
      used: {
        head1: 'What is 1-propanol used for?',
        subHead1:'Industry Uses',
        desc1: '1-propanol is used as a solvent in the manufacturing of pharmaceuticals, polishes, dental lotions, coatings, lacquers, printing inks, natural gums, pigments, intermediates, dye solutions, antifreeze, fuel additives, paint additives and de-greasing fluids. It is also used as a chemical intermediate to create esters, halides, propyl amines and propyl acetate. The end-user markets of this product are the cosmetics, cleaning, motor, printing, coatings and chemical industries.',
        desc1_2: '1-propanol is also used as fuel in engines due to its high-octane count.  However, due to its expensive nature and low energy gains, it is not commonly used.',
        subHead2: 'Commercial Uses',
        desc2: '1-propanol is used as a solvent in antifoaming in cosmetics, perfumes, flavours, fragrances, air care products, cleaning and furnishing products, paints, coatings, inks, personal care products, soaps and window cleaner.',
      },

    },
    category: {
      id: 2,
      name: "Alcohols"
    },
  },
  {
    id: 15,
    name: "Antifreeze C2053",
    details: {
      whatIs: {
        head1: 'Antifreeze C2053',
        sub1: 'Engine coolant concentrate based on monoethylene glycol and organic additives, suitable for petrol or diesel engines',
        sub_desc1: 'As a result of the corrosion inhibitors which have a very low depletion rate, the C2053 coolant has a long life. It should be replaced every five years or every 250,000 km for passenger vehicles and 1,000,000km for trucks/commercial vehicles. However, original manufactures instructions should always be followed when replacing coolant, and so this will depend on the vehicle.',
        sub_desc2: 'While deionised or demineralised water is best, coolant C2053 has been formulated to be usable with different water qualities, including hard water.',
        sub_desc3:'Freeze protection offered by the coolant increases as a higher concentration is used. At 50% volume of C2053 and 50% H2O, freeze protection is -40oC. For colder climates, a higher concentration can be used, which means the coolant mix can provide protection as low as -70oC.'
      },
      produce: {
        head1: 'Benefits',
        desc1: 'Increased lifetime – C2053 has corrosion inhibitors with a very low depletion rate',
        desc2: 'Protection against frost (dependent on concentration)',
        desc3: 'Eliminates deposit problems due to hard water',
        desc4: 'Protection of the joints of water pumps by eliminating abrasive solids',
        desc5: 'Improved anti-corrosion protection for the cooling systems of vehicles (especially aluminium)',
        desc6: 'Excellent anti-foaming properties'
      },
      distribute: {
        head1: 'Quality Standards',
        desc1: 'Coolant C2053 meets or exceeds the following European and International quality standards:',
        desc2:'AFNOR NF R15-601 (France)',
        desc3: 'AS 2108 (Australia)',
        desc4: 'ASTM D3306 (USA)',
        desc5: 'BS 6580: 2010 (UK)',
        desc6: 'CUNA NC 956-16 (Italy)',
        desc7: 'ONORM V 5123 (Austria)',
        desc8: 'R443 tests (Germany)',
        desc9: 'SAE J1034 (USA)',
        desc10: 'UNE 26361-88 (Spain)',
        desc11: 'FVV Heft R443'
      },

    },
    category: {
      id: 3,
      name: "Automative"
    },
  },
  {
    id: 16,
    name: "Antifreeze C2054",
    details: {
      whatIs: {
        head1: 'Antifreeze C2054',
        sub1: 'Engine coolant concentrate formulated to be a competitively priced alternative. Based on monoethylene glycol and organic additives and suitable for petrol or diesel engines',
        sub_desc1: 'The C2054 coolant is a more budget-friendly formulation of the C2053 coolant with both using the latest organic additive technology (OAT). Despite this lower price point, C2054 offers 3 years of corrosion protection for engines and exceeds core European and International standards.',
        sub_desc2: 'The economical OAT formulation of C2054 contains no nitrates, amines, phosphates, borates, or silicates. Antifreeze C2054 also offers excellent anti-foaming characteristics and improved anticorrosion protection.',
      },
      produce: {
        head1: 'Benefits',
        desc1: 'Budget price point while offering 3 years corrosion protection',
        desc2: 'Highly stable formulation',
        desc3: 'Improved anti-corrosion protection for the cooling systems of vehicles (especially aluminium)',
        desc4: 'User and environmentally friendly',
      },
      distribute: {
        head1: 'Quality Standards',
        desc1: 'Coolant C2054 meets or exceeds the following European and International quality standards:',
        desc2:'AFNOR NF R15-601 (France)',
        desc3: 'AS 2108 (Australia)',
        desc4: 'ASTM D3306 (USA)',
        desc5: 'BS 6580: 2010 (UK)',
        desc6: 'CUNA NC 956-16 (Italy)',
        desc7: 'SAE J1034 (USA)',
        desc8: 'UNE 26361-88 (Spain)',
      },

    },
    category: {
      id: 3,
      name: "Automative"
    },
  },
  {
    id: 17,
    name: "Antifreeze C2230",
    details: {
      whatIs: {
        head1: 'Antifreeze C2230',
        sub1: 'Traditional ethylene glycol based coolant concentrate formulated for use in all engines, including those constructed from aluminium alloys',
        sub_desc1: 'Recommended coolant for general purpose light duty automotive applications such as passenger vehicles and light commercial vehicles.',
      },
      produce: {
        head1: 'C2230 Specifications',
        desc1: 'AFNOR NF R15-601 (France)',
        desc2: 'AS 2108 (Australia)',
        desc3: 'ASTM D3306 (USA)',
        desc4: 'BS 6580: 2010 (UK)',
        desc5: 'CUNA NC 956-16 (Italy)',
        desc6: 'ONORM V 5123 (Austria)',
        desc7: 'C2230 successfully passes the FVV Heft',
        desc8: 'R443 tests (Germany)',
        desc9: 'SAE J1034 (USA)',
        desc10: 'UNE 26361-88 (Spain)'
      },
      distribute: {
        head1: 'Features',
        desc1: 'Long established robust formulation',
        desc2:'Excellent compatibility',
        desc3: 'Technology based on silicates and borates',
        desc4: 'Uses sophisticated silicate stabilisation technology',
        desc5: 'Contains no nitrites, amines or phosphates (NAP free)',
        desc6: 'Excellent anti foaming characteristics',
        desc7: 'Available in concentrate or ready to use',
      },
      used: {
        head1: 'Benefits',
        desc1: 'Peace of mind for quality and performance',
        desc2: 'Provides anti-corrosion protection for all metals and alloys in cooling systems of older and modern vehicles alike',
        desc3: 'Avoids potential gel formation',
        desc4: 'User and environmentally friendly',
        desc5: 'Helps protect the water pump and cooling components',
        desc6: 'Added convenience to the end user and versatile in various environmental climates'
      },

    },
    category: {
      id: 3,
      name: "Automative"
    },
  },
  {
    id: 18,
    name: "Antifreeze C3053",
    details: {
      whatIs: {
        head1: 'Antifreeze C3053',
        sub1: 'Premium low toxicity engine coolant concentrate based on mono propylene and suitable for petrol and diesel engines.',
        sub_desc1: 'The coolant has a long life of up to 250,000km for passenger vehicles and up to 1,000,000km for trucks. The C3053 coolant has been specially formulated to be low toxicity and contains no nitrates, amines, phosphates, borates and silicates.',
        sub_desc2: 'C3053 is the low toxicity variant of C2053 and can technically replace the coolant. C3053 is additionally suitable for non-automotive applications, including renewables, such as for heat transfer systems',
      },
      produce: {
        head1: 'Benefits',
        desc1: 'Minimises downtime due to the longer lifetime of the coolant',
        desc2: 'Low toxicity means the product is environmentally friendly',
        desc3: 'Highly convenient due to the wide potential applications for C3053',
      },
      distribute: {
        head1: 'Quality Standards',
        desc1: 'Coolant C3053 meets or exceeds the following European and International quality standards:',
        desc2: 'AFNOR NF R15-601 (France)',
        desc3: 'BS 6580: 2010 (UK)',
        desc4: 'ASTM D3306 Type II (USA)',
      },

    },
    category: {
      id: 3,
      name: "Automative"
    },
  },
  {
    id: 19,
    name: "Antifreeze C3054",
    details: {
      whatIs: {
        head1: 'Antifreeze C2054',
        sub1: 'C3054 propylene based coolant concentrates.',
      },
    },
    category: {
      id: 3,
      name: "Automative"
    },
  },
  {
    id: 20,
    name: "DOT 3 Brake Fluid",
    details: {
      whatIs: {
        head1: 'What is DOT 3 Brake Fluid?',
        sub1: 'DOT 3 brake fluid is polyethylene glycol-based fluid that has been designed to withstand very cold temperatures without thickening and to endure high temperatures without boiling.  The typical boiling temperature of DOT 3 brake fluid is around 250° C.  This product usually has a yellow to amber appearance and a mild glycol odour.  This product is slightly soluble in water however this does degrade the quality of the fluid if water mixes with the product.  All DOT brake fluids must meet an industrial standard to be allowed for sale in the market place.',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'DOT-3 brake fluid is a mixture of glycerin and alcohol, otherwise known as glycol, with extra additives to give it the robust characteristics that are required.',
      },
      distribute: {
        head1: 'Storage and Distribution',
        desc1: 'A chemical wholesaler would have a bulk petrochemical storage facility to maintain the product.  Storage is normally in a cool, dry and well ventilated facility.  DOT 3 brake fluids should be kept out of direct sunlight and exposure to moisture.  Solvents such as DOT 3 brake fluid should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
        desc2:'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, DOT 3 brake fluid is classed as only moderately flammable with a flammability rating of 1.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.',
      },
      used: {
        head1: 'Uses',
        desc1: 'Brake fluid is used in braking systems of automobiles (commercial and industrial).  Due to its viscosity, the fluid is able to transfer a manipulated force through hydraulic lines to the braking mechanism at the wheels.',
      },

    },
    category: {
      id: 3,
      name: "Automative"
    },
  },
  {
    id: 21,
    name: "DOT 4 Brake Fluid",
    details: {
      whatIs: {
        head1: 'DOT 4 Brake Fluid',
        sub1: 'Solventis produce a range of DOT 4 brake fluids in a range of equilibrium reflux boiling points to suit individual customer requirements.',
      },
      produce: {
        subHead1: 'DOT4 XHD255',
        desc1: 'A high quality hydraulic brake fluid. A glycol ether based fluid formulated to exceed the requirements of the major internationally recognised hydraulic brake fluid standards. It has all the properties required to ensure safe and reliable operation of vehicle braking systems.',
        subHead2: 'DOT4 XHD260 Premium',
        desc11: 'A premium hydraulic brake fluid. A glycol ether based fluid formulated to exceed the requirements of the major internationally recognised hydraulic brake fluid standards.',
        subHead3: 'DOT4 LV OEM Standard',
        subHead3_des1: 'Eliminates deposit problems due to hard water',
        desc4: 'A low-viscosity hydraulic brake fluid. A glycol ether based fluid formulated to exceed the requirements of the major internationally recognised hydraulic brake fluid standards. It has all the properties required to ensure safe and reliable operation of vehicle braking systems. Ideal for use in today’s modern and advanced braking systems (ABS) as well as electronic stability programs (ESP).',
        subHead4: 'Super DOT4 OEM Standard',
        subHead4_des1: 'A high wet equilibrium reflux boiling point brake fluid. A glycol ether based fluid formulated to exceed the requirements of the major internationally recognised hydraulic brake fluid standards. It has all the properties required to ensure safe and reliable operation of vehicle braking systems. Specific use in vehicles with electronic stability programs.'
      },

    },
    category: {
      id: 3,
      name: "Automative"
    },
  },
  {
    id: 22,
    name: "DOT 5.1 Brake Fluid",
    details: {
      whatIs: {
        head1: 'DOT 5.1 OEM Standard Brake Fluid',
        sub1: 'A premium hydraulic brake fluid. A glycol ether based fluid formulated exclusively to exceed the requirements of the major internationally recognised hydraulic brake fluid standards.',
        sub_desc1: 'It has all the properties required to ensure safe and reliable operation of vehicle braking systems. Specialist applications, primarily racing vehicles and motorcycles.',
      },
      produce: {
        head1: 'Standards',
        desc1: ' FMVSS No 116 DOT 5.1',
        desc2: ' SAE J1704',
        desc3: 'ISO 4925 Class 5.1',
      },
      distribute: {
        head1: 'Features and Benefits',
        desc1: 'High Boiling Point – minimises the risk of vapour lock occurring in the wheel cylinder, even under the most extreme conditions',
        desc2:'High Wet Boiling Point – ensures continued vapour lock protection by maintaining a high boiling point throughout the service life of the fluid',
        desc3: 'Optimal Viscosity – minimal low temperature viscosity ensures system responsiveness is maintained in very cold conditions whilst maximal high temperature viscosity ensures adequate lubricity and leakage prevention are maintained at high operating temperatures',
        desc4: 'Corrosion Inhibition – protects the full range of metallic components in the braking system from corrosion damage that can cause excessive seal wear or even loss of fluid and potential system failure',
        desc5: 'Rubber Compatibility – with the range of elastomeric material commonly found in braking systems, maximises the working life of system seals to ensure safe and reliable system operation',
        desc6: 'Fluid Compatibility – can be safely mixed with other brake fluids meeting the both DOT3 and DOT4 specifications',
        desc7: 'Fluid Stability – against both high temperature and oxidation ensures stable performance characteristics for a long and reliable service life.',
      },

    },
    category: {
      id: 3,
      name: "Automative"
    },
  },
  {
    id: 23,
    name: "Screenwash Concentrates",
    details: {
      whatIs: {
        head1: 'Screenwash Concentrates',
        sub1: 'Solventis are a producer of screenwash concentrates for automotive applications.',
        sub_desc1: 'Screenwash is a product designed to give better visibility and safer driving conditions. It quickly clears the windscreen in all seasons due to its improved wetting characteristics and cleaning power.',
        sub_desc2: 'Screenwash is used in vehicle windscreen and headlight washing systems. It is added to water to provide a cleaning liquid used all year round, and used in different concentrations to provide different levels of frost protection to the wash system.',
      },
      produce: {
        head1: 'Solscreen',
        desc1: 'Solscreen is an environmentally friendly screenwash base product for use in screenwash and de-icing applications.',
        desc2: 'Solscreen is a low foaming product with good tolerance to hard water. Formulations based on Solscreen would normally include additional water at a level necessary to achieve the desired freezing point as well as additional water-soluble anionic surfactant to promote surface wetting.',
        desc3: 'Additional glycol can be included to give high flash point/low freeze products. Chemical softeners can be added for when dilution in hard water areas is required.',
        desc4: 'The product contains a bittering agent to prevent accidentally swallowing.',
        desc5: 'Its surfactants are compliant with the European Detergent Directive N° 648/2004/EC and are approved by Nordic Swan eco-labelled products.',
      },
      distribute: {
        head1: 'Features',
        desc1: 'Super concentrated formulation',
        desc2:'High alcohol content',
        desc3: 'Meets Dekra test method specifications',
        desc4: 'Fully biodegradable',
        desc5: 'All year round formulation',
        desc6: 'Can be blue dyed or citrus perfumed upon customer request',
      },
      used: {
        head1: 'Benefits',
        desc1: 'Can be diluted to provide a wide range of freeze protection levels',
        desc2: 'Provides freeze protection down to -75°',
        desc3: 'Demonstrates excellent material compatibility with elastomers, polymeric materials and decorative finishes',
        desc4: 'Safe for the environment',
        desc5: 'One product for all',
        desc6: 'Tailored to customer requirement'
      },

    },
    category: {
      id: 3,
      name: "Automative"
    },
  },
  {
    id: 24,
    name: "Methylene Chloride",
    details: {
      whatIs: {
        head1: 'What is Methylene Chloride?',
        sub1: 'Methylene chloride (also known as dichloromethane) is an organic halogen compound with the molecular formula of CH2Cl2.  It is colourless liquid with a distinctive chloroform odour that is widely used as a solvent in paint strippers and degreasing.  This product is a non-flammable liquid, having no measurable flashpoint or flammable limits in air.  It is miscible with most organic solvents but only slightly miscible in water.',
        img: '/products-img/chloride-1.jpg',
      },
      produce: {
        head1: 'How is Methylene Chloride produced?',
        desc1: 'Methylene chloride was first prepared by Henri Victor Regnault who isolated a mixture of chloromethane and chlorine that had been exposed to sunlight.  It is now commercially produced by treating either methyl chloride or methane at elevated temperatures of over 400° C.  These products then undergo a progressive chlorination which produces a mixture of by-products which are further separated out via distillation to produce methylene chloride.',
      },
      distribute: {
        head1: 'Storage and distribution of Methylene Chloride',
        desc1: 'A chemical wholesaler would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Solvents such as methylene chloride should be stored in drummed containers such as Isotanks made of stainless steel, aluminium or carbon steel.',
        desc2:'A bulk solvent distributor would normally transport this solvent in bulk vessels or tank trucks.  For transportation purposes, methylene chloride is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 3.',
      },
      used: {
        head1: 'What is Methylene Chloride used for?',
        desc1: 'Methylene chloride is predominantly used as a solvent for paint stripper, varnish removal, aerosol spray repellent and degreasing.  It is an effective solvent because of its highly volatility and stability.  It is also used in the processing of plastics, extracting fats and oils from food products.  For example, it can be used to decaffeinate coffee/tea and to prepare hops.  Methylene chloride can weld certain plastics and is therefore used in the model-making industry.  One final example of its use is in the garment printing industry for the removal of heat-sealed transfers.  The main user end markets are the paints, varnish, plastics, cosmetics and textiles industries.',
      },

    },
    category: {
      id: 4,
      name: "Chlorinated Solvents"
    },
  },
  {
    id: 25,
    name: "Perchloroethylene",
    details: {
      whatIs: {
        head1: 'What is Perchloroethylene?',
        sub1: 'Perchloroethylene (also known as tetrachloroethene) is a chlorocarbon with the molecular formula of C2Cl4.  It is a colourless liquid with a sweet odour that is most commonly used as a dry cleaning product of fabrics.  This product is a non-flammable liquid, having no measurable flashpoint or flammable limits in air.  It is miscible with most organic solvents but only slightly miscible in water.',
        img: '/products-img/chloride-2.jpg',
      },
      produce: {
        head1: 'How is Perchloroethylene produced?',
        desc1: 'Perchloroethylene was first synthesized by Michael faraday in 1821.  He discovered that at a high temperature chlorinolysis of hydrocarbons, he could produce perchloroethylene because the hydrocarbon thermally decomposes and causes an array of side products.  Since his discovery, a few other methods have been created.  On such method that is commonly used is when 1.2.-dichloroetane is heated above 400 ° C with chlorine and a catalyst.  The by-products then go through a distillation process to produce perchloroethylene.',
      },
      distribute: {
        head1: 'Storage and distribution of Perchloroethylene',
        desc1: 'A chemical stockist would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Solvents such as perchloroethylene should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
        desc2:'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, Perchloroethylene is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 3.',
      },
      used: {
        head1: 'What is Perchloroethylene used for?',
        desc1: 'Perchloroethylene is the predominant solvent used in the dry cleaning industry because it is non-flammable, stable but highly volatile.  It is safe to use on most textiles, fibres and dyes without causing damage to the garment.  It is highly effective at removing oils, greases and fats from textiles due its high boiling point and volatile nature.  A wide array of industries use perchloroethylene because it is excellent at degreasing metal parts during the production of products.  It can also be used in extracting fats, dissolving rubber, paint removal, water repellent, brake cleaning and a carrier solvent.  It was also historically used as a chemical intermediate in the manufacture of hydrofluorocarbon (HFC) 134a.',
      },

    },
    category: {
      id: 4,
      name: "Chlorinated Solvents"
    },
  },
  {
    id: 26,
    name: "Butyl Di Glycol Acetate",
    details: {
      whatIs: {
        head1: 'What is Butyl Di Glycol Acetate?',
        sub1: 'Butyl di glycol acetate (also known as BDGA, diethylene glycol monobutyl ether acetate, butyl diethoxol acetate, and butyl diglycol) is a clear, colourless liquid which has a faint, mild odour and the formula C10H20O4.  It is slightly soluble in water and is miscible with organic solvents.',
        img: '/products-img/esters-1.jpg',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'BDGA is produced by reacting ethylene oxide with anhydrous n-butyl alcohol to form diethylene glycol butyl ether.  The ether is then reacted with acetic acid to form butyl diglycol acetate.',
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Butyl di glycol acetate is transported in steel drums.  It is not classified as dangerous for any form of transport.  It has a flash point of 124° C (closed cup) and a specific gravity of 0.98.',
      },
      used: {
        head1: 'What is Butyl Di Glycol Acetate used for?',
        desc1: 'The main application for BDGA is as a solvent in formulations for paints, cleaning fluids, coatings and inks.  In the coatings industry it is utilized as latex coalescent for water-based industrial coatings.  In the paint industry, it is a high boiling solvent and leveling agent, and a coalescent in paints and lacquers.  It is an effective solvent for cleaning fluids and is now marketed as a cleaning agent in the electronics industry.  In the ink industry it is valued as a solvent for specialty printing inks and for ball point pen pastes.  It is also a suitable solvent for dyes used in wood stains and furniture polishes.',
      },

    },
    category: {
      id: 5,
      name: "Esters"
    },
  },
  {
    id: 27,
    name: "Butyl Glycol Acetate",
    details: {
      whatIs: {
        head1: 'What is Butyl Glycol Acetate?',
        sub1: 'Butyl Glycol Acetate (also known as 2-butoxyethyl acetate; ethylene glycol butyl ether acetate; and 2-butoxyethanol acetate) has the chemical formula C8H16O3, and is a clear, colourless to pale yellow liquid.  It has a mild and pleasant ester odour and is only sparingly soluble in water but is miscible with many common organic solvents, for example, alcohols, ketones, aldehydes, ethers, glycols, and glycol ethers.  It is this solvent power, combined with its’ low volatility, that sees Butyl Glycol Acetate employed in many branches of industry.',
        img: '/products-img/esters-2.jpg',
      },
      produce: {
        head1: 'How is Butyl Glycol Acetate Produced?',
        desc1: 'The first stage in the production of Butyl Glycol Acetate is to react ethylene oxide with anhydrous n-butyl alcohol.  The product of this is ethylene glycol butyl ether which is then reacted with acetic acid, acetic anhydride, or acetic acid chloride, to form ethylene glycol butyl ether acetate, otherwise known as Butyl Glycol Acetate.',
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Butyl Glycol Acetate is stable under standard conditions and has a specific gravity of 0.9422 and a Flash point of 71.1o C (closed cup).  It should be stored in a cool, well-ventilated area that is away from all possible sources of ignition, and the container should be tightly sealed until ready for use.',
        desc2:'Butyl Glycol Acetate is usually transported in carbon steel, or stainless steel, drums or in tank cars.  It is not regulated for transport but is Flammable and should also be labelled as Xn, as it is Harmful when ingested.',
      },
      used: {
        head1: 'What is Butyl Glycol Acetate used for?',
        desc1: 'Butyl Glycol Acetate is a chemical that has good solvent power and it is this degree of solvency that sees Butyl Glycol Acetate employed in industry.  The main use for it is in the coatings industry where it improves the gloss and flow of coatings that are baked at temperatures of 150-200 oC.  It also improves the brushability and flow of cellulose nitrate and cellulose ether lacquers, and of paints formulated from chlorinated binders.  Butyl Glycol Acetate is also a good solvent for urethane finishes and is a film coalescing aid for polyvinyl latex acetate.',
        desc2: 'Butyl Glycol Acetate also has applications in the printing industry where it is a component of flexographic, gravure, and screen-printing inks.  This is because of the slow evaporation rate of Butyl Glycol Acetate which makes it ideal for use in these specialty printing inks.',
        desc3: 'It is also found in in ball pen pastes, and in dyes that are employed in furniture polishes and wood stains, and in dyes used to print and colour textiles.',
        desc4: 'Butyl Glycol Acetate is also employed in the cleaning industry where it is a component in some ink and spot removal formulations.'
      },

    },
    category: {
      id: 5,
      name: "Esters"
    },
  },
  {
    id: 28,
    name: "Ethyl Acetate",
    details: {
      whatIs: {
        head1: 'What is Ethyl Acetate?',
        sub1: 'Ethyl acetate (also known as ethyl ethanoate, acetic acid ethyl ester, acetoxyethane, 1-acetoxyethane, EtOAC, ETAC, EA) is an organic ester compound with a molecular formula of C4H8O2. It is a colourless liquid with a fruity characteristic odour that is commonly recognised in glues and nail polish remover. Ethyl acetate is extremely flammable with a flashpoint of -4° C and a flammability rating of 3 and is also highly miscible with all common organic solvents (alcohols, ketones, glycols, esters) but only slightly miscibility in water. This product is commonly used as a solvent for cleaning, paint removal and coatings.',
        img: '/products-img/esters-3.jpg',
      },
      technicalProps: {
        head: 'Technical Properties',
        props: [
          {
            desc: 'Chemical and physical properties of ethyl acetate:',
          },
          {
            desc: 'Molecular Formula: C4H8O2 / CH3−COO−CH2−CH3 / CH3COOC2H5',
          },
          {
            desc: 'Synonyms: ethyl ethanoate, acetic acid ethyl ester, acetoxyethane, 1-acetoxyethane, EtOAC, ETAC, EA',
          },
          {
            desc: 'Cas Number: 141-78-6',
          },
          {
            desc: 'Molecular Mass: 88.052429 g/mol',
          },
          {
            desc: 'Exact Mass: 88.052429 g/mol',
          },
          {
            desc: 'Flashpoint: 24°F / -4°C',
          },
          {
            desc: 'Boiling Point: 171°F / 77.1 °C at 760 mm Hg',
          },
          {
            desc: 'Melting Point: −83.6 °C / −118.5 °F',
          },
          {
            desc: 'Vapour Pressure: 93.2 mm Hg at 25 °C',
          },
          {
            desc: 'Water Solubility: 64 g/L (at 25 °C)',
          },
          {
            desc:'Density: 0.902 g/cm3'
          },
          {
            desc:'Log P: 0.71'
          }
        ],
      },
      produce: {
        head1: 'How is ethyl acetate made?',
        desc1: 'There are various methods for manufacturing ethyl acetate. Originally, it was synthesised by distilling ethanol and acetic acid in the presence of sulfuric acid. It is now primarily produced commercially via the Tishchenko method of condensing two equivalents of acetaldehyde using an alkoxide catalyst.',
        desc2: '2 CH3CHO → CH3CO2CH2CH3',
        desc3: 'Another primary method is using Fischer esterification which involves reacting acetic acid with ethanol, a process accelerated by acid catalysis.',
        desc4: 'CH3CO2H + CH3CH2OH → CH3CO2CH2CH3 + H2O',
        desc5:'Other methods include as a by-product of the oxidation of butane with acetic acid, the ethanolysis of polyvinyl acetate, and the alkylation of acetic acid.'
      },
      distribute: {
        head1: 'Handling, Storage & Distribution',
        subHead1: 'Hazards & Toxicity',
        desc1: 'Ethyl ethanoate has an NFPA health rating of 1 and can cause significant irritation. Overexposure to the eyes, nose and skin can cause irritation, drowsiness, and unconsciousness. If inhaled, ethyl ethanoate can irritate the throat and respiratory passages and cause headaches and nausea.',
        desc2:'An NFPA fire rating of 3 indicates that it can be ignited under almost all ambient temperature conditions. Heat, sparks, or flames can ignite this solvent and create vapours that will travel to the source of the ignition. These vapours are heavier than air and will, therefore, spread into surrounding areas.',
        desc3: 'An instability rating of 0 indicates that it is normally stable, even under fire conditions.',
        subHead2: 'Safety & Procedures',
        desc4: 'Personal protective equipment should be worn at all times when handling ethyl ethanoate. Eye protection must be worn even when contact lenses are being used. If contaminated, hands should be washed immediately, and clothing should be removed and replaced.',
        desc5: 'In the case of spillage, isolation of leak area of 50 metres in all directions is recommended. All ignition or flame sources should be removed and entryways into water systems and sewers should be prohibited. Soak up and absorb the spillage using combustible materials. Only attempt to eliminate the leak if it is safe to do so.',
        subHead2_desc1:'Responses for firefighting include using dry chemical, CO2, water spray or alcohol-resistant foam extinguishers for smaller fires. Larger fires require fog or alcohol-resistant foam.',
        subHead3: 'Storage & Distribution',
        desc6: 'A chemical stockist would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Ethyl acetate should be kept out of direct sunlight, heat and open flames.  Ethyl acetate should be stored in drummed containers such as iso tanks made of stainless steel, aluminium or carbon steel.',
        desc7: 'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, ethyl acetate is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 2.'
      },
      used: {
        head1: 'What is ethyl acetate used for?',
        desc1: 'Ethyl acetate has many uses in the industrial and commercial industries as both a solvent and a diluent.',
        subHead2: 'Industry Uses',
        desc2: 'Ethyl acetate is used in various industrial applications such as in paints as a hardener, adhesives, paint and coating additives, degreasing solvents, active agents, processing aids and plasticisers.  At a lower purity, it can be used in printing and pharmaceuticals. It is also used in coating formulations for wood furniture, agricultural, construction equipment, mining equipment and marine uses.',
        desc2_2: 'Laboratory uses include in mixtures used in column chromatography and extractions.',
        subHead3: 'Commercial Uses',
        desc3: 'The most common use of ethyl acetate is as an ester in wine as it is naturally produced during the fermentation process. It contributes to wine’s fruity flavours. It also contributes to the decaffeination of coffee beans and tea leaves.',
        desc4:'Commercial products containing this solvent include automotive products, cleaning and furnishing care products, paints, coatings, inks and plastics. It is also used in air care products and perfumes, as it evaporates quickly leaving only the scent to remain.',
        desc5:'As a high purity solvent, it is used in cleaning electric circuit boards and as a nail polish remover. At a lower purity, it can be used as in perfumes, food, decaffeination of tea/coffee and a carrier solvent for herbicides. '
      },

    },
    category: {
      id: 5,
      name: "Esters"
    },
  },
  {
    id: 29,
    name: "Iso Butyl Acetate",
    details: {
      whatIs: {
        head1: 'What is Iso Butyl Acetate?',
        sub1: 'Iso butyl acetate is a chemical compound with a molecular formula of C6H12O2. This product is a colourless liquid that has a fruity ester odour. It is commonly used as a solvent in the production of polymers, resins, oils and cellulose. This product is highly flammable with a flash point of 18º C and a flammability rating of 3.  It is highly miscible with all common organic solvents (alcohols, ketones, glycols, esters) but only slightly miscibility in water.',
        img: '/products-img/esters-4.jpg',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'The most common method for chemically manufacturing iso butyl acetate is via the esterification of isobutyl alcohol and acetic acid which are heated in the presence of a strong acid.',
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'A chemical wholesaler would have a bulk petrochemical storage facility to maintain the product. Storage is normally in a cool, dry and well ventilated facility away from oxidising agents. Iso butyl acetate should be kept out of direct sunlight, heat and open flames. Solvents such as iso butyl acetate should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
        desc2:'A bulk chemical distributor would normally export this solvent in bulk vessels or tank trucks. For transportation purposes, iso butyl acetate is classed as a flammable liquid with a fire hazard rating of 2. A full bulk chemical exporter would distribute the solvent through-out regions such as the UK, Europe, Africa and America. This product is a packing group 2.',
      },
      used: {
        head1: 'What is Iso Butyl Acetate used for?',
        desc1: 'Iso Butyl Acetate has great solvency traits for polymers, resins, oils, cellulose and readily thinned with aliphatic hydrocarbons. It is mainly used in the paints and coatings industry for wood varnishes, architectural coatings, printing inks and adhesives. It can replace n-butyl acetate if a coating needs to dry quicker. It is also widely used in aerosol sprays, thinners, sealants, cleaners, fragrance, cosmetics and personal care-products. The primary end user market of this product is paints, coatings, cosmetics and cleaning industries.',
      },

    },
    category: {
      id: 5,
      name: "Esters"
    },
  },
  {
    id: 30,
    name: "Iso Propyl Acetate",
    details: {
      whatIs: {
        head1: 'What is Iso Propyl Acetate?',
        sub1: 'Iso propyl acetate is an organic compound with a molecular formula of C5H10O2.  It is commonly used as a solvent for cellulose, plastics, oils and fats.  This product is a clear, colourless liquid that has a fruity ester odour.  This product is highly flammable with a flash point of 2° C and a flammability rating of 3.   It is highly miscible with all common organic solvents (alcohols, ketones, glycols, esters) but has only slight miscibility in water.',
        img: '/products-img/esters-5.jpg',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'The most common method for chemically manufacturing iso propyl acetate is via the esterification of isopropanol and acetic acid which are heated in the presence of a strong acid.',
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'A chemical stockist would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Iso propyl acetate should be kept out of direct sunlight, heat and open flames.  Solvents such as iso propyl acetate should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
        desc2:'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, iso propyl acetate is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 2.',
      },
      used: {
        head1: 'What is Iso Propyl Acetate used for?',
        desc1: 'The major use of this product is in printing inks (especially gravure machines) because it is fast evaporating which ensures that the ink dries quickly.  This ink can be used for printing magazines, catalogues, labels and wallpaper.  The other common use of iso propyl acetate is a solvent in the production of cellulose, plastics, oils and fats.  It is also used in the fragrance, cosmetic and personal care industry as a solvent.  An alternative use is as a surfactant in cleaning fluids, coatings for cars and nail care.  The main user end markets are the printing, coatings, cleaning and cosmetic industries.',
      },

    },
    category: {
      id: 5,
      name: "Esters"
    },
  },
  {
    id: 31,
    name: "Methyl Acetate",
    details: {
      whatIs: {
        head1: 'What is Methyl Acetate?',
        sub1: 'Methyl acetate (also known as methyl ethanoate, acetic acid methyl ester, MeOAc, Tereton, Devoton) is a carboxylate ester with a molecular formula of C3H6O2. It is a clear, colourless liquid that has a typical ester odour similar to glues and nail polish removers. It is very flammable with a flashpoint of -10° C and a flammability rating of 3. Methyl acetate is commonly used in low toxicity solvents such as glues, nail polish removers.',
        img: '/products-img/esters-6.jpg',
        sub_desc1: 'It is highly miscible with all common organic solvents (alcohols, ketones, glycols, esters) but has only slight miscibility in water, but becomes more soluble in water with elevated temperatures. It is commonly found in fruits such as apples, grapes and bananas.'
      },
      technicalProps: {
        head: 'Methyl ethanoate technical properties',
        props: [
          {
            desc: 'Chemical and physical properties of methyl acetate:',
          },
          {
            desc: 'Molecular Formula: C3H6O2 / CH3COOCH3',
          },
          {
            desc: 'Synonyms: methyl ethanoate, acetic acid methyl ester, MeOAc, tereton, devoton, methyl ester of acetic acid, methylacetate',
          },
          {
            desc: 'Cas Number: 79-20-9',
          },
          {
            desc: 'Molecular Mass: 74.079 g·mol−1',
          },
          {
            desc: 'Exact Mass: 74.036779 g/mol',
          },
          {
            desc: 'Flashpoint: 14 °F / -10 °C',
          },
          {
            desc: 'Boiling Point: 134.4 °F at 760 mm Hg / 56.8 °C',
          },
          {
            desc: 'Melting Point: -144 °F / -98.0 °C',
          },
          {
            desc: 'Vapour Pressure: 170 mm Hg at 68 ° F ; 235 mm Hg at 77° F',
          },
          {
            desc: 'Water Solubility: ~25% (20 °C)',
          },
          {
            desc:'Density: 0.932 g cm−3'
          },
          {
            desc:'Log P: 0.18'
          },
          {
            desc:'Methyl acetate is a carboxylate ester as it contains a carbonyl group bonded to an OR group and is produced through the esterification of acetic acid with methanol.'
          }
        ],
      },
      produce: {
        head1: 'How is methyl acetate produced?',
        desc1: 'There are various methods of producing methyl acetate. One that is used industrially is via carbonylation. These types of reactions bring together carbon monoxide substrates. To produce methyl acetate, methanol is heated alongside acetic acid in the presence of sulfuric acid. Another method of production is the esterification of methanol and acetic acid in the presence of a strong acid. Sulfuric acid is a common catalyst also used in this reaction.',
      },
      distribute: {
        head1: 'Handling, Storage & Distribution',
        subHead1: 'Hazards & Toxicity',
        desc1: 'Methly acetate has a NFPA health rating of 2 and can cause temporary incapacitation or residual injury. If inhaled or ingested, headaches, dizziness, drowsiness and fatigue can occur. Contact with the eyes can cause irritation. It has a flammability rating of 3 and can be ignited under most ambient temperature conditions residing from its low flash point of -10 °C. When ablaze, methyl acetate emits heavy, irritating, and toxic fumes that can travel considerable distances. These vapours are also explosive and risk bursting if able to return to the source of ignition.',
        desc2:'Methyl acetate’s reactivity is aligned with other compounds of the ester group. In the presence of strong bases or acids such as sodium hydroxide or hydrochloric acid and sulfuric acid at high temperatures, it is converted back into methanol and acetic acid.',
        subHead2: 'Storage & Distribution',
        desc4: 'Methyl acetate should be stored in a storage area specialised for flammable liquids, tightly enclosed in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel. This area should be cool, dry and well-ventilated, out of direct sunlight, heat, open flames and away from strong acids and alkalis, nitrates and strong oxidisers.',
        desc5: 'A bulk solvent exporter would normally distribute in bulk vessels or tank trucks. For transportation purposes, methyl acetate is classed as a flammable liquid with a fire hazard rating of 2 and is a packing group 2.',
        subHead3: 'Safety & Procedures',
        desc6: 'Personal protective equipment should be worn at all times when handling methyl ethanoate to prevent contact with the skin, eyes, nose and throat. If contact is made with the skin, immediately wash the contaminated area and seek medical attention. If contact is made with the eyes, immediately wash with large amounts of water. If swallowed, seek medical attention immediately.',
        desc7: 'When opening containers or moving opened containers, they must be fully resealed and maintained in an upright position to prohibit leakages.',
        desc8: 'If methyl ethanoate is spilt, isolate the leak for at least 50 metres in all directions. In the event of a fire, water extinguishers may be ineffective due to methyl acetate’s low flashpoint. Foam extinguishers that are alcohol-resistant are suitable for small and large fires.'
      },
      used: {
        head1: 'What is methyl ethanoate used for?',
        subHead2: 'Industry Uses',
        desc2: 'Industry uses of methyl ethanoate involve the reaction of carbonylation to produce acetic anhydride. It is also used in paint and coating adhesives, lubricants, intermediates, processing aids and as a solvent in paint, glue, nail polish and graffiti removers.',
        desc2_2: 'Methyl ethanoate is also used as a chemical intermediate for the synthesis of chlorophacinone, diphacinone, fenfluramine, o-methoxyphenylacetone, p-methoxyphenylacetone, methyl cinnamate, methyl cyanoacetate, methyldopa, and phenylacetone and in the manufacturing of cellulose adhesives and perfumes.',
        subHead3: 'Commercial Uses',
        desc3: 'Methyl ethanoate is used commercially as a flavouring agent in food additives for rum, brandy, whisky, in adhesives, cleaning products, personal care and cosmetic products, lubricants, fast-paced drying paints such as lacquers, motor vehicle coatings, furniture coatings, industrial coatings (low boiling point) inks, resins, oils artificial leathers and electronic products. The main user end markets for this product are the paint, coatings, cosmetic, textiles and motor industries.',
      },

    },
    category: {
      id: 5,
      name: "Esters"
    },
  },
  {
    id: 32,
    name: "N-Butyl Acetate",
    details: {
      whatIs: {
        head1: 'What is N-Butyl Acetate?',
        sub1: 'Normal butyl acetate (also known as n-butyl acetate, butyl acetate, butyl ethanoate, 123-86-4) is a clear, colourless ester with a molecular formula of C6H12O2. It is found in various fruits, red apples in particular, and employs characteristic flavours with a sweet banana smell. This organic compound has a variety of uses including as a food flavouring, as a solvent in the process of lacquer production, in polishes, inks, adhesives and occasionally as a high-boiling solvent.',
        img: '/products-img/esters-7.jpg',
      },
      technicalProps: {
        head: 'Technical Properties ',
        props: [
          {
            desc: 'Chemical and physical properties of Butyl Acetate:',
          },
          {
            desc: 'Molecular Formula: C6H12O2 / CH3COO(CH2)3CH3',
          },
          {
            desc: 'Synonyms: n-butyl acetate, butyl acetate, butyl ethanoate, butyl ester',
          },
          {
            desc: 'Molecular Formula: C6H12O2 / CH3COO(CH2)3CH3',
          },
          {
            desc: 'Molecular Mass: 116.160 g/mol-1',
          },
          {
            desc: 'Exact Mass: 116.08373 g/mol',
          },
          {
            desc: 'Flashpoint: 72 °F / 22 °C',
          },
          {
            desc: 'Boiling Point: 259.7 °F / 126.1 °C',
          },
          {
            desc: 'Melting Point: −108 °F / −78 °C',
          },
          {
            desc: 'Vapour Pressure: 10 mm Hg at 68 ° F',
          },
          {
            desc: 'Water Solubility: 0.68 g/100 mL (20 °C)',
          },
          {
            desc:'Density: 0.8825 g/cm3 (20 °C)'
          },
          {
            desc:'Log P: 1.82'
          },
          {
            desc:'Butyl Acetate is highly flammable and highly miscible with many organic solvents including alcohols, esters and glycols. It is only slightly miscible in water.'
          }
        ],
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'The most common method of manufacturing butyl acetate commercially is by the esterification of butanol and acetic acid which are then heated by a catalyst such as sulfuric acid. If an isomer of butanol is used instead, you will form an isomer of butyl acetate.',
      },
      distribute: {
        head1: 'How is it handled, stored and distributed?',
        desc2:'Methyl acetate’s reactivity is aligned with other compounds of the ester group. In the presence of strong bases or acids such as sodium hydroxide or hydrochloric acid and sulfuric acid at high temperatures, it is converted back into methanol and acetic acid.',
        subHead2: 'Hazards and toxicity',
        desc4: 'Butyl acetate is classed as highly flammable both with fire (an NFPA rating of 3) and air and water reactions. It can be easily ignited by high temperatures and flames. Its vapours are also heavy and will travel to an ignition source and form explosive mixtures with the air.',
        desc5: 'It also has an NFPA health rating of 2. Avoid inhaling as this will cause headaches, drowsiness, irritation of the mouth, nose eyes, and nausea. The use of PPE equipment is required for both eyes and skin as this will help to avoid prolonged exposure of butyl acetate as it can cause dryness.',
        subHead3: 'Storage and distribution',
        desc6: 'A chemical trader would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from other strong oxidising agents and acids.  Normal butyl acetate should be kept out of direct sunlight, heat and open flames and stored in drummed containers which are tightly closed such as isotanks made of stainless steel, aluminium or carbon steel. Containers that are opened must be closed and kept grounded to prevent spillage. It is important to ensure that entry of butyl acetate into sewers, basements or waterways is prevented and that vapour is suppressed where appropriate to reduce spread and risk.',
        desc7: 'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, normal butyl acetate is classed as a flammable liquid. A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 3.',
      },
      used: {
        head1: 'What is N-Butyl Acetate used for?',
        desc1: ' Butyl acetate has a variety of industry and consumer uses with its main end-user markets including paints/lacquers, coatings, cosmetics, leather, cleaning and the pharmaceutical industries.',
        subHead2: 'Industry Uses',
        desc2: 'Normal butyl acetate’s most common industry use is in the production of lacquers and paints (due to its low volatility) as a solvent. Additionally, it has uses in the manufacturing of artificial leather, plastics adhesives and hardened coatings and topcoats.',
        desc2_2: 'It is commonly used in the pharmaceutical industry as a solvent or an extraction agent for processing oils and coatings. Other industry uses include lubricants, intermediaries, fruit flouring and various additives.',
        subHead3: 'Consumer uses ',
        desc3: 'Butyl acetate is found in several cosmetic products including as a flavouring solvent in perfumes, in fabrics and leather, in cleaning and care products for vehicles, air, and personal use and as an anticorrosive agent.',
      },

    },
    category: {
      id: 5,
      name: "Esters"
    },
  },
  {
    id: 33,
    name: "N-Propyl Acetate",
    details: {
      whatIs: {
        head1: 'What is N-Propyl Acetate?',
        sub1: 'Normal propyl acetate (also known as n-propyl acetate, 1-propyl acetate, propyl acetate, 1-acetoxypropane, acetic acid) is an organic compound with a molecular formula of C5H10O2 / CH3COOCH2CH2CH3. It is a clear, colourless ester that has a distinguishable acetate odour, is highly flammable, highly miscible with all common organic solvents (alcohols, ketones, glycols, esters) but only slightly miscible in water.',
        img: '/products-img/esters-8.jpg',
      },
      technicalProps: {
        head: 'Technical Properties',
        props: [
          {
            desc: 'Chemical and physical properties of n-propyl acetate:',
          },
          {
            desc: 'Chemical and physical properties of n-propyl acetate:',
          },
          {
            desc: 'Synonyms: n-propyl acetate, 1-propyl acetate, propyl acetate, npac, npa, np, normal propyl acetate, propyl ethanoate, n-propyl ethanoate, propyl ester, acetic acid, n-propyl ester, 1-acetoxypropane.',
          },
          {
            desc: 'Cas Number: 109-60-4',
          },
          {
            desc: 'Molecular Mass: 102.06808 g/mol',
          },
          {
            desc: 'Flashpoint: 14 °F / -10 °C',
          },
          {
            desc: 'Boiling Point: 214.9 ° F at 760 mm Hg',
          },
          {
            desc: 'Melting Point: -139 °F / -95 °C',
          },
          {
            desc: 'Vapour Pressure: 67.21 mm Hg',
          },
          {
            desc: 'Water Solubility: g/100ml at 16 °C: 1.6',
          },
          {
            desc:'Density: 0.886 at 68 °F'
          },
        ],
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'The primary and most common method for chemically manufacturing n-propyl acetate is the direct esterification of 1-propanol and acetic acid which are heated in the presence of a strong acid, such as sulfuric or methanesulfonic acid. An alternate method involves the ester interchange of 1-propanol with ethyl acetate.',
      },
      distribute: {
        head1: 'Handling, Storage & Distribution',
        subHead1: 'Hazards and safety',
        desc1: 'N-propyl acetate has an NFPA health rating of 1, indicating that it can irritate extensive exposure. An NFPA fire rating of 3 demonstrates that it is highly flammable and can be easily ignited by heat or sparks under ambient conditions. Its vapours travel to the source of the ignition and are heavier than air. In the case of a fire, use dry chemical, CO2 or alcohol-resistant foam. An NFPA instability rating of 0 shows that butyl tri glycol is stable underneath most conditions, including fire.',
        desc2:'Full personal protective equipment should be worn when handling n-propyl acetate to prevent contact with the skin, eyes and mouth.',
        subHead2: 'Storage and Distribution',
        desc4: 'A chemical wholesaler would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Normal propyl acetate should be kept out of direct sunlight, heat and open flames.  Solvents such as normal propyl acetate should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
        desc5: 'A bulk chemical exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, normal propyl acetate is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 2.',
      },
      used: {
        head1: 'What is N-Propyl Acetate used for?',
        desc2: 'The major use of normal propyl acetate is as a solvent in the coatings and printing industries.  It is a good solvent for these industries because it has the ability to thin many other organic compounds.  Normal propyl acetate dissolves a host of resins which make it a suitable solvent for wood lacquers and industrial finishes.  Within the printing industry it is mainly used in flexographic and special screening prints.  It is also used in aerosol sprays, nail care and as a fragrance solvent.  It can also be used as a flavouring additive due to its odour similar to pears.  The main user end markets are the printing, coatings, lacquers, cosmetic and flavouring industries.',
      },

    },
    category: {
      id: 5,
      name: "Esters"
    },
  },
  {
    id: 34,
    name: "Di Propylene Glycol",
    details: {
      whatIs: {
        head1: 'What is Di Propylene Glycol?',
        sub1: 'Di propylene glycol (also known as oyybispropanol, 2,2-dihydroxyisopropylether, 1,1-oxydipropane-2-ol, di-1,2-propylene glycol, and DPG) is a clear, colourless, viscous liquid with a characteristic odour and the formula C6H14O3. It is fully miscible in water and is also miscible with many organic solvents.  This solvency, combined with low toxicity and a low evaporation rate, makes DPG a chemical which is a very useful reactive intermediate in a range of industries.',
        img: '/products-img/glycols-1.png',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Di propylene glycol is produced as a byproduct of propylene glycol production which occurs in a propylene oxide hydrolysis process.  Tri propylene glycol is another by-product of this process.',
        desc2: 'It is estimated that the worldwide capacity for di propylene glycol production is approximately 107,000 tonnes per annum.'
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Di propylene glycol is generally stored and distributed in stainless steel, aluminium or lined tank cars, tank trucks, or drums.  It has a flash point of 124 °C (closed cup) and a specific gravity of 1.023 and is not classified as dangerous for any mode of transport.',
      },
      used: {
        head1: 'What is Di Propylene Glycol used for?',
        desc1: 'Di propylene glycol finds use as a chemical intermediate across a range of industries.  It is used as a component in the production of high volume plasticiser and, indeed, 38% of DPG is consumed in this process.  It is also an initiator in urethane polyols, and a reactant in unsaturated polyurethane resins where it adds flexibility and hydrolytic stability.  It is also used for cutting oils, in hydraulic brake fluid production, and is a solvent for agricultural chemicals such as insecticides.  It is also used as a solvent for printing inks, nitrocellulose, cellulose acetate, lacquers and coatings.  It is an ingredient in industrial soaps and also has a role in the refining industry where it is used as an extraction solvent to extract aromatics.',
        desc2: 'There is also a Fragrance Grade of di propylene glycol which is used in the cosmetics industry where it is an additive in perfumes, and in skin and hair care products, where it binds and carries the fragrance elements of the perfume being used.'
      },

    },
    category: {
      id: 8,
      name: "Glycols"
    },
  },
  {
    id: 35,
    name: "Diethylene Glycol",
    details: {
      whatIs: {
        head1: 'What is Diethylene Glycol?',
        sub1: 'Diethylene glycol (also known as DEG, 2,2-oxydiethanol and diglycol) is a clear, colourless, odourless liquid with the formula C4H10O3. It is soluble both in water and in many organic compounds and has hygroscopic properties which makes it a useful industrial chemical.',
        img: '/products-img/glycols-2.jpg',
      },
      technicalProps: {
        head: 'Technical Properties',
        props: [
          {
            desc: 'Technical properties of diethylene glycol:',
          },
          {
            desc: 'Cas Number: 111-46-6',
          },
          {
            desc: 'Molecular Formula: C4H10O3 or (CH2CH2OH)2O',
          },
          {
            desc: 'Synonyms: Diglycol, DEG, 2,2-oxydiethanol and dihydroxy diethyl ether',
          },
          {
            desc: 'Molecular Mass: 106.12 g/mol',
          },
          {
            desc: 'Flashpoint (open cup): 143 °C (290 °F)',
          },
          {
            desc: 'Autoignition temperature: 229 °C (444 °F)',
          },
          {
            desc: 'Boiling Point: 245 °C (473 °F)',
          },
          {
            desc: 'Melting Point: -10 °C (14 °F)',
          },
          {
            desc: 'Density: 1.12 at 20 °C (68 °F)',
          },
          {
            desc: 'Log P: -1.47',
          },
        ],
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Production of diethylene glycol is generally based on the demand for, and production of, monoethylene glycol (MEG) as it is a by-product of this production process. The process consists of the oxidation of ethylene at a high temperature in the presence of a silver oxide catalyst. The ethylene oxide is then hydrated to yield diethylene glycol with monoethylene glycol and triethylene glycol as co-products.',
        desc2: 'The chemical industry tries to maximise the production of monoethylene glycol in this process, however, diethylene glycol is a very useful by-product.'
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Diethylene glycol can be stored in stainless steel, aluminium, or lined drums, tank cars, or tank trucks.  It has a specific gravity of 1.118 and a flashpoint of 143 °C (open cup). This results in a flammability rating of 1 under the NFPA 704 indicating the compound requires considerable preheating before ignition could occur. It is not regulated for transport on road, rail, air, or sea but it is classified as harmful and can be toxic if swallowed.',
        subHead2: 'Health hazards',
        desc4: 'The compound is rated a 1 for health under the NFPA 704 indicating that exposure should only cause a minor residual injury.',
        desc5: 'The primary health hazard with diethylene glycol is the risk of poisoning. The chemical properties of the compound make it possible to be passed as counterfeit glycerol, a highly versatile, non-toxic compound used as a sweetener in food and an antiviral in the medical industry. Many deaths have occurred because of products produced using glycerol being contaminated with diethylene glycol.',
        desc6: 'If the compound is swallowed, then fomepizole or ethanol should be promptly administered to prevent metabolism. While fomepizole has minimal adverse effects, it is a highly expensive treatment option. Later in the phases of a poisoning when DEG has metabolised, dialysis may be the only remaining option for the individual.'
      },
      used: {
        head1: 'What is diethylene glycol used for?',
        desc1: 'Diethylene glycol has a variety of uses in the industry. The tobacco industry makes use of its hygroscopic properties by utilising it as a humectant in tobacco products to control the moisture of the tobacco filler. This same property also makes it useful in the treatment of paper, cork, glue, and cellophane and it is utilised as a dehydrant in the natural gas industry where it removes water from gas pipelines.',
        desc2: 'The compound is also used as a chemical intermediate in the manufacture of unsaturated polyester resins, plasticisers, acrylate and methacrylate resins, and urethanes. In the U.S. and Western Europe, 51% of DEG is consumed in this way.',
        desc3: 'However, in Japan, it is mostly utilised as a cement grinding aid. It can also be used in petroleum solvent extraction and can be found in printing ink and drywall joint compounds.',
        desc4: 'Diethylene glycol is now being displaced by tri ethylene glycol in some of its applications as the lower toxicity of tri ethylene glycol makes it more appealing to manufacturers.'
      },

    },
    category: {
      id: 8,
      name: "Glycols"
    },
  },
  {
    id: 36,
    name: "Hexylene Glycol",
    details: {
      whatIs: {
        head1: 'What is Hexylene Glycol?',
        sub1: 'Hexylene glycol (also known as HGL, 2-methyl pentane-2,4-diol, pinakon and Diolane) is a clear, colourless liquid with a characteristic odour.  It is fully miscible in water and has the chemical formula C6H14O2.  Hexylene glycol is a compound that appears in a large number of products that are used commercially and industrially',
        img: '/products-img/glycols-3.jpg',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Hexylene glycol is formed from the achiral reagents hydrogen and diacetone alcohol.',
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Hexylene Glycol is stored in bulk storage or stainless steel drums and is transported by tank truck.  It is classed as non-hazardous for air, sea, and road freight but is classed as an irritant.  It has a specific gravity of 0.925 and a flash point of 93 °C (closed cup).',
      },
      used: {
        head1: 'What is Hexylene Glycol used for?',
        desc1: 'The single largest user of hexylene glycol is the industrial coatings industry which uses approximately 45% of the HGL produced world-wide.  It is a component in lacquers and varnishes, and is a solvent plasticiser in surface coatings.  It is also a component in both oil and water- based paints, and in paint strippers.',
        desc2: 'Hexylene glycol is also used as a chemical intermediate, which accounts for approximately 20% of its consumption, and another 10% is used on oil and natural-gas fields where it is both a down hole lubricant, and a grinding and extraction aid.',
        desc3: 'Hexylene glycol is also employed as an antifreeze, and as a coupling agent for hydraulic fluids.  It is a moisturising, and setting, agent in the manufacture of textiles and can also be found in the cosmetics industry where it is a component of fragrances and bath, hair, and soap preparations.  It also has a role as a wetting agent in pesticide formulations and is a solvent in the preparation of dyes.'
      },

    },
    category: {
      id: 8,
      name: "Glycols"
    },
  },
  {
    id: 37,
    name: "Mono Ethylene Glycol",
    details: {
      whatIs: {
        head1: 'What is Mono Ethylene Glycol?',
        sub1: 'Mono ethylene glycol (also known as MEG, EG, 1,2-ethanediol or 1,2-Dihydroxyethane) is an organic compound with the formula C2H6O2. It is a slightly viscous liquid with a clear, colourless appearance and a sweet taste that emits virtually no odour. It’s miscible with water, alcohols, and many other organic compounds and is primarily used in the industry for manufacturing polyester fibres and as a component in the production of antifreeze, coolants, aircraft anti-icers and de-icers.',
        img: '/products-img/glycols-4.jpg',
      },
      technicalProps: {
        head: 'Technical Properties',
        props: [
          {
            desc: 'Technical properties of Mono Ethylene Glycol:',
          },
          {
            desc: 'Molecular Formula: C2H6O2 / (CH2OH)2 / HOCH2CH2OH',
          },
          {
            desc: 'Synonyms: monoethyleneglycol, mono ethyl glycol, meg glycol, ethylene glycol, 1,2-ethanediol, Ethane-1,2-diol, EG, industrial glycol, 1,2-Dihydroxyethane, glycol alcohol.',
          },
          {
            desc: 'Synonyms: Diglycol, DEG, 2,2-oxydiethanol and dihydroxy diethyl ether',
          },
          {
            desc: 'Cas Number: 107-21-1',
          },
          {
            desc: 'Molecular Mass: 62.07 g/mol',
          },
          {
            desc: 'Exact Mass: 62.036779 g/mol',
          },
          {
            desc: 'Flashpoint: 232 °F/ 111.11 °C',
          },
          {
            desc: 'Autoignition temperature: 770 °F / 410 °C',
          },
          {
            desc: 'Boiling Point: 387.7 °F / 197.6 °C at 760 mm Hg',
          },
          {
            desc: 'Melting Point: 9 ° F / -12.8 °C',
          },
          {
            desc: 'Vapour Pressure: 0.06 mm Hg at 68 °F / 20 °C'
          },
          {
            desc: 'Density: 1.115 at 68 °F'
          },
          {
            desc: 'Log P: -1.69'
          }
        ],
      },
      produce: {
        head1: 'How is Mono Ethylene Glycol Produced?',
        desc1: 'The intermediate ethylene oxide is used to convert ethylene (ethene) into ethylene glycol. Ethylene oxide is obtained through oxidation and is then reacted with water to give mono ethylene glycol with di and tri ethylene glycols as co-products:',
        desc2: 'C2H4O + H2O → HOCH2CH2OH',
        desc3: 'Acids and bases can catalyse this reaction, or it can occur at neutral pH under elevated temperatures. Yields of up to 90% can be achieved with acidic or neutral pH with a large excess of water.',
        desc4: 'Mono ethylene glycol is also manufactured via the hydrogenation of dimethyl oxalate in the presence of a copper catalyst or via the acetoxylation of ethylene.',
        desc5: 'Global demand for Monoethylene Ethylene Glycol (MEG) is strong with the market worth $25 billion and expected to grow 6% annually to 2024. This is especially due to the increased production of polyethene terephthalate (PET) and the demand for polyesters in the Asia Pacific. Demand is strongest in China where approximately 70% of the world’s MEG output is consumed.'
      },
      distribute: {
        head1: 'How is Mono Ethylene Glycol Stored and Distributed?',
        subHead1: 'Storage & Handling',
        desc1: 'Under the NFPA 704, mono ethylene glycol is rated as a 0 for instability, indicating that mono ethylene glycol is usually stable. Mono ethylene glycol’s vapours are heavier than air and will travel to surrounding areas. Due to its high flashpoint of 111.11°C, the chemical has a flammability rating of 1, indicating that it requires considerable preheating for ignition and combustion to occur. However, in storage, MEG should be kept away from heat, sparks, and open flames. If a fire was to occur, alcoholresistant foam or water spray should be used to fight fires with a focus on preventing the spillage from reaching water sources or sewers.',
        subHead2: 'Mono Ethylene Glycol Health Hazards',
        desc4: 'The chemical has high toxicity when ingested with the major danger being a result of the sweet taste encouraging further consumption; this increases the danger posed to animals and children. Ingestion of sufficient amounts is fatal if left untreated with the ethylene glycol being oxidised in the body to glycolic acid and then the toxic chemical, oxalic acid. MEG ingestion impacts the central nervous system, heart and can cause acute kidney failure.',
        desc5: 'Eye exposure to mono ethylene glycol vapours can irritate, and therefore it is suggested goggles should be worn while handling the chemical. Exposure to ethylene glycol in liquid form has the potential to cause more serious eye damage. If contact is made with the eyes, immediately wash with plenty of water and seek medical attention.',
        desc6: 'Skin exposure with MEG can also irritate and so gloves should be worn. If the skin does become contaminated, all wet clothing should be removed, and the skin washed with water. Inhalation exposure to high levels of ethylene glycol can cause irritation, and potentially intolerable respiratory discomfort and coughs. If excessive inhalation occurs, the individual should be removed from the environment, breathe fresh air, and seek medical attention.'
      },
      used: {
        head1: 'Mono Ethylene Glycol Uses',
        desc1: 'Mono ethylene glycol is more commonly used as a polymer precursor but also in antifreeze as well as in a wide variety of industries.',
        subHead2: 'Polymer Precursor',
        desc2: 'There is strong global demand for mono ethylene glycol in the plastic industry as it is a vital ingredient in the production of polyester fibres, films, and resins, one of which is polyethene terephthalate (PET). PET is created by heating ethylene glycol with terephthalic acid in an esterification reaction. This chemical is then converted into plastic bottles, microwaveable containers and is even used in the textile industry. It is estimated that 70-80% of all the MEG consumed is used as a chemical intermediate in these polyester production processes.',
        subHead3: 'Antifreeze',
        desc3: 'A primary industry use of mono ethylene glycol is in antifreeze applications where it is a component in the manufacture of antifreeze, coolants, aircraft anti-icers and deicers due to its ability to depress the freezing temperature of the water. While pure ethylene glycol freezes at -12.9 °C, when mixed with water this can greatly reduce to around -45 °C with 60% ethylene glycol and 40% water. Bitter flavourings are usually added to MEG used in antifreeze to reverse the sweet taste which may encourage children and animals to consume the chemical.',
        subHead4: 'Other Industry Uses',
        desc4: 'Mono ethylene glycol is also used in the manufacture of alkyd resins which are used to form a film in paints, enamels, and varnishes. In the gas industry, ethylene glycol is used to remove water vapour from the gas before it is processed further. Here, it is also used as a desiccant in gas pipelines to stop the formation of clathrates.',
        desc5: 'For the electronic industry, MEG is used as a chemical intermediate in the production of capacitors. Or for the treatment and prevention of fungi and rot in wood, mono ethylene glycol can be used, especially useful for exhibitions and museums. In the medical field, ethylene glycol can be used in the production of vaccines, although it is not present in the final administered vaccine. It is a minor ingredient in a variety of cleaners, including screen cleaners for electronics where it is paired with isopropyl alcohol.'
      },

    },
    category: {
      id: 8,
      name: "Glycols"
    },
  },
  {
    id: 38,
    name: "Mono Ethylene Glycol - Tech",
    details: {
      whatIs: {
        head1: 'What is Mono Ethylene Glycol - Tech?',
        sub1: 'Mono Ethylene Glycol (also known as MEG) is a clear, colourless, virtually odourless, and slightly viscous liquid.  It is miscible with water, alcohols, and many organic compounds, and has the formula C2H6O2.  It is the most important of the commercially available ethylene glycols as it has many industrial applications',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Mono Ethylene Glycol is produced by the oxidation of ethylene at a high temperature in the presence of a silver oxide catalyst.  The ethylene oxide is then hydrated to yield mono ethylene glycol with di and tri ethylene glycols as co-products.',
        desc2: 'Global demand for MEG is strong with demand estimated at 18 million tonnes in 2008 and forecasts suggesting that this demand could rise to 25 million tonnes by 2015.  Demand is strongest in China where approximately 70% of the world’s MEG output is consumed.'
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Mono Ethylene Glycol can be stored in stainless steel, aluminium, or lined drums, tank cars, or tank trucks.  It has a specific gravity of 1.115 and a flash point of 110 °C (closed cup).  It is not regulated for transport on road, rail, air, or sea but it is classified as harmful, and is harmful if swallowed.',
      },
      used: {
        head1: 'What is Mono Ethylene Glycol - Tech used for?',
        desc1: 'There is strong global demand for Mono Ethylene Glycol as it is a vital ingredient in the production of polyester fibres, films, and resins, one of which is polyethylene terephthalate (PET).  The PET is then converted into plastic bottles which are used globally.  It is estimated that 70-80% of all the MEG consumed is used as a chemical intermediate in these polyester production processes.',
        desc2: 'The second largest market for MEG is in antifreeze applications where it is a component in the manufacture of antifreeze, coolants, aircraft anti-icer, and de-icers.',
        desc3: 'Mono ethylene glycol also has humectant properties and this makes it ideal for use in the fibre treatment of textiles, the paper industry, and in adhesives, inks, and cellophane.',
        desc4: 'It is also a used as a dehydration agent in natural gas pipelines where it inhibits the formation of natural gas clathrates before being recovered from the gas and reused.'
      },

    },
    category: {
      id: 8,
      name: "Glycols"
    },
  },
  {
    id: 39,
    name: "Mono Propylene Glycol",
    details: {
      whatIs: {
        head1: 'What Is Monopropylene Glycol?',
        sub1: 'Monopropylene glycol (also known as propylene glycol, PG, propan1, 2diol and MPG) is a clear, colourless and viscous liquid with a characteristic odour and has the formula C3H8O2. This solvent is soluble in water and holds hygroscopic properties, meaning it can attract hard water molecules. ',
        sub2: 'It is used across a wide range of industries as it has low toxicity, coupled with a freezing point which is depressed upon mixing with water.',
        img: '/products-img/glycols-6.jpg',
      },
      technicalProps: {
        head: 'Technical Properties',
        props: [
          {
            desc: 'Chemical and physical properties of mono propylene glycol:',
          },
          {
            desc: 'Molecular Formula: C3H8O2 / CH3CH(OH)CH2OH',
          },
          {
            desc: 'Synonyms: MPG, Propylene Glycol, PG, Propan1, 2diol, Propane-1,2-Diol, 1,2-Dihydroxypropane 1,2Propandiol',
          },
          {
            desc: 'Cas Number: 57-55-6',
          },
          {
            desc: 'Molecular Mass: 76.095 g·mol−1',
          },
          {
            desc: 'Exact Mass: 76.052429 g/mol',
          },
          {
            desc: 'Flashpoint: 210 °F / 98.9 °C',
          },
          {
            desc: 'Boiling Point: 370.8 °F / 188.2 °C',
          },
          {
            desc: 'Melting Point: −74 °F / −59 °C',
          },
          {
            desc: 'Vapour Pressure: 0.13 mm Hg at 25 °C',
          },
          {
            desc: 'Water Solubility: Miscible',
          },
          {
            desc: 'Density: 1.0361 g/cu cm at 20 °C'
          },
          {
            desc: 'Log P: -1.34'
          }
        ],
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Mono propylene glycol is produced from propylene oxide.  The most common process is by the non-catalytic hydrolysis of propylene oxide in a high-temperature and high-pressure environment.  The second method is the catalytic one, which can proceed at 150 °C, in the presence of ion exchange resin, or a small amount of sulphuric acid or alkali.  It can also be produced from glycerol which is a bio-diesel by-product.',
        desc2: 'The demand for, and consumption of, mono propylene glycol is high with an estimated 1.2 million tonnes produced yearly by plants situated around the world.',
      },
      distribute: {
        head1: 'How is it handled, stored distributed?',
        desc1: 'Mono propylene glycol is stored and moved in stainless steel or mild steel tanks and can be transported by tank trucks.  It is not classified as dangerous for any mode of transport and is not hazardous to health.  It has a flash point of 103 °C (closed cup) and a specific gravity of 1.04.',
      },
      used: {
        head1: 'Monopropylene Glycol Uses',
        desc1: 'There are many uses for mono propylene glycol across many different industries and some chemical manufacturers produce two grades of MPG to meet these varied needs.',
        subHead2: 'Consumer uses',
        desc2: 'The first grade is used in the food industry for food colourings and flavourings and is also a classified humectant food additive (E1520). There are also many applications in the cosmetics industry that use this solvent, specifically personal care products including shampoos, bubble baths, baby wipes and as a moisturiser in make-up.',
        subHead3: 'Industry uses',
        desc3: 'The second is industrial grade MPG which has a variety of uses but the main application is as an antifreeze and aircraft wing and runway de-icer which is because its freezing point lowers upon mixing with water.  It is also used in heat transfer liquids such as engine coolants.',
        desc4: 'Monopropylene Glycol is additionally used in the pharmaceutical industry, examples include as a chemical intermediate in the production of high-performance unsaturated polyester resins used in paints and varnishes and as an excellent solvent utilised in printing inks. It is also used in the manufacturing of non-ionic detergents which are used in the petroleum, sugar-refining, and papermaking industries, the cryonics industry and as an additive in pipe tobacco, preventing dehydration',
      },

    },
    category: {
      id: 8,
      name: "Glycols"
    },
  },
  {
    id: 40,
    name: "Triethylene Glycol",
    details: {
      whatIs: {
        head1: 'What is Triethylene Glycol?',
        sub1: 'Triethylene glycol (also known as TEG, triglycol and trigen) is a colourless, viscous, non-volatile liquid with the formula C6H14O4.  It is well known for its hygroscopic quality and its ability to dehumidify fluids.',
        img: '/products-img/glycols-7.jpg',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Triethylene glycol is prepared commercially as a co-product of the oxidation of ethylene at high temperature, in the presence of a silver oxide catalyst.  The ethylene oxide is then hydrated to yield mono, di, tri, and tetra ethylene glycols.',
        desc2: 'It is estimated that the total world consumption of TEG is in excess of 175 metric tonnes annually.'
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Triethylene glycol can be stored and transported in stainless steel, aluminium  or lined tank cars, tank trucks, or 225 kg drums.  It has a specific gravity of 1.125 and a flash point of 168 °C (closed cup) and is not classified for transport by road, sea, or rail.',
      },
      used: {
        head1: 'What is Triethylene Glycol used for?',
        subHead1: 'Oil & Gas Industry',
        desc1: 'The main uses for tri ethylene glycol are based upon its hygroscopic quality. This means that it can absorb moisture from the air through absorption or adsorption. It is used as a dehydrating agent for natural gas pipelines where it removes the water from the gas before being condensed. The triethylene glycol can then be continually reused, although the by-product of benzene needs to be disposed of carefully. This process is useful as it prevents the gas from freezing making the gas easier to transport and manage for end consumers.',
        subHead2: 'Mild Disinfectant',
        desc2: 'Triethylene glycol can also be used as a mild disinfectant. Due to its low toxicity, antimicrobial properties, and low odour, it is commonly used for air disinfection in occupied areas where more aggressive disinfectants cannot be used. Due to these disinfectant properties and the dehydrating properties, it is an ideal dehumidifying agent in air-conditioning units.',
      },

    },
    category: {
      id: 8,
      name: "Glycols"
    },
  },
  {
    id: 43,
    name: "Butyl Di Glycol",
    details: {
      whatIs: {
        head1: 'What is Butyl Di Glycol?',
        sub1: 'Butyl di glycol (also known as BDG, butyl dioxitol, diethylene glycol monobutyl ether, 2(-2butoxyethoxy) ethanol and butoxydiethylene glycol) is a colourless, clear organic compound with a faint characteristic odour that has the formula C8H18O3. It is soluble in water and miscible with many common solvents, and also has low volatility and a high boiling point. These are the factors that make butyl di glycol most useful in the paint industry.',
        img: '/products-img/glycol-esters-1.jpg',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Butyl di glycol is one of the co-products formed when ethylene molecules are reacted with n-butanol using an alkali catalyst. If the ratio of ethylene to butanol is higher than two at the end of this process, then butyl diglycol is produced (along with tri-ethylene glycol monoethers).',
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Butyl di glycol is stored and transported either in bulk isocontainers or in drums made of mild steel and/or stainless steel and should always be stored under nitrogen. The room temperature where it is stored should not reach over 40 °C as it can oxidise at higher temperatures.',
        desc2: 'Butyl di glycol is not classified as dangerous for any form of transport but is classified as an irritant and should not be in contact with strong acids or oxidisers. It has a flashpoint of 105 °C (closed cup) and a specific gravity of 0.955. Keeping butyl diglycol in the appropriate conditions can give it a shelf life of up to a year.'
      },
      used: {
        head1: 'What is Butyl Di Glycol used for?',
        desc1: 'Butyl di glycol is most commonly used in the coatings and paint industries where its low volatility and high boiling point have seen it widely accepted as a flow promoter for baking finishes such as melamine, urea, phenol, or epoxy resin composites.  It is also widely used in stove enamels as it has a high evaporation number which means that the enamel properties can be improved without it affecting the drying time.  It also has a role in air-drying paints as it increases “brushability”.',
        desc2: 'Butyl di glycol is also found in the printing industry where it is a solvent for printing inks, and is also a starting material in the production of butyl diglycol acetate.'
      },

    },
    category: {
      id: 9,
      name: "Glycol Ethers"
    },
  },
  {
    id: 44,
    name: "Butyl Glycol",
    details: {
      whatIs: {
        head1: 'What is Butyl Glycol?',
        sub1: 'Butyl glycol (also known as BG, 2-butoxyethanol, glycol monobutyl ether and ethylene glycol monobutyl ether, butyl cellosolve, butoxyethanol) is a clear, colourless, oily liquid with a unique sweet yet mild odour and has the formula C6H14O2. It is a butyl ether of ethylene glycol and is miscible with water and common organic solvents. It has been produced industrially for over half a century and is used primarily as a solvent in paints and surface coatings but also in inks and cleaning products.',
        img: '/products-img/glycol-esters-2.jpg',
      },
      technicalProps: {
        head: 'Technical Properties',
        props: [
          {
            desc: 'Chemical and physical properties of butyl glycol:',
          },
          {
            desc: 'Molecular Formula: C6H14O2 / CH3(CH2)2CH2OCH2CH2OH',
          },
          {
            desc: 'Synonyms: 2-Butoxyethanol, Butyl Cellosolve, Butyl Monoether Glycol, Ethylene Glycol Monobutyl Ether (EGBE), Butoxyethanol',
          },
          {
            desc: 'Cas Number: 111-76-2',
          },
          {
            desc: 'Molecular Mass: 118.176 g/mol1',
          },
          {
            desc: 'Exact Mass: 118.09938 g/mol',
          },
          {
            desc: 'Flashpoint: 153 °F / 67 °C',
          },
          {
            desc: 'Boiling Point: 340 °F / 171 °C',
          },
          {
            desc: 'Melting Point: -107 °F / -77 °C',
          },
          {
            desc: 'Vapour Pressure: 0.76 mm Hg at 68 ° F',
          },
          {
            desc: 'Water Solubility: ≥ 100 mg/ml (72° F)',
          },
          {
            desc:'Density: 0.90 g/cm3'
          },
          {
            desc: 'Log P: 0.83'
          }
        ],
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Butyl glycol is produced by reacting ethylene oxide with an alcohol such as normal butanol (nbutanol) within a catalyst. This process is called ethoxylation. If the ratio of ethylene oxide to nbutanol is greater than one then di- and tri- ethylene glycol monoethers are also produced.',
        desc2: 'Below is the chemical equation for this reaction:',
        desc3: 'C2H4O + C4H9OH → C4H9OC2H4OH',
        desc4: 'World production is estimated at between 300-500 KT per annum. Butyl glycol can also be produced through the etherification of butanol with 2-chloroethanol.'
      },
      distribute: {
        head1: 'How is it Handled, Stored and Distributed?',
        desc1: 'Butyl glycol is classed as an irritant, therefore, great precaution and care must be taken during the handling and distribution process.',
        subHead2: 'Hazards',
        desc4: 'Butyl glycol, if in contact with your eyes, skin, throat, can be harmful and cause serious irritation. Ingestion, and skin contact, can produce headaches, nausea, and dizziness. The wearing of PPE equipment is recommended to prevent the chances of skin content, swallowing and inhaling.',
        desc5: 'If contact is made, it should be immediately washed out of eyes, soapy water should be used to clean the skin and any clothing contacted should also be removed and replaced. Medical support must be obtained in all circumstances, especially if the chemical is swallowed.',
        subHead2_desc1:'It has a National Fire and Protection Association health rating of 3, indicating that it can cause serious and even permanent injuries in critical conditions. A fire rating of 2 indicates that a modest amount of high heat exposure is required for ignition to ensue; a flame or spark will easily cause an ignition.',
        subHead3: 'Storage & Distribution',
        desc6: 'Butyl glycol should be stored in a cool, dark place away from food and oxidants. It is transported in carbon steel, stainless steel or teflon containers and can be moved in bulk or drums. It has a specific gravity of 0.9 and a flashpoint of 60 °C (closed cup) and has been classified as harmful but is not classified as dangerous for any form of transport.',
        desc7: 'If a leak or spillage has occurred, it should be immediately isolated (up to 50 meters in a 360 angle) and the source should be eliminated (only if possible, without risk). Personal protection equipment must be worn, specifically a respirator to filter out gases emitted from the spillage.',
        desc8: 'The leak should be soaked up by a non-combustible material such as earth and then collected in sealable containers. Wash away remainder with water. If it is a minor leak, then a more common approach can be taken including the use of kitchen towel. This should then be burned away from the spillage. The area must then be ventilated to ensure all vapours and gases are eliminated.'
      },
      used: {
        head1: 'How is Butyl Glycol Used?',
        desc1: 'Butyl glycol has many uses, primarily as a solvent, in both the commercial and industrial industries.',
        subHead2: 'Industry Uses',
        desc2: 'Butyl glycol usage is dominated by the paint industry which consumes approximately 75 % of all the BG produced. This is because it is a low volatility solvent and can therefore both extend the drying times of coatings and improve their flow.',
        desc2_2: 'Other applications include use as a solvent in printing inks due to its high boiling point, textile dyes and as a component of hydraulic fluids. It is also a component of drilling and cutting oils and is a major component of Corexit 9527, which is an oil spill dispersant product.',
        desc2_3: 'It is also a chemical intermediate and, as such, is a starting material in the production of butyl glycol acetate which is, itself, an excellent solvent. It is also a starting material in the production of plasticisers by the reaction of phthalic anhydride.',
        subHead3: 'Commercial Uses',
        desc3: 'Butyl glycol is used regularly in most households as it is a component of many home cleaning products. It provides excellent cleaning power for domestic cleaning products and also provides the characteristic odour that we associate with them. It also plays the same role in some industrial and commercial surface cleaners.',
        desc4: 'Many other products contain butyl glycol including spray lacquers, varnishes, varnish removers, paints, liquid soaps, degreasers, leather protectors, whiteboard cleaners, printing pastes, enamels, cosmetics and herbicides.'
      },

    },
    category: {
      id: 9,
      name: "Glycol Ethers"
    },
  },
  {
    id: 45,
    name: "Butyl Poly Glycol",
    details: {
      whatIs: {
        head1: 'What is Butyl Poly Glycol?',
        sub1: 'Butyl poly glycol (also known as BPGL) is a brown liquid with a pungent odour.  It is miscible with water.',
        img: '/products-img/glycol-esters-3.jpg',
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Butyl poly glycol should be stored and transported in carbon steel/stainless steel drums and/or phenolic lined steel drums.  It has a specific gravity of 1.011 and a flash point of 174 °C (closed cup).  It is not regulated for any form of transport but is classed as an Irritant and carries the risk of serious damage to eyes.',
      },
      used: {
        head1: 'What is Butyl Poly Glycol used for?',
        desc1: 'Butyl poly glycol is used both as a hydraulic fluid component and an organic intermediate.',
      },

    },
    category: {
      id: 9,
      name: "Glycol Ethers"
    },
  },
  {
    id: 46,
    name: "Butyl Tri Glycol Ether",
    details: {
      whatIs: {
        head1: 'What is Butyl Tri Glycol Ether?',
        sub1: 'Butyl tri glycol (also known as BTGE, butyl tri tetra, triethylene glycol butyl ether, butoxy triglycol and triglycol monobutyl ether) is a clear, colourless liquid with a mild odour and the formula C10H22O4 / CH3(CH2)3(OCH2CH2)3OH. It is part of a group of glycol ethers with low volatility and strong coupling properties. It is miscible in water and has surface tension properties, making it useful in household and industrial cleaners.',
        img: '/products-img/glycol-esters-4.jpg',
      },
      technicalProps: {
        head: 'Technical Properties',
        props: [
          {
            desc: 'Chemical and physical properties of butyl tri glycol:',
          },
          {
            desc: 'Molecular Formula: C10H22O4 / CH3(CH2)3(OCH2CH2)3OH',
          },
          {
            desc: 'Synonyms: BTGE, butyl tri tetra, butyltriglycol, butoxytriglycol, butyl tri tetra, butyl tri glycol, butyl triglycol, butoxy triglycol, triethylene glycol butyl ether, triglycol monobutyl ether, Dowanol tbat, butoxy triethylene glycol.',
          },
          {
            desc: 'Cas Number: 143-22-6',
          },
          {
            desc: 'Molecular Mass: 206.151809 g/mol',
          },
          {
            desc: 'Flashpoint: 290 °F / 143 °C',
          },
          {
            desc: 'Boiling Point: 532.4 °F / 278 °C',
          },
          {
            desc: 'Melting Point: -22 °F/ -30.0 °C',
          },
          {
            desc: 'Freezing Point: -31 °F/ -35 °C',
          },
          {
            desc: 'Water Solubility: miscible',
          },
          {
            desc: 'Density: 0.9890 g/cu cm at 20 °C',
          },
        ],
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'The primary method of manufacturing butyl tri glycol is via reacting ethylene oxide with ethyl alcohol. This is done by vacuum distillation which separates and isolates the produced butyl tri glycol from the reaction.',
        desc2: 'Other methods of production include reacting of alcohols with ethylene oxide. Global consumption of butyl tri glycol ether is estimated at approximately 21,000 tonnes per year.',
      },
      distribute: {
        head1: 'Handling, storage and distribution',
        subHead1: 'Hazards and Safety',
        desc1: 'Butyl tri glycol has an NFPA health rating of 2, indicating that it can cause incapacitation or residual injury under emergency conditions. Short term exposure to the eyes and skin can cause irritation, dryness, and cracking.',
        desc2: 'An NFPA fire rating of 1 demonstrates that it will not ignite under ambient temperatures unless preheated. An NFPA instability rating of 0 shows that butyl tri glycol is stable underneath most conditions, including fire.',
        desc3: 'Full personal protective equipment should be worn when handling this product to prohibit contact with the skin, eyes, and throat. This includes gloves, masks, and Safety Goggles. In the case of a leak, respirators should be worn for protection against vapours. The leak should be prevented from reaching sewers, waterways and basements and washed away with water.',
        subHead2: 'Storage and distribution',
        desc4: 'Butyl tri glycol can be stored and transported in stainless steel, mild steel, or carbon steel drums and/or tanks and must be kept in a well-ventilated area.  It is not classified as dangerous for any form of transport but is classed as an Irritant.  It has a flashpoint of 156 °C (closed cup) and a specific gravity of 0.985.',
      },
      used: {
        head1: 'What is butyl tri glycol used for?',
        subHead1: 'Industry Uses',
        desc1: 'Butyl tri glycol is used as a solvent for nitrocellulose, oils, paint removers, gums, soaps, dyes, grease, industrial cleaners, polish strippers, disinfectants, chlorinated rubber, wood paints, inks and levelling agents.',
        desc1_2: 'It is also used as a component in the base blend used in the manufacture of cutting and hydraulic oils, including hydraulic brake fluids, as a useful component in paint stripping formulations as it has low volatility, employed as a dye carrier in textile dyeing processes, as a coalescent for coatings, in the manufacture of plasticizers, as a dye carrier for textile dyes and as a solvent/intermediate for ester production.',
        subHead2: 'Commercial Uses',
        desc2: 'Butyl tri glycol is found in many commercial products including de-icers, automotive care products, paints, inks, coatings, oils, greases, disinfectants and lubricants.',
      },

    },
    category: {
      id: 9,
      name: "Glycol Ethers"
    },
  },
  {
    id: 47,
    name: "Ethyl Di Glycol",
    details: {
      whatIs: {
        head1: 'What is Ethyl Di Glycol?',
        sub1: 'Ethyl di glycol (also known as EDG, 2-(2-ethoxyethoxyethanol, ethoxy diglycol and diethylene glycol monoethylether) is a clear, colourless liquid with a mild, yet characteristic odour.  It is miscible in water and also in alcohols, esters, ethers, and ketones.',
        img: '/products-img/glycol-esters-5.png',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Ethyl di glycol is a product of the reaction of ethylene oxide and ethanol in the presence of a catalyst.  The final product is refined by distillation where the unreacted alcohol, and the mono and di ether products, are separated.'
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Ethyl di glycol can be stored and transported in mild steel drums or polyethylene, or polypropylene, storage drums.  It is not classified as dangerous for any form of transport but it is classed as an Irritant.  It has a flash point of 96 °C (closed cup) and a specific gravity of 0.990.',
      },
      used: {
        head1: 'What is Ethyl Di Glycol used for?',
        desc1: 'Ethyl di glycol has low viscosity at low temperatures and it is this quality, combined with a low solidification point, which see it employed as a constituent part of many brake fluids.  It is also widely used in the paint industry where it is used to improve the gloss and flow properties of paint.  It is also a constituent of many wood stains and wood preservatives.',
        desc2:'Ethyl di glycol also has a variety of roles in other industries.  In the printing industry it is used both in printing inks and as a cleaning agent in offset printing.  It is an ingredient in Indian inks and also in ballpoint pen pastes.  In the textile industry, it is a solvent used in the printing and dyeing of textile fabrics and fibres.  It can also be used in the production and formulation of pesticides.'
      },

    },
    category: {
      id: 9,
      name: "Glycol Ethers"
    },
  },
  {
    id: 48,
    name: "Ethyl Tri Glycol",
    details: {
      whatIs: {
        head1: 'What is Ethyl Tri Glycol?',
        sub1: 'Ethyl triglycol (also known as ethoxy triglycol; triethylene glycol monoethyl ether; and TGEE) has the formula C8H18O4 and is an ethoxy alcohol derivative.  It is an odourless, colourless, and viscous liquid that is water soluble and is also hygroscopic.  It also has a high boiling point of 256oC and a slow evaporation rate.',
        img: '/products-img/glycol-esters-6.jpg',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Ethyl triglycol is produced in a closed, continuous process by the reaction of ethanol with ethylene oxide in the presence of a catalyst.  It is then purified, via distillation, to form the final product.  Diethylene glycol monoethyl ether and ethylene glycol monoethyl ether are also co-products of this reaction.'
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Triethylene glycol monoethyl ether has a flashpoint of 132oC (closed cup), a specific gravity of 1.02 and is not classified as hazardous for transportation. It should be transported in carbon, steel or stainless steel tanks and should then be stored in a cool, dry, and well-ventilated area.  The container should be resealed after use and should be kept upright. Ethyl triglycol should be stable if stored in recommended conditions.',
      },
      used: {
        head1: 'What is Ethyl Tri Glycol used for?',
        desc1: 'The majority of Ethyl triglycol is consumed in hydraulic and brake fluids.  This is because the viscosity of ethyl triglycol remains largely constant when temperatures fluctuate, and also because of its high boiling point (256oC).',
        desc2:'Triethylene glycol monoethyl ether is also utilised as both a chemical process solvent and as a chemical intermediate in the production of esters used as plasticisers, surfactants, and solvents.  It is also employed as a solvent in the manufacture of protective coatings, adhesives, wood stains and varnish, paint strippers and in household and industrial cleaning formulations.',
        desc3: 'Ethyl triglycol is also employed in the textile industry where it acts as a dye carrier in textile dyeing processes and it also acts as a coupling agent for resins and dyes in other water-based printing inks.  Ethyl triglycol is also utilised as a solubilizer for incompatible liquids in the production of insecticides and is also employed in the detergent industry in hand-wash pastes.',
        desc4: 'It is this variety of applications that means many of us are in contact with Ethyl triglycol on a regular basis.  Household products which may contain Ethyl triglycol include disinfectants, surface cleaners, paint, paint strippers, floor polish, marker pens, and automotive brake fluid.'
      },

    },
    category: {
      id: 9,
      name: "Glycol Ethers"
    },
  },
  {
    id: 49,
    name: "Methyl Glycol",
    details: {
      whatIs: {
        head1: 'What is Methyl Glycol?',
        sub1: 'Methyl glycol (also known as 2-methoxyethanol, glycol monomethyl ether, ethylene glycol monomethylether, methyl cellosolve, methyl oxito, and MGL) is a clear, colourless liquid that has a mild characteristic, ether-like, odour.  It is miscible with water and many organic solvents and has the formula C3H8O2',
        img: '/products-img/glycol-esters-8.jpg',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Methyl glycol is produced via the reaction of ethylene oxide with methanol, in water, and in a high temperature and high pressure environment.'
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Methyl glycol has a flashpoint of 37 °C (closed cup) and is thus highly flammable and should be stored in a cool, dry, well-ventilated area that is free from the possibility of ignition.  For transport purposes it is categorised as hazard class 3, and packing group III.  2-methoxyethanol is classified as harmful and has a specific gravity of 0.965.',
      },
      used: {
        head1: '2 Methoxyethanol Uses',
        desc1: 'Methyl glycol has the ability to dissolve a variety of different types of chemical compounds.  This ability sees it used as a solvent for cellulose acetate, and a solvent for resins (particularly in the electronics industry).  2-methoxyethanol is used in alcohol soluble dyes, and in quick-drying varnishes, enamels, nail polishes and wood stains.',
        desc2:'It is also used as an additive in aeroplane deicing solutions and small amounts of methyl glycol are also used in perfume fixatives and in the manufacture of photographic film.',
      },

    },
    category: {
      id: 9,
      name: "Glycol Ethers"
    },
  },
  {
    id: 50,
    name: "Methyl Di Glycol",
    details: {
      whatIs: {
        head1: 'What is Methyl Di Glycol?',
        sub1: 'Methyl di glycol (also known as diethylene glycol monomethyl ether, diglycol monomethyl ether, methoxy diglycol, ethylene diglycol monomethyl ether, DEGME, MDG and MDGE) is a clear, colourless, almost odourless liquid which has the formula C5H12O3. It is miscible in water and many organic solvents and has hygroscopic qualities.',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Methyl di glycol is a product of the reaction of ethylene oxide and methanol in a high temperature and high pressure environment.'
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Methyl di glycol should be stored in a cool, dry, well-ventilated area, out of the direct sunlight.  It is not classified as dangerous for any form of transport but is classed as harmful.  It has a specific gravity of 1.021 and a flash point of 87o C (closed cup).',
      },
      used: {
        head1: 'What is Methyl Di Glycol used for?',
        desc1: 'The primary uses for methyl di glycol are as a de-icing additive in aviation fuel, and as a solvent.  It is utilised in the aviation industry as it has a relatively high flash point and it is utilised in both the paint and printing industry because it combines high solvency with a low odour.  This makes diethylene glycol monomethyl ether a very effective solvent for resins, pastes, and nitrocellulose lacquers, and also for printing inks, stamp pad inks and ballpoint pen inks.',
      },

    },
    category: {
      id: 9,
      name: "Glycol Ethers"
    },
  },
  {
    id: 51,
    name: "Aromatic Solvent C9",
    details: {
      whatIs: {
        head1: 'What is Aromatic Solvent C9?',
        sub1: 'Aromatic hydrocarbons are a series of organic molecules that form flat ring-shaped bonds.  Aromatic hydrocarbon C9/C10/C12 resins are conventionally named because they are defined by the number of carbon monomers in the chemical.  Aromatic hydrocarbons have a distinctive aromatic odour and a typical Gardner colour of 6 – 10 (dark yellow to dark brown).  They are insoluble in water, low alcohols and ketones, however are soluble in aliphatic hydrocarbons and chlorinated hydrocarbon solvents.',
      },
      produce: {
        head1: 'The Production of Aromatic Hydrocarbon',
        desc1: 'Aromatic hydrocarbon resins are chemically manufactured from resin oil that contains various monomers.  The end product is combination of the following chemicals: indene (20-25%), methlinenes(5-15%), vinyltoluenes(15-25%) and a-methylstyrene (up to 5%).  They are based on aromatic feedstocks that do not undertake much refinement prior to the above polymerisation process.'
      },
      distribute: {
        head1: 'Storage and distribution of Aromatic Solvent c9.',
        desc1: 'A chemical trader would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Solvents such as the aromatic hydrocarbons should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
        desc2: 'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, aromatic hydrocarbons are classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 3.'
      },
      used: {
        head1: 'What is Aromatic Solvent c9 used for?',
        desc1: 'Aromatic hydrocarbons are mainly used in adhesives, printing inks, sealants, polychoroprene rubber, concrete curing compounds, anti-drying agents and paints.  They have a good compatibility with SBR, SIS, SEBS and SEPS and can be used as a pressure sensitive adhesive, hot-melt adhesive and synthetic rubber.  They can also be applied to coatings on ships, vehicles and bridges because they will improve the lustre, increase hardness and make areas more water resistant.  Within the printing industry, the petroleum resin will increase water resistance, solvent consumption and resistance to dry.  They are also used for hot road markings.  The end user markets for this product are the paints, coatings and rubber industries.',
      },

    },
    category: {
      id: 10,
      name: "Hydrocarbons"
    },
  },
  {
    id: 52,
    name: "Aromatic Solvent C10",
    details: {
      whatIs: {
        head1: 'What is Aromatic Solvent C10?',
        sub1: 'Aromatic solvent C10 (also known as Solvesso 150; aromatic 150; A150; and kocosol 150) is a colourless, clear liquid with a mild aromatic odour.  It is a member of the petroleum hydrocarbon family and consists predominately of C9-C11 aromatic hydrocarbons, predominately C10.',
      },
      produce: {
        head1: 'How is Aromatic Solvent C10 produced?',
        desc1: 'Aromatic solvent C10 is produced from the distillation of aromatic streams that are derived from crude oil.  The processes and equipment for the manufacture, transfer, and storage of these aromatic solvents are continuous and enclosed.',
        desc2: 'Global production of heavy aromatic Naphtha-type products, such as A150, is expected to exceed 450 thousand metric tons per annum.'
      },
      distribute: {
        head1: 'Storage and distribution of Aromatic Solvents',
        desc1: 'Aromatic solvent C10 can be stored in mild steel drums and /or iso tanks and transported by tank truck or bulk vessels.  It should be stored in a cool, dry, well-ventilated area that is free from the risk of ignition.  Aromatic solvent C10 has a specific gravity of 0.855 and a flash point of 55 °C (CC) which makes it flammable, and is classified as packing group III.',
      },
      used: {
        head1: 'What is Aromatic Solvent c10 used for?',
        desc1: 'Aromatic solvent C10 is a high boiling point (181-205 °C) aromatic hydrocarbon solvent used mainly in paints and coatings, printing inks, and the agrochemical industry.  It has a flash point and evaporation rate higher than that of Xylene and therefore imparts better flow and film formation making it useful in the paint and coatings industry.  It also has no ethyl-benzene content and is therefore desired for environmentally friendly agrochemical and pesticide formulations.',
        desc2: 'Aromatic solvent C10 is a resin blendstock for foundries and has downhole applications in oilfields.  It is also ideal for use in process additive fluids such as chloro-rubber formulations, synthetic resins, and oil-modified alkyds.'
      },

    },
    category: {
      id: 10,
      name: "Hydrocarbons"
    },
  },
  {
    id: 53,
    name: "Aromatic Solvent C12",
    details: {
      whatIs: {
        head1: 'What is Aromatic Solvent C12?',
        sub1: 'Aromatic solvent C 12 (also known as solvent naphtha; Garosol 200; Solvesso 200; aromatic 200; and wash oil) is a clear and slightly yellow liquid which is aromatic and is insoluble in water.  It is part of the petroleum hydrocarbon family and has the chemical name of aromatic hydrocarbon 64742-94-5.',
      },
      produce: {
        head1: 'How is Aromatic Solvent C12 produced?',
        desc1: 'Aromatic solvent C 12 is a heavy aromatic that is produced from the distillation of aromatic streams that are derived from crude oil.',
      },
      distribute: {
        head1: 'How is Aromatic Solvent C12 Stored?',
        desc1: 'Aromatic solvent C 12   is stored in mild steel drums and/or iso tanks and can be transported by bulk vessels or tank trucks.  It should be stored in an area that is both cool and well ventilated.  It is not regulated for transport by road, air, sea, or rail but is classified as Harmful.  It has a specific gravity of 0.975 and a flash point of 95 °C (closed cup).',
      },
      used: {
        head1: 'What are the uses for Aromatic Solvent C12?',
        desc1: 'Aromatic solvent C 12 is a useful industrial chemical as it has a high boiling point (approximately 220-305 degrees C), a slow evaporation rate, and a high flash point.  It is also a low hazardous air pollutant and is relatively environmentally friendly. The combination of these  factors make aromatic solvent C 12 desirable in many applications, such as high build coatings and printing inks; agrochemicals; oil field chemicals; fuel additives; and emulsifiers and surfactants.',
        desc2: 'It also has a role in water treatment chemicals, process oils, and as a foundry chemical.  It is used in lubricants and corrosion inhibitors and in solvent-based dyes.'
      },

    },
    category: {
      id: 10,
      name: "Hydrocarbons"
    },
  },
  {
    id: 58,
    name: "Toluene",
    details: {
      whatIs: {
        head1: 'What is Toluene',
        sub1: 'Toluene is a clear water-insoluble solvent with a molecular formula of C7H8.  It has an aromatic, benzene-like smell and is a highly volatile flammable liquid with a flash point of 4° C.  It is obtained from petroleum and coal tar and is predominantly used as a solvent in the manufacturing of other organic chemicals.',
        img: '/products-img/toluene.jpg',
      },
      produce: {
        head1: 'How is Toluene produced?',
        desc1: 'Toluene is naturally released into the atmosphere from the following: petroleum fuels, toluene-based solvents, thinners and from motor vehicle exhaust fumes.  The current method to chemically manufacture toluene is through a catalytic reforming process.  A hydrocarbon mixture which is rich in aromatics is passed over a dehydrated catalyst and then obtained from a cut of the distillation or solvent extraction process.'
      },
      distribute: {
        head1: 'Storage and Distribution of Toluene',
        desc1: 'A chemical wholesaler would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Toluene should be kept out of direct sunlight, heat and open flames.  Solvents such as toluene should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
        desc2: 'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, toluene is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 2.'
      },
      used: {
        head1: 'What is Toluene used for?',
        desc1: 'The main chemical use of toluene is to make benzene, xylenes and other solvents.  It can also be used to manufacture other chemicals such as phenol, nitrobenzene, benzoic acid and benzyl chloride.  As a solvent, toluene can be used in paints, paint thinners, adhesives, inks, resins, cleaning agents, leather tanners and inks.  It can also be used to manufacture polymers that produce nylon, plastic soda bottles and for pharmaceuticals, dyes and cosmetic products.  Toluene is also used as a coolant in sodium cold traps underneath nuclear reactor loops.  The user end markets of this product are the chemical, paints, adhesive, cleaning, leather, plastics, cosmetic and pharmaceutical industries.',
        desc2:'It is also used as an additive in aeroplane deicing solutions and small amounts of methyl glycol are also used in perfume fixatives and in the manufacture of photographic film.',
      },

    },
    category: {
      id: 10,
      name: "Hydrocarbons"
    },
  },
  {
    id: 59,
    name: "Xylene",
    details: {
      whatIs: {
        head1: 'What is Xylene?',
        sub1: 'Xylene or xylol (C6H4(CH3))  is a mixture of three isomers – ortho (o), meta (m), and para (p).  Xylene is a clear, colourless, sweet-smelling liquid that is highly flammable with a flashpoint between 23° C and 61° C.',
        img: '/products-img/xylene.jpg',
      },
      produce: {
        head1: 'How is Xylene produced?',
        desc1: 'Xylene is both naturally occurring and manmade.  It can be refined from crude oil in a process known as alkylation.  It can also be produced from coal carbonisation as an extract from the benzole gas created by coke ovens.'
      },
      distribute: {
        head1: 'Storage and Distribution of Xylene',
        desc1: 'A chemical wholesaler would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Xylene should be kept out of direct sunlight, heat and open flames.  Solvents such as xylene should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
        desc2: 'A bulk solvent exporter would normally distribute this chemical in bulk vessels or tank trucks.  For transportation purposes, xylene is classed as a flammable liquid with a fire hazard rating of 3.  A full bulk chemical distributor would export xylene throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 3.'
      },
      used: {
        head1: 'What is Xylene used for?',
        desc1: 'The majority of mixed xylene isomers are used for blending into petrol and gasoline.  It is also a key solvent in the printing, rubber, leather and pesticides industries.  It can also be used as a cleaning agent for steel, silicon and as a thinner for paint, varnishes, adhesives and inks.  Other applications ofxXylene include making certain types of plastic, as an inhalant drug and the manufacture of dyes, fibres, perfumes, and films.  The main end user markets are the petrochemical, printing, rubber, leather, cleaning, plastics and pesticides industries.',
      },

    },
    category: {
      id: 10,
      name: "Hydrocarbons"
    },
  },
  {
    id: 83,
    name: "1-Butene",
    details: {
      whatIs: {
        head1: 'What is 1-Butene?',
        sub1: 'But-1-ene (or 1-butylene) is the organic compound with the formula CH3CH2CH=CH2. It is a colorless gas that is easily condensed to give a colorless liquid. It is classified as a linear alpha-olefin (terminal alkene).[2] It is one of the isomers of butene (butylene). It is a precursor to diverse products.',
        img: '/products-img/1-butene.png',
      },
      produce: {
        head1: 'How is 1-Butene produced?',
        desc1: 'Polymerization of but-1-ene gives polybutylene, which is used to make piping for domestic plumbing.[3] Another application is as a comonomer in the production of certain kinds of polyethylene, such as linear low-density polyethylene (LLDPE).[4] It has also been used as a precursor to polypropylene resins, butylene oxide, and butanone.[5]'
      },
      distribute: {
        head1: 'Storage and Distribution of 1-Butene',
        desc1: '1-Butene is commonly stored in high-pressure cylinders or containers designed to handle compressed gases. These containers should meet safety standards and regulations.1-Butene is typically stored as a compressed gas. The storage pressure and temperature depend on the specific requirements and properties of the gas.',
        desc2: '1-Butene may be transported in compressed gas cylinders or containers designed for high-pressure gases. Transportation methods should comply with local and international regulations. Proper labeling of containers and documentation is essential for compliance and safety during transportation. This includes information on the chemical, hazards, and emergency response procedures.'
      },
      used: {
        head1: 'What is 1-Butene used for?',
        desc1: '1-Butene is a valuable chemical intermediate in the synthesis of other chemicals. It can be used to produce butadiene, which is a key monomer in the production of synthetic rubber. 1-Butene can be used as a fuel or fuel additive. It may be blended with other hydrocarbons to improve certain properties of fuels, such as octane rating. In some cases, 1-butene is used as a solvent in various industrial processes.',
      },

    },
    category: {
      id: 10,
      name: "Hydrocarbons"
    },
  },
  {
    id: 84,
    name: "1-Hexene",
    details: {
      whatIs: {
        head1: 'What is 1-Hexene?',
        sub1: '1-Hexene (hex-1-ene) is an organic compound with the formula C6H12. It is an alkene that is classified in industry as higher olefin and an alpha-olefin, the latter term meaning that the double bond is located at the alpha (primary) position, endowing the compound with higher reactivity and thus useful chemical properties. 1-Hexene is an industrially significant linear alpha olefin. 1-Hexene is a colourless liquid.',
        img: '/products-img/1-hexene.png',
      },
      produce: {
        head1: 'How is 1-Hexene produced?',
        desc1: '1-Hexene is commonly manufactured by two general routes: (i) full-range processes via the oligomerization of ethylene and (ii) on-purpose technology. A minor route to 1-hexene, used commercially on smaller scales, is the dehydration of hexanol. Prior to the 1970s, 1-hexene was also manufactured by the thermal cracking of waxes. Linear internal hexenes were manufactured by chlorination/dehydrochlorination of linear paraffins.[1]'
      },
      distribute: {
        head1: 'Storage and Distribution of 1-Hexene',
        desc1: '"Ethylene oligomerization" combines ethylene molecules to produce linear alpha-olefins of various chain lengths with an even number of carbon atoms. This approach result in a distribution or “full range” of alpha-olefins. The Shell higher olefin process (SHOP) employs this approach.',
        desc2: 'Linde and SABIC have developed the α-SABLIN technology using the oligomerization of ethylene to produce 21 percent 1-hexene. CP Chemicals and Innovene also have full-range processes. Typically, 1-hexene content ranges from about twenty percent distribution in the Ethyl (Innovene) process, whereas only twelve percent of distribution in the CP Chemicals and Idemitsu processes.'
      },
      used: {
        head1: 'What is 1-Hexene used for?',
        desc1: 'The primary use of 1-hexene is as a comonomer in production of polyethylene. High-density polyethylene (HDPE) and linear low-density polyethylene (LLDPE) use approximately 2–4% and 8–10% of comonomers, respectively. Another significant use of 1-hexene is the production of the linear aldehyde heptanal via hydroformylation (oxo synthesis). Heptanal can be converted to the short-chain fatty acid heptanoic acid or the alcohol heptanol.',
      },

    },
    category: {
      id: 10,
      name: "Hydrocarbons"
    },
  },
  {
    id: 85,
    name: "Hexene",
    details: {
      whatIs: {
        head1: 'What is Hexene?',
        sub1: 'Hexane (/ˈhɛkseɪn/) or n-hexane is an organic compound, a straight-chain alkane with six carbon atoms and has the molecular formula C6H14.[7] It is a colorless liquid, odorless when pure, and with boiling points approximately 69 °C (156 °F). It is widely used as a cheap, relatively safe, largely unreactive, and easily evaporated non-polar solvent, and modern gasoline blends contain about 3% hexane.[8]',
        img: '/products-img/hexene.png',
      },
      produce: {
        head1: 'How is Hexene produced?',
        desc1: 'Hexanes are chiefly obtained by refining crude oil. The exact composition of the fraction depends largely on the source of the oil (crude or reformed) and the constraints of the refining. The industrial product (usually around 50% by weight of the straight-chain isomer) is the fraction boiling at 65–70 °C (149–158 °F).'
      },
      distribute: {
        head1: 'Storage and Distribution of Hexene',
        desc1: 'In industry, hexanes are used in the formulation of glues for shoes, leather products, and roofing. They are also used to extract cooking oils (such as canola oil or soy oil) from seeds, for cleansing and degreasing a variety of items, and in textile manufacturing. They are commonly used in food based soybean oil extraction in the United States, and are potentially present as contaminants in all soy food products in which the technique is used[citation needed]; the lack of regulation by the FDA of this contaminant is a matter of some controversy.[9][10]',
        desc2: 'A typical laboratory use of hexanes is to extract oil and grease contaminants from water and soil for analysis.[11] Since hexane cannot be easily deprotonated, it is used in the laboratory for reactions that involve very strong bases, such as the preparation of organolithiums. For example, butyllithiums are typically supplied as a hexane solution.[12]'
      },
      used: {
        head1: 'What is Hexene used for?',
        desc1: 'Hexanes are commonly used in chromatography as a non-polar solvent. Higher alkanes present as impurities in hexanes have similar retention times as the solvent, meaning that fractions containing hexane will also contain these impurities. In preparative chromatography, concentration of a large volume of hexanes can result in a sample that is appreciably contaminated by alkanes. This may result in a solid compound being obtained as an oil and the alkanes may interfere with analysis.',
      },

    },
    category: {
      id: 10,
      name: "Hydrocarbons"
    },
  },
  {
    id: 60,
    name: "Acetone",
    details: {
      whatIs: {
        head1: 'What is Acetone?',
        sub1: 'Acetone (alternatively known as Dimethylketone, Dimethylketal or 2-Propanone, UN 1090) is a clear, colorless, liquid chemical with the formula (CH₃)₂CO. It is a flammable, low toxic, water-miscible compound with a variety of everyday uses in industry, the laboratory, pharmaceuticals and the home.',
        img: '/products-img/acetone.jpg',
      },
      produce: {
        head1: 'How is Acetone produced?',
        desc1: 'Acetone is a naturally occurring chemical which is a by-product of normal metabolic processes in humans, animals and plants. Industrial acetone is usually produced as a by-product from phenol production and is derived, in this instance, from propylene and benzene, which are the main raw materials used to make phenol.',
        desc2: 'The world annual production of acetone is several millions of tons. It is produced in over 40 different countries including the UK and Europe, Africa and America and is moved around the globe by chemical manufacturers, distributors and stockists.'
      },
      distribute: {
        head1: 'Storage and Distribution',
        desc1: 'Due to its highly flammable nature, care must be taken to store and use this product. Acetone is stored in contract bulk petrochemical sites or at stockists own premises either in mild steel bulk storage tanks and/or new or reconditioned steel drums or isotanks.',
        desc2: 'It can be transported by bulk vessels or tank trucks. For transportation purposes, Acetone is classed as highly flammable and irritant and is packing group II, flashpoint -17.8º C. The specific gravity (SG) of acetone is 0.8.'
      },
      used: {
        head1: 'What is Acetone used for?',
        desc1: 'The uses for Acetone are many and diverse. The most common uses are as a precursor to other chemicals, primarily to methyl methacrylate in the ever-growing plastics and PVC industries. It’s approximated that 75% of acetone produced by chemical manufacturers is utilised this way.',
        desc2: 'Other industrial uses of Acetone include the use as a denaturant in the pharmaceutical industry (to produce denatured alcohol). Of the remainder, around 13% of the world’s Acetone production is used by the end user market as a solvent, providing the active ingredient in many cleaning products, nail polish removers, paint/resin/adhesive thinners and various degreasers. Other uses include its employ as an excipient or bulking agent in certain medications and in the high street beauty industry as a component in chemical peels – a process which strips the outer layers of skin away to freshen the appearance.'
      },

    },
    category: {
      id: 11,
      name: "Ketones"
    },
  },
  {
    id: 61,
    name: "Cyclohexanone",
    details: {
      whatIs: {
        head1: 'What is Cyclohexanone?',
        sub1: 'Cyclohexanone (also known as oxocyclohexane, pimelic ketone, cyclohexyl ketone, and CYC) is a clear oily liquid that has a colourless to light yellow tinge and a pungent odour. It is a sixcarbon cyclic molecule belonging to the class of cyclic ketones (organic compounds) with the formula C6H10O.',
        sub2: 'It is slightly soluble in water, completely miscible with common solvents and reacts with oxidants such as nitric acid. It occurs naturally in crude oils and is also produced synthetically, in large quantities, as it is a key intermediate in the production of nylon.',
        img: '/products-img/cyclohexanone.jpg',
      },
      technicalProps: {
        head: 'Technical Properties',
        props: [
          {
            desc: 'Chemical and physical properties of cyclohexanone:',
          },
          {
            desc: 'Molecular Formula: C6H10O / (CH2)5CO',
          },
          {
            desc: 'Synonyms: Ketohexamethylene, oxocyclohexane, sextone, pimelic ketone, pimelin ketone, cyclohexyl ketone, Hydrol-O, anone, CYC.',
          },
          {
            desc: 'Cas Number: 108-94-1',
          },
          {
            desc: 'Molecular Mass: 98.14 g/mol',
          },
          {
            desc: 'Exact Mass: 98.073165 g/mol',
          },
          {
            desc: 'Flashpoint: 111°F / 43.9',
          },
          {
            desc: 'Boiling Point: 312.1 ° F / 155.6 at 760 mm Hg',
          },
          {
            desc: 'Melting Point: 3 ° F/ -16.1 ° C',
          },
          {
            desc: 'Vapour Pressure: 101.7° F at 10 mm Hg',
          },
          {
            desc: 'Water Solubility: 50 to 100 mg/mL at 64° F',
          },
          {
            desc:'Density: 0.945 at 68 °F'
          }
        ],
      },
      produce: {
        head1: 'How is cyclohexanone made?',
        desc1: 'There are several methods of manufacturing cyclohexanone, one of which being the catalytic hydrogenation of phenol:',
        desc2: 'C6H5OH + 2 H2 → (CH2)5CO',
        desc3: 'Another method is via the catalytic air-oxidation of cyclohexane, typically in the presence of cobalt crystals:',
        desc4: 'C6H12 + O2 → (CH2)5CO + H2O',
        desc5: 'This reaction is one of the primary commercial bulk manufacturing methods, the other being the hydrogenation of benzene (in a closed system).',
        desc6: 'Other methods include the catalytic dehydrogenation of cyclohexanol:',
        desc7: 'C6H11OH → C6H11OH + H2',
        desc8:'Worldwide, thousands of tonnes of cyclohexyl ketone are produced annually. Demand for it is still growing, especially in China, and several new production plants have come on-line in the past few years in order to help meet this demand.'
      },
      distribute: {
        head1: 'Handling, storage and distribution',
        subHead1: 'Hazards and toxicity',
        desc1: 'Cyclohexanone has an NFPA health rating of 1 and “can cause significant irritation”. If inhaled, it can irritate the throat and respiratory passages, causing headaches and nausea. Excessive exposure to the eyes, nose and skin can cause similar effects such as irritation, drowsiness, and unconsciousness.',
        desc2: 'It has an NFPA fire rating of 3 and “can be ignited under almost all ambient temperature conditions”. Heat, sparks, or flames can and create vapours that are heavier than air and will travel to the source of the ignition and surrounding areas. An instability rating of 0 indicates that it is “normally stable, even under fire conditions”.',
        subHead2: 'Safety and procedures',
        desc4: 'In the case of a spillage, the leak should be isolated at a minimum of 50 metres and avoid being walked through. You should also prohibit the leak from spreading into waterways, sewers, and basements. Soak up the spillage with dry materials such as dirt or combustible materials.',
        desc5: 'Cyclohexanone has a low flash point; therefore, fires can easily be ignited. In the case of a fire, all ignition sources should be removed, and alcohol-resistant foam, dry chemical or CO2 should be used to fight. PPE equipment should always be worn when handling cyclohexanone to protect the skin and eyes. Contaminated clothing should be removed immediately.',
        subHead3: 'Storage and distribution',
        desc6:'Cyclohexanone can be transported in drums and/or tank trucks. It should be stored in a cool, dry, well-ventilated area that is free from the risk of ignition. For transportation purposes, it falls into packing group III and hazard class III and it is an Irritant and is highly flammable. It has a specific gravity of 0.945 and a flashpoint of 46 °C (closed cup).'
      },
      used: {
        head1: 'Cyclohexanone uses',
        subHead1: 'Cyclohexanone uses in industry',
        desc1: 'Cyclohexanone has many industrial uses, primarily as an industrial chemical and chemical intermediate in the production of specific target molecules. In fact, the consumption of cyclohexanone is linked almost entirely to the nylon industry with derivatives oxidised to produce adipic acid and caprolactam, which are precursors for nylon 6. Up to 70% of the world’s caprolactam is produced via cyclohexanone.',
        desc1_2: 'Other cyclohexanone derivatives are used for the synthesis of pharmaceuticals, dyes, herbicides, pesticides, plasticisers, and rubber chemicals. Additional industry uses of cyclohexanone include as an adhesive, fuel, paint and coating additive and laboratory chemical.',
        desc1_3: 'Cyclohexanone is used as a solvent for lacquers, paints, resins, degreasers, spot removers, polymers, copolymers, waxes, crude rubber, cellulose acetate, the manufacturing of herbicides and anihistamines.',
        subHead2: 'Consumer uses',
        desc2: 'Cyclohexanone is found in various consumer products including in adhesives, paints, automotive, cleaning and furnishing care products, electronics, and photo chemicals.'
      },

    },
    category: {
      id: 11,
      name: "Ketones"
    },
  },
  {
    id: 62,
    name: "Di Acetone Alcohol",
    details: {
      whatIs: {
        head1: 'What is Di Acetone Alcohol?',
        sub1: 'Di acetone alcohol (also known as DAA, 4-hydroxy-4methyl-2-pentanone, and diacetone) is a clear, colourless liquid with a mild odour, that is soluble in water and miscible in oil. It has the formula C6H12O2.  Di acetone alcohol occurs naturally in the plant Sleepy Grass (achnatherum robustum) and is prepared synthetically for use in the chemical and industrial industries.',
        img: '/products-img/ketones-1.jpg',
      },
      produce: {
        head1: 'How is Di-Acetone Alcohol produced?',
        desc1: 'Di acetone alcohol can be prepared from acetone by the action of the alkali metal hydroxides, calcium hydroxide and barium hydroxide.',
      },
      distribute: {
        head1: 'Storage and distribution of Di-Acetone Alcohol',
        desc1: 'Di acetone alcohol is stored in mild steel and /or stainless steel tanks and/or drums and can be transported by bulk vessels or tank trucks.  It should be stored in an area that is well ventilated and that is away from sunlight, ignition sources, and other forms of heat.  For transportation purposes, it comes into packing group III, hazard class 3.3 and is an irritant. Diacetone alcohol has a specific gravity of 0.938 and a flashpoint of 59 °C (closed cup).',
      },
      used: {
        head1: 'What is Di-Acetone-Alcohol used for?',
        desc1: 'The main use for di acetone alcohol is as a solvent for water-based coatings with approximately 90% of all the DAA produced used in this way.  It can also be added to cellulose ester lacquers where it produces a brilliant gloss and hard film, with little odour.',
        desc2: 'Diacetone alcohol has many other uses including in the making of artificial silk, leather and imitation gold lead, in gravure printing inks, wood stains, wood preservatives and also in degreasers and metal cleaning compounds.',
        desc3:'DAA is also important as a chemical intermediate as it can be condensed to produce mesityl oxide (MO) and water.  This carbon-carbon double bond of MO is then selectively hydrogenated to produce MIBK (methyl isobutyl ketone) which is, itself, a valuable industrial solvent.'
      },

    },
    category: {
      id: 11,
      name: "Ketones"
    },
  },
  {
    id: 63,
    name: "Di Iso Butyl Ketone",
    details: {
      whatIs: {
        head1: 'What is Di Iso Butyl Ketone?',
        sub1: 'Di iso butyl ketone (also known as DIBK, 2,6-Dimethyl-4-heptanone, Isovalerone, and Isobutyl ketone) is a clear, colourless, stable liquid with a mild, sweet odour reminiscent of peppermint.  It is miscible with most organic compounds, is immiscible with water, and has the formula C9H18O.',
        sub2: 'It is a solvent with a high-boiling point and which is also slow-evaporating and low density.  These properties make it a very useful product across a range of industries.',
        img: '/products-img/ketones-2.jpg',
      },
      produce: {
        head1: 'How is Di Iso Butyl Ketone produced?',
        desc1: 'Di iso butyl ketone is produced by first dehydrogenating alcohol to acetone.  There is then a series of condensations and hydrogenations with di iso butyl ketone, acetone, and methyl isobutyl ketone co-produced in a mixed ketone process.  These products are then separated and purified and are ready for use.',
      },
      distribute: {
        head1: 'Storage and Distribution of Di Iso Butyl Ketone',
        desc1: 'Di iso butyl ketone can be stored in bulk tanks or drums and can be transported by tank truck.  It has a specific gravity of 0.807 and a flash point of 49 °C and is, therefore, highly flammable.  It should be stored in a cool, dry, well-ventilated area that is free from the risk of ignition.  For transportation purposes, DIBK is classified as packing group III and hazard class 3.',
      },
      used: {
        head1: 'What is Di Iso Butyl Ketone used for?',
        desc1: 'Di iso butyl ketone is a very useful chemical in industry.  It provides good solvency for many synthetic resins such as vinyl, acrylic, alkyds, polyester and epoxy.  It is also a solvent for nitrocellulose lacquers, high-solids coatings and stains, and paint stripper.  Equally, it is a solvent for adhesives, printing inks, and for cleaning and degreasing.',
        desc2: 'Di iso butyl ketone is also an extraction solvent for organic pollutants, and for the mining of minerals.  It is also used as an extraction solvent and recrystallisation aid in the pharmaceutical industry, and has a role as a chemical intermediate in the production of di isobutyl carbinol.'
      },

    },
    category: {
      id: 11,
      name: "Ketones"
    },
  },
  {
    id: 64,
    name: "Methyl Ethyl Ketone",
    details: {
      whatIs: {
        head1: 'What is Methyl Ethyl Ketone?',
        sub1: 'Methyl ethyl ketone (MEK) or butanone is a clear, volatile liquid with the formula C4H8O that is soluble in water and has a mild, acetone odour. The compound is biosynthesized by trees and is found in small quantities in foods such as some fruits and vegetables, chicken, beans, honey, and a wide variety of cheeses.',
        img: '/products-img/ketone-3.jpg',
      },
      technicalProps: {
        head: 'Technical Properties',
        props: [
          {
            desc: 'Technical properties of Methyl Ethyl Ketone:',
          },
          {
            desc: 'Cas Number: 78-93-3',
          },
          {
            desc: 'Molecular Formula: C4H8O or CH3COCH2CH3',
          },
          {
            desc: 'Synonyms: MEK, butanone, 2-butanone, butan-2- one, oxobutane, or methyl acetone',
          },
          {
            desc: 'Molecular Mass: 72.11 g/mol',
          },
          {
            desc: 'Exact Mass: 72.057514874 g/mol',
          },
          {
            desc: 'Flashpoint (closed cup): 16 °F / -9 °C',
          },
          {
            desc: 'Autoignition temperature: 961 °F / 516.11 °C',
          },
          {
            desc: 'Boiling Point: 175 °F / 79.4 °C at 760 mm Hg',
          },
          {
            desc: 'Melting Point: -123.3 °F / -86.28 °C',
          },
          {
            desc: 'Vapour Pressure: 77.5 mm Hg at 68 °F / 20 °C',
          },
          {
            desc:'Density: 0.806 at 68 °F'
          },
          {
            desc: 'Log P: 0.29'
          }
        ],
      },
      produce: {
        head1: 'How is Methyl Ethyl Ketone produced?',
        desc1: 'The main commercial production route for methyl ethyl ketone products is through the dehydrogenation of secondary butanol although newer technology involves the direct oxidation of nbutene in solution using palladium and cupric chlorides as catalysts.',
        desc2: 'The Chinese market is the main driver for the demand of MEK and is also where several new productions plants have been opened in the last 5 years. World production now stands at approximately 320,000 to 350,000 tonnes.',
      },
      distribute: {
        head1: 'How is Methyl Ethyl Ketone Stored and Distributed?',
        desc1: 'Methyl ethyl ketone is packed in drums. It should be stored in a cool, dry, well-ventilated area that is free from the risk of ignition as it is highly flammable. For transportation purposes, methyl ethyl ketone is classified as packing group II and a hazard class 3 with a flashpoint of -9° C (closed cup) and a specific gravity of 0.81. It is also an irritant.',
        subHead2: 'Health Hazards',
        desc4: 'The compound is rated a 1 for health under the NFPA 704 indicating that exposure should only cause a minor residual injury.',
        desc5: 'To avoid inhalation occurring, especially for regular uses, adequate ventilation should be ensured with local exhaust ventilation and enclosures. The direct inhalation of high levels of MEK may cause dizziness, nausea, headaches, irritation of the respiratory system and chest tightness. If the individual has difficulty breathing, they should be moved to air free of the vapours and be provided oxygen until medical assistance is available.',
        desc6:'Direct eye exposure can cause sore, stinging, red eyes with tearing and vapours can also irritate the eyes. Chemical safety goggles should therefore be used when contact with the eyes is possible. Repeated or prolonged skin contact should be avoided as this can cause irritation and dryness. Therefore, gloves, aprons and appropriate boots should be worn when repeated contact with MEK is possible.'
      },
      used: {
        head1: 'Methyl Ethyl Ketone Uses',
        subHead1: 'Solvent',
        desc1: 'The primary use of MEK is as a solvent with over 50% of demand coming from the paints and coating industry. The compound is used to enable a low viscosity solution that does not impact the film properties of the product.',
        desc1_2: 'These lacquers are used in the automotive, electrical goods and furniture industries. It is very effective as a surface coating solvent that it has become almost vital to the development of high solids coatings that reduce external emissions.',
        subHead2: 'Plastic Wielding Agent',
        desc2: 'MEK is also commonly used in scale model sets, where a strong, durable bond is required between different model parts. When applied to a part, the surface plastic is dissolved and can then be wielded together by hand. The methyl ethyl ketone then evaporates away, leaving no residue to impact the appearance of the model and strong bonds that will be difficult to break apart.',
        subHead3: 'Industry Uses',
        desc3: 'The compound can also be used in the manufacture of plastics and textiles, the manufacture of printing inks, adhesives, pesticides and in rubber-based industrial cements. It is used in the chemical industry as it is a precursor to methyl ethyl ketone peroxide which is itself used as a catalyst to initiate the polymerisation of polyester resins used in fibreglass reinforced products.'
      },

    },
    category: {
      id: 11,
      name: "Ketones"
    },
  },
  {
    id: 65,
    name: "Methyl Iso Butyl Ketone",
    details: {
      whatIs: {
        head1: 'What is Methyl Iso Butyl Ketone?',
        sub1: 'Methyl iso butyl ketone (also known as MIBK, methyl isobutyl ketone, and mono-iso butyl ketone) is a clear, colourless liquid with a characteristic ketone odour.  It has the chemical formula C6H12 and is slightly soluble in water and is miscible with most organic solvents.',
        img: '/products-img/ketones-4.jpg',
      },
      produce: {
        head1: 'How is Methyl Iso Butyl Ketone produced?',
        desc1: 'There are two main routes for MIBK production.  In the first, MIBK is produced from isopropanol in a mixed ketones process.  Di isobutyl ketone (DIBK) and acetone are co-products of this process.  In the second, MIBK is produced from acetone with hydrogen by a 3 step process of aldol condensation, dehydration, and hydrogenation.',
        desc2: 'At present, the global production capacity for MIBK stands at 370,000 tonnes per year.',
      },
      distribute: {
        head1: 'Storage and Distribution of Methyl Iso Butyl Ketone',
        desc1: 'MIBK is stored in drums and/or in bulk tanks and is transported by tank trucks.  It has a specific gravity of 0.802 and a low flash point of 16° C (closed cup) which makes it highly flammable.  It should, therefore, be stored in a cool, dry, well-ventilated area that is free from the risk of ignition.  For transportation purposes, MIBK is classified as packing group II, hazard class 3, and is an irritant.',
      },
      used: {
        head1: 'What is Methyl Iso Butyl Ketone used for?',
        desc1: 'MIBK is an excellent solvent and 64 % of the total global MIBK produced is consumed in this way.  It is primarily used as a solvent in cellulose-based and resin-based coatings and adhesives.  It is also an extraction solvent for antibiotics and other pharmaceuticals, and is employed in rare-metal extraction as a solvent for metal separation.',
        desc2: 'MIBK is also a chemical intermediate that is used to produce target molecules such as rubber antiozonants (used in the production of tyres) and acetylenic diol compounds.',
      },

    },
    category: {
      id: 11,
      name: "Ketones"
    },
  },
  {
    id: 66,
    name: "Di Methoxy Propanol (DPM)",
    details: {
      whatIs: {
        head1: 'What is Di Methoxy Propanol (DPM)?',
        sub1: 'Dipropylene glycol monomethyl ether (also known as Methoxy Propoxy Propanol, Oxybispropanol, dipropylene glycol methyl ether, DPM, and Dowanol DPM) is a propylene oxide-based/P series glycol ether and has the formula C7H16O3.  It is a clear, colourless, viscous liquid which has a slight ether odour.',
        sub2: 'Dowanol DPM is completely soluble in water and is miscible with a number of organic solvents, for example ethanol, carbon tetrachloride, benzene, petroleum ether and monochlorobenzene.  It is also practically non- toxic and hygroscopic, and thus lends itself well to commercial and industrial use.',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Dipropylene glycol monomethyl ether is produced by the reaction of propylene oxide with methanol using a catalyst.',
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Dipropylene glycol monomethyl ether is stored in mild steel and /or stainless steel tanks and/or drums and can be transported by bulk vessels or tank trucks.  It should be stored away from heat and sources of ignition in a cool and well-ventilated area.  Dowanol DPM has a specific gravity of 0.95 and a flashpoint of 75oC (closed cup) and is not regulated for any form of transport.',
      },
      used: {
        head1: 'What is Dipropylene Glycol Methyl Ether Used For?',
        desc1: 'Dipropylene glycol monomethyl ether is a very useful industrial and commercial chemical.  One of its main commercial uses is as a solvent for paints, varnishes, inks, strippers, and degreasers.  It is also utilised as a coalescing agent for water-based paints and inks where it promotes polymer fusing during the drying process.  It is also a component of wood and coil coatings, as well as coatings used in the automotive industry, industrial maintainence, and metal finishing.  It is also a component of hydraulic fluids and industrial degreasers and is a chemical additive in the oil production and drilling industry.',
        desc2: 'Dowanol DPM is a very useful chemical building block in the manufacture of many products. This is due to its reaction with acids, forming esters and oxidising agents which produce aldehydes, carboxylic acids and alkali metals therefore creating alcoholates and acetals.',
        desc3: 'It is this flexibility that supports the use of DPM across a range of industries and therefore makes it a component of many household items that people use every day.  It is found in ceiling and wall paints and in many common cleaners including glass and surface cleaners, paint-brush cleaners, all-purpose cleaners, carpet cleaners and disinfectant cleaners.  It is also found in cosmetics where it provides emollient properties and product stabilisation as well as floor and aluminium polish, leather and textile dyes, rust removers and pesticides where it acts as a stabiliser.',
        desc4:'Dipropylene glycol methyl ether is also a chemical intermediate in the production of Dipropylene glycol monomethyl ether acetate or DPMA.'
      },

    },
    category: {
      id: 12,
      name: "Propylene Glycol Ethers"
    },
  },
  {
    id: 67,
    name: "Ethoxy Propanol",
    details: {
      whatIs: {
        head1: 'What is Ethoxy Propanol?',
        sub1: 'Ethoxy Propanol (also known as propylene glycol ether;  Arcosolv PE; ethyl proxitol; and propylene glycol monoethyl ether) is a clear liquid that has a characteristic ether-like odour.  It has the formula C5H12O2 and it is miscible with water, is hygroscopic, and it also provides good solvency for a wide variety of substances, including resins, inks, and adhesives.',
        img: '/products-img/propanols-1.jpg',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Ethoxy Propanol is a member of the Propylene Glycol Ether family.  These Propylene glycol ethers are formed from the base catalysed reaction of propylene oxide with alcohols.',
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Ethoxy Propanol has a specific gravity of 0.895 and a flash point of 40.5oC (Closed cup).  This low flash point means Ethoxy Propanol is regarded as Flammable and is classified as Dangerous goods class 3 and in pack group III.',
        desc2: 'It is transported by marine, rail, and road, primarily in bulk, but can also be transported as a packed product.  When being transported it should be in carbon steel or stainless steel vessels which should be tightly closed and properly vented.  The vessels should be stored in a cool, dry, and well-ventilated area that is away from all ignition sources.'
      },
      used: {
        head1: 'What is Ethoxy Propanol used for?',
        desc1: 'Ethoxy Propanol is used in a range of industrial, professional, and consumer applications as it provides good solvency  due to its’ bi-functional nature.  It is miscible with both polar and non-polar substances and is an effective solvent for a wide variety of resins, which include epoxies, acrylic, alkyds, polyesters, nitrocellulose, and polyurethanes.  It also provides low toxicity and this is another property which is valued by the users.',
        desc2: 'Ethoxy Propanol  is employed mainly in the surface coating and printing industries as it can regulate the flow, levelling, and coalescence of both surface coatings (including water-based paints), and of flexographic printing inks.  It is also utilised as a chemical intermediate in the production of agro-chemicals and in the production of de-icing/anti-icing formulations.',
        desc3:'Ethoxy Propanol is also utilised in the cleaning industry where it provides cleaning formulations with surface tension reduction, a fast evaporation rate, and low toxicity.',
        desc4: 'New markets may open up for Ethoxy  Propanol as it can provide a solvent power, viscosity, and volatility that is similar to the ethylene oxide-based glycol ethers which are now facing some pressure from air and workplace regulations around the world.  Ethoxy propanol can provide higher workplace exposure limits and, at present, is not listed as a HAP (Hazardous Air Pollutant) by the US Federal Government Clean Air Act.'
      },

    },
    category: {
      id: 12,
      name: "Propylene Glycol Ethers"
    },
  },
  {
    id: 68,
    name: "Methoxy Propanol (PM)",
    details: {
      whatIs: {
        head1: 'What is Methoxy Propanol (PM)?',
        sub1: 'Methoxy propanol (also known as propylene glycol monomethyl ether, 1-methoxy-2-propanol, PM, and PGME), is a colourless liquid that is soluble in water and is highly flammable.  It is a methoxy alcohol derivative and has a formula of C4H10O2.',
        img: '/products-img/propanols-1.jpg',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Methoxy propanol is produced by the reaction of 1,2-epoxy propane and methanol in the presence of a catalyst, and this is then followed by distillation.',
        desc2: 'The worldwide annual production of methoxy propanol is approximately 100,000 to 500,000 tonnes.'
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Methoxy propanol has a specific gravity of 0.924 and a flash point of 33° C and is therefore highly flammable so should be stored in a cool, dry and well-ventilated area that is free from sources of ignition.  For transport purposes, methoxy propanol is classified as packing group III and hazard class 3 and is an irritant.',
      },
      used: {
        head1: 'What is Methoxy Propanol (PM) used for?',
        desc1: 'Methoxy propanol is predominately used in the manufacture of propylene glycol methyl ether acetate (otherwise known as PMA) and is also used in industrial and commercial products including paints, varnishes, inks, synthetic resin and rubber adhesives, and automotive and oven cleaners.  It is also used as a cleaning agent in the LCD and electronics industry.',
      },

    },
    category: {
      id: 12,
      name: "Propylene Glycol Ethers"
    },
  },
  {
    id: 69,
    name: "Methoxy Propyl Acetate (PMA)",
    details: {
      whatIs: {
        head1: 'What is Methoxy Propyl Acetate (PMA)?',
        sub1: 'Methoxy propyl acetate (also known as PMA, 1-methoxy-2-acetoxypropane, or propylene glycol monomethyl ether-1,2-acetate) is a clear liquid that has limited miscibility with water.  It is a medium volatility solvent with a mild odour and has the formula C6H12O3.',
        img: '/products-img/propanols-3.jpg',
      },
      produce: {
        head1: 'How is it produced?',
        desc1: 'Methoxy propyl acetate is produced when ethylene, or propylene, oxide is reacted with alcohol.  This forms glycol monoethers which are then esterified with acetic acid to produce PMA.',
        desc2: 'The estimated global production of methoxy propyl acetate is between 300,000 and 500,000 tonnes annually.'
      },
      distribute: {
        head1: 'How is it stored and distributed?',
        desc1: 'Methoxy propyl acetate is generally distributed in 200 kg drums and should be stored in a cool, dry, and well-ventilated area.  For transport purposes it is classified as packing group III, hazard class 3.  It has a specific gravity of 0.965 and a flash point of 42° C (closed cup).',
      },
      used: {
        head1: 'What is Methoxy Propanol (PM) used for?',
        desc1: 'There are several applications for methoxy propyl acetate.  The first is as a solvent as PMA has good solvent power for many resins and dyes.  It is used in dyes for furniture polish or wood stains, and in dye solutions and pastes for printing.  It is also used in processes that colour leather and textiles, and in ball-point pen pastes.',
        desc2: 'PMA can also be used as a coalescent in coatings, and is particularly suitable for coatings containing polyisocyanates.  It can also be used as a binder for core sands in foundries and is also utilised as a cleaning agent in the electronics industry.'
      },

    },
    category: {
      id: 12,
      name: "Propylene Glycol Ethers"
    },
  },
  {
    id: 70,
    name: "Sodum Hydoxide Flakes",
    details: {
      whatIs: {
        head1: 'Sodum Hydoxide Flakes',
        sub1: 'Sodium hydroxide is a popular strong base used in industry. Sodium hydroxide is used in the manufacture of sodium salts and detergents, pH regulation, and organic synthesis. In bulk, it is most often handled as an aqueous solution,[27] since solutions are cheaper and easier to handle.',
        sub2: 'Sodium hydroxide is used in many scenarios where it is desirable to increase the alkalinity of a mixture, or to neutralize acids.',
        sub_desc1: 'For example, in the petroleum industry, sodium hydroxide is used as an additive in drilling mud to increase alkalinity in bentonite mud systems, to increase the mud viscosity, and to neutralize any acid gas (such as hydrogen sulfide and carbon dioxide) which may be encountered in the geological formation as drilling progresses.',
        sub_desc2: 'Another use is in Salt spray testing where pH needs to be regulated. Sodium hydroxide is used with hydrochloric acid to balance pH. The resultant salt, NaCl, is the corrosive agent used in the standard neutral pH salt spray test.',
        sub_desc3: 'Poor quality crude oil can be treated with sodium hydroxide to remove sulfurous impurities in a process known as caustic washing. As above, sodium hydroxide reacts with weak acids such as hydrogen sulfide and mercaptans to yield non-volatile sodium salts, which can be removed. The waste which is formed is toxic and difficult to deal with, and the process is banned in many countries because of this. In 2006, Trafigura used the process and then dumped the waste in Ivory Coast.'
      },
      produce: {
        head1: 'Other common uses of sodium hydroxide include:',
        desc1: '•\tfor making soaps and detergents. Sodium hydroxide is used for hard bar soap, while potassium hydroxide is used for liquid soaps. Sodium hydroxide is used more often than potassium hydroxide because it is cheaper and a smaller quantity is needed.',
        desc2:'•\tas drain cleaners that contain sodium hydroxide convert fats and grease that can clog pipes into soap, which dissolves in water (see cleaning agent).',
        desc3: '•\tfor making artificial textile fibres (such as rayon).',
        desc4: '•\tfor making artificial textile fibres (such as rayon).',
        desc5: '•\tin purifying bauxite ore from which aluminium metal is extracted. This is known as Bayer process (see dissolving amphoteric metals and compounds).',
        desc6: '•\tin de-greasing metals, oil refining, and making dyes and bleaches.',
        desc7: '•\tin water treatment plants for pH regulation.',
        desc8: '•\tto treat bagels and pretzel dough, giving the distinctive shiny finish.'
      },
      distribute: {
        head1: 'Sodium Hydroxide Solution 50%',
        desc1: 'Sodium hydroxide is a popular strong base used in industry. Sodium hydroxide is used in the manufacture of sodium salts and detergents, pH regulation, and organic synthesis. In bulk, it is most often handled as an aqueous solution, since solutions are cheaper and easier to handle.',
        desc2:'Sodium hydroxide is used in many scenarios where it is desirable to increase the alkalinity of a mixture, or to neutralize acids.',
        desc3: 'For example, in the petroleum industry, sodium hydroxide is used as an additive in drilling mud to increase alkalinity in bentonite mud systems, to increase the mud viscosity, and to neutralize any acid gas (such as hydrogen sulfide and carbon dioxide) which may be encountered in the geological formation as drilling progresses.',
        desc4:'Another use is in Salt spray testing where pH needs to be regulated. Sodium hydroxide is used with hydrochloric acid to balance pH. The resultant salt, NaCl, is the corrosive agent used in the standard neutral pH salt spray test.',
        desc5:'Poor quality crude oil can be treated with sodium hydroxide to remove sulfurous impurities in a process known as caustic washing. As above, sodium hydroxide reacts with weak acids such as hydrogen sulfide and mercaptans to yield non-volatile sodium salts, which can be removed. The waste which is formed is toxic and difficult to deal with, and the process is banned in many countries because of this. In 2006, Trafigura used the process and then dumped the waste in Ivory Coast.'
      },
      used: {
        head1: 'Other common uses of sodium hydroxide include:',
        desc1: '•\tfor making soaps and detergents. Sodium hydroxide is used for hard bar soap, while potassium hydroxide is used for liquid soaps. Sodium hydroxide is used more often than potassium hydroxide because it is cheaper and a smaller quantity is needed.',
        desc2: '•\tas drain cleaners that contain sodium hydroxide convert fats and grease that can clog pipes into soap, which dissolves in water ',
        desc3: '•\tfor making artificial textile fibres (such as rayon).',
        desc4:'•\tin the manufacture of paper. Around 56% of sodium hydroxide produced is used by industry, 25% of which is used in the paper industry (see chemical pulping).',
        desc5:'•\tin purifying bauxite ore from which aluminium metal is extracted. This is known as Bayer process (see dissolving amphoteric metals and compounds).',
        desc6: '•\tin de-greasing metals, oil refining, and making dyes and bleaches.',
        desc7:'•\tin water treatment plants for pH regulation.',
        desc8: '•\tto treat bagels and pretzel dough, giving the distinctive shiny finish.'
      },

    },
    category: {
      id: 13,
      name: "Chlor Alkali Products"
    },
  },
  {
    id: 71,
    name: "Sodium Hydroxide Solution 50%",
    details: {
      whatIs: {
        head1: 'Sodium Hydroxide Solution 50%',
        sub1: 'Sodium hydroxide is a popular strong base used in industry. Sodium hydroxide is used in the manufacture of sodium salts and detergents, pH regulation, and organic synthesis. In bulk, it is most often handled as an aqueous solution,[27] since solutions are cheaper and easier to handle.',
        sub2: 'Sodium hydroxide is used in many scenarios where it is desirable to increase the alkalinity of a mixture, or to neutralize acids.',
        sub_desc1: 'For example, in the petroleum industry, sodium hydroxide is used as an additive in drilling mud to increase alkalinity in bentonite mud systems, to increase the mud viscosity, and to neutralize any acid gas (such as hydrogen sulfide and carbon dioxide) which may be encountered in the geological formation as drilling progresses.',
        sub_desc2: 'Another use is in Salt spray testing where pH needs to be regulated. Sodium hydroxide is used with hydrochloric acid to balance pH. The resultant salt, NaCl, is the corrosive agent used in the standard neutral pH salt spray test.',
        sub_desc3: 'Poor quality crude oil can be treated with sodium hydroxide to remove sulfurous impurities in a process known as caustic washing. As above, sodium hydroxide reacts with weak acids such as hydrogen sulfide and mercaptans to yield non-volatile sodium salts, which can be removed. The waste which is formed is toxic and difficult to deal with, and the process is banned in many countries because of this. In 2006, Trafigura used the process and then dumped the waste in Ivory Coast.'
      },
      produce: {
        head1: 'Other common uses of sodium hydroxide include:',
        desc1: '•\tfor making soaps and detergents. Sodium hydroxide is used for hard bar soap, while potassium hydroxide is used for liquid soaps.[30][31] Sodium hydroxide is used more often than potassium hydroxide because it is cheaper and a smaller quantity is needed.',
        desc2:'•\tas drain cleaners that contain sodium hydroxide convert fats and grease that can clog pipes into soap, which dissolves in water (see cleaning agent).',
        desc3: '•\tfor making artificial textile fibres (such as rayon).',
        desc4: '•\tfor making artificial textile fibres (such as rayon).',
        desc5: '•\tin purifying bauxite ore from which aluminium metal is extracted. This is known as Bayer process (see dissolving amphoteric metals and compounds).',
        desc6: '•\tin de-greasing metals, oil refining, and making dyes and bleaches.',
        desc7: '•\tin water treatment plants for pH regulation.',
        desc8: '•\tto treat bagels and pretzel dough, giving the distinctive shiny finish.'
      },
    },
    category: {
      id: 13,
      name: "Chlor Alkali Products"
    },
  },
  {
    id: 72,
    name: "Calcium Chloride",
    details: {
      whatIs: {
        head1: 'Calcium Chloride',
        sub1: 'Calcium chloride is an inorganic compound, a salt with the chemical formula CaCl2. It is a white crystalline solid at room temperature, and it is highly soluble in water. It can be created by neutralising hydrochloric acid with calcium hydroxide.',
        sub_desc1: 'By depressing the freezing point of water, calcium chloride is used to prevent ice formation and is used to de-ice. This application consumes the greatest amount of calcium chloride. Calcium chloride is relatively harmless to plants and soil. As a deicing agent, it is much more effective at lower  than sodium chloride. When distributed for this use, it usually takes the form of small,white spheres a few millimeters in diameter, called prills. Solutions of calcium chloride can prevent freezing at temperatures as low as −52 °C (−62 °F), making it ideal for filling agricultural implement tires as a liquid ballast, aiding traction in cold climates.',
        sub_desc2: 'It is also used in domestic and industrial chemical air dehumidifiers.\n',
        sub_desc3: 'The second largest application of calcium chloride exploits its hygroscopic nature and the tackiness of its hydrates; calcium chloride is highly hygroscopic and its hydration is an exothermic process. A concentrated solution keeps a liquid layer on the surface of dirt roads, which suppresses the formation of dust. It keeps the finer dust particles on the road, providing a cushioning layer. If these are allowed to blow away, the large aggregate begins to shift around and the road breaks down. Using calcium chloride reduces the need for grading by as much as 50% and the need for fill-in materials as much as 80%.'
      },
      produce: {
        desc1: 'The average intake of calcium chloride as food additives has been estimated to be 160–345 mg/day.Calcium chloride is permitted as a food additive in the European Union for use as a sequestrant and firming agent with the E number E509. It is considered as generally recognized as safe (GRAS) by the U.S. Food and Drug Administration. Its use in organic crop production is generally prohibited under the US National Organic Program.',
        desc2:'As a firming agent, calcium chloride is used in canned vegetables, in firming soybean curds into tofu and in producing a caviar substitute from vegetable or fruit juices. It is commonly used as an electrolyte in sports drinks and other beverages, including bottled water. The extremely salty taste of calcium chloride is used to flavor pickles without increasing the food\'s sodium content. Calcium chloride\'s freezing-point depression properties are used to slow the freezing of the caramel in caramel-filled chocolate bars. Also, it is frequently added to sliced apples to maintain texture.',
        desc3: 'In brewing beer, calcium chloride is sometimes used to correct mineral deficiencies in the brewing water. It affects flavor and chemical reactions during the brewing process, and can also affect yeast function during fermentation.',
        desc4: 'In cheesemaking, calcium chloride is sometimes added to processed (pasteurized/homogenized) milk to restore the natural balance between calcium and protein in casein. It is added before the coagulant.',
        desc5: 'Calcium chloride is used to prevent cork spot and bitter pit on apples by spraying on the tree during the late growing season.',
        desc6: 'Calcium chloride is used in concrete mixes to accelerate the initial setting, but chloride ions lead to corrosion of steel rebar, so it should not be used in reinforced concrete.The anhydrous form of calcium chloride may also be used for this purpose and can provide a measure of the moisture in concrete.',
        desc7: 'Calcium chloride is included as an additive in plastics and in fire extinguishers, in blast furnaces as an additive to control scaffolding (clumping and adhesion of materials that prevent the furnace charge from descending), and in fabric softener as a thinner.',
        desc8: 'The exothermic dissolution of calcium chloride is used in self-heating cans and heating pads.'
      },
      distribute: {
        desc1: 'In the oil industry, calcium chloride is used to increase the density of solids-free brines. It is also used to provide inhibition of swelling clays in the water phase of invert emulsion drilling fluids.',
        desc2:'CaCl2 acts as flux material, decreasing the melting point, in the Davy process for the industrial production of sodium metal through the electrolysis of molten NaCl.',
        desc3: 'Calcium chloride is also used in the production of activated charcoal.',
        desc4:'Calcium chloride can be used to precipitate fluoride ions from water as insoluble CaF2.',
        desc5:'Calcium chloride is also an ingredient used in ceramic slipware. It suspends clay particles so that they float within the solution, making it easier to use in a variety of slipcasting techniques.'
      },
    },
    category: {
      id: 13,
      name: "Chlor Alkali Products"
    },
  },
  {
    id: 73,
    name: "Sodium Hypochlorite",
    details: {
      whatIs: {
        head1: 'What is Sodium hypochlorite',
        sub1: 'Sodium hypochlorite, commonly known in a dilute solution as (chlorine) bleach, is an inorganic chemical compound with the formula NaOCl (or NaClO),[3] consisting of a sodium cation (Na+) and a hypochloriteanion (OCl− or ClO−). It may also be viewed as the sodium salt of hypochlorous acid. The anhydrous compound is unstable and may decompose explosively. It can be crystallized as a pentahydrateNaOCl·5H2O, a pale greenish-yellow solid which is not explosive and is stable if kept refrigerated',
        sub2: 'Sodium hypochlorite is most often encountered as a pale greenish-yellow dilute solution referred to as liquid bleach, which is a household chemical widely used (since the 18th century) as a disinfectant or a bleaching agent. In solution, the compound is unstable and easily decomposes,  liberating chlorine, which is the active principle of such products. Sodium hypochlorite is the oldest and still most important chlorine-based bleach',
      },
      produce: {
        subHead1: 'Bleaching',
        desc1: 'Household bleach is, in general, a solution containing 3–8% sodium hypochlorite, by weight, and 0.01–0.05% sodium hydroxide; the sodium hydroxide is used to slow the decomposition of sodium hypochlorite into sodium chloride and sodium chlorate',
        subHead2: 'Cleaning',
        desc11:'Sodium hypochlorite has destaining properties.[43] Among other applications, it can be used to remove mold stains, dental stains caused by fluorosis,[44]and stains on crockery, especially those caused by the tannins in tea. It has also been used in laundry detergents and as a surface cleaner. It is also used in sodium hypochlorite washes.',
        desc12:'Its bleaching, cleaning, deodorizing and caustic effects are due to oxidation and hydrolysis (saponification). Organic dirt exposed to hypochlorite becomes water-soluble and non-volatile, which reduces its odor and facilitates its removal.'
      },
      distribute: {
        subHead1: 'Disinfection',
        desc1: 'Sodium hypochlorite in solution exhibits broad spectrum anti-microbial activity and is widely used in healthcare facilities in a variety of settings.[45] It is usually diluted in water depending on its intended use. "Strong chlorine solution" is a 0.5% solution of hypochlorite (containing approximately 5000 ppm free chlorine) used for disinfecting areas contaminated with body fluids, including large blood spills (the area is first cleaned with detergent before being disinfected).[45][46] It may be made by diluting household bleach as appropriate (normally 1 part bleach to 9 parts water).[47] Such solutions have been demonstrated to inactivate both C. difficile[45] and HPV.[48] "Weak chlorine solution" is a 0.05% solution of hypochlorite used for washing hands, but is normally prepared with calcium hypochlorite granules.',
        desc2: '"Dakin\'s Solution" is a disinfectant solution containing low concentration of sodium hypochlorite and some boric acid or sodium bicarbonate to stabilize the pH. It has been found to be effective with NaOCl concentrations as low as 0.025%.',
        desc3:'US government regulations allow food processing equipment and food contact surfaces to be sanitized with solutions containing bleach, provided that the solution is allowed to drain adequately before contact with food, and that the solutions do not exceed 200 parts per million (ppm) available chlorine (for example, one tablespoon of typical household bleach containing 5.25% sodium hypochlorite, per gallon of water). If higher concentrations are used, the surface must be rinsed with potable water after sanitizing.',
        desc3_1: 'A similar concentration of bleach in warm water is used to sanitize surfaces prior to brewing of beer or wine. Surfaces must be rinsed with sterilized (boiled) water to avoid imparting flavors to the brew; the chlorinated byproducts of sanitizing surfaces are also harmful. The mode of disinfectant action of sodium hypochlorite is similar to that of hypochlorous acid.',
        desc4: 'Solutions containing more than 500 ppm available chlorine are corrosive to some metals, alloys and many thermoplastics (such as acetal resin) and need to be thoroughly removed afterwards, so the bleach disinfection is sometimes followed by an ethanol disinfection. Liquids containing sodium hypochlorite as the main active component are also used for household cleaning and disinfection, for example toilet cleaners.[51] Some cleaners are formulated to be viscous so as not to drain quickly from vertical surfaces, such as the inside of a toilet bowl.',
        desc5: 'The undissociated (nonionized) hypochlorous acid is believed to react with and inactivate bacterial and viral enzymes.',
        subHead2_desc1:'Neutrophils of the human immune system produce small amounts of hypochlorite inside phagosomes, which digest bacteria and viruses.',
        subHead3: 'Deodorizing',
        desc6: 'Sodium hypochlorite has deodorizing properties, which go hand in hand with its cleaning properties.'
      },
      used: {
        subHead1: 'Waste water treatment',
        desc1: 'Sodium hypochlorite solutions have been used to treat dilute cyanide waste water, such as electroplating wastes. In batch treatment operations, sodium hypochlorite has been used to treat more concentrated cyanide wastes, such as silver cyanide plating solutions. Toxic cyanide is oxidized to cyanate(OCN−) that is not toxic, idealized as follows:',
        desc2: 'CN− + OCl− → OCN− + Cl−',
        desc2_2: 'Sodium hypochlorite is commonly used as a biocide in industrial applications to control slime and bacteria formation in water systems used at power plants, pulp and paper mills, etc., in solutions typically of 10–15% by weight.',
        desc2_3:'Dipropylene glycol methyl ether is also a chemical intermediate in the production of Dipropylene glycol monomethyl ether acetate or DPMA.',
        subHead3: 'Endodontics',
        desc3: 'Sodium hypochlorite is the medicament of choice due to its efficacy against pathogenic organisms and pulp digestion in endodontic therapy. Its concentration for use varies from 0.5% to 5.25%. At low concentrations it dissolves mainly necrotic tissue; at higher concentrations it also dissolves vital tissue and additional bacterial species. One study has shown that Enterococcus faecalis was still present in the dentin after 40 minutes of exposure of 1.3% and 2.5% sodium hypochlorite, whereas 40 minutes at a concentration of 5.25% was effective in E. faecalis removal.[52] In addition to higher concentrations of sodium hypochlorite, longer time exposure and warming the solution (60 °C) also increases its effectiveness in removing soft tissue and bacteria within the root canal chamber.[52] 2% is a common concentration as there is less risk of an iatrogenic hypochlorite incident.[53] A hypochlorite incident is an immediate reaction of severe pain, followed by edema, haematoma, and ecchymosis as a consequence of the solution escaping the confines of the tooth and entering the periapical space. This may be caused by binding or excessive pressure on the irrigant syringe, or it may occur if the tooth has an unusually large apical foramen.',
        subHead4: 'Nerve agent neutralization',
        desc4: 'At the various nerve agent (chemical warfare nerve gas) destruction facilities throughout the United States, 0.5-2.5% sodium hypochlorite is used to remove all traces of nerve agent or blister agent from Personal Protection Equipment after an entry is made by personnel into toxic areas. 0.5-2.5% sodium hypochlorite is also used to neutralize any accidental releases of the nerve agent in the toxic areas. Lesser concentrations of sodium hypochlorite are used in a similar fashion in the Pollution Abatement System to ensure that no nerve agent is released into the furnace flue gas.',
        subHead5: 'Reduction of skin damage',
        desc6: 'Dilute bleach baths have been used for decades to treat moderate to severe eczema in humans,[57][58]. Still, it has not been clear why they work. One of the reasons why bleach helps is that eczema can frequently result in secondary infections, especially from bacteria like Staphylococcus aureus, which makes managing it difficult. Staphylococcus aureus infection is related to the pathogenesis of eczema and AD. Bleach baths are one method for lowering the risk of staph infections in people with eczema. The antibacterial and anti-inflammatory properties of sodium hypochlorite contribute to the reduction of harmful bacteria on the skin and the reduction of inflammation, respectively.[59] According to work published by researchers at the Stanford University School of Medicine in November 2013, a very dilute (0.005%) solution of sodium hypochlorite in water was successful in treating skin damage with an inflammatory component caused by radiation therapy, excess sun exposure or aging in laboratory mice. Mice with radiation dermatitis given daily 30-minute baths in bleach solution experienced less severe skin damage and better healing and hair regrowth than animals bathed in water. A moleculecalled nuclear factor kappa-light-chain-enhancer of activated B cells (NF-κB) is known to play a critical role in inflammation, aging, and response to radiation. The researchers found that if NF-κB activity was blocked in elderly mice by bathing them in bleach solution, the animals\' skin began to look younger, going from old and fragile to thicker, with increased cell proliferation. The effect diminished after the baths were stopped, indicating that regular exposure was necessary to maintain skin thickness.'
      },

    },
    category: {
      id: 13,
      name: "Chlor Alkali Products"
    },
  },
  {
    id: 74,
    name: "Calcium Hypochlorite",
    details: {
      whatIs: {
        head1: 'What is Calcium hypochlorite?',
        sub1: 'Calcium hypochlorite is an inorganic compound with formula Ca(ClO)2. It is a white solid, although commercial samples appear yellow. It strongly smells of chlorine, owing to its slow decomposition in moist air. This compound is relatively stable as a solid and solution and has greater available chlorine than sodium hypochlorite.[1] "Pure" samples have 99.2% active chlorine. Given common industrial purity, an active chlorine content of 65-70% is typical.[2] It is the main active ingredient of commercial products called bleaching powder,[a] used for water treatment and as a bleaching agent.',
      },
      produce: {
        subHead1: 'Sanitation',
        desc1: 'Calcium hypochlorite is commonly used to sanitize public swimming pools and disinfect drinking water. Generally the commercial substances are sold with a purity of 65% to 73% with other chemicals present, such as calcium chloride and calcium carbonate, resulting from the manufacturing process. In solution, calcium hypochlorite could be used as a general purpose sanitizer, but due to calcium residue (making the water harder), sodium hypochlorite (bleach) is usually preferred.',
        subHead2: 'Organic chemistry',
        desc11:'Calcium hypochlorite is a general oxidizing agent and therefore finds some use in organic chemistry. For instance the compound is used to cleave glycols, α-hydroxy carboxylic acids and keto acids to yield fragmented aldehydes or carboxylic acids. Calcium hypochlorite can also be used in the haloform reactionto manufacture chloroform. Calcium hypochlorite can be used to oxidize thiol and sulfide byproducts in organic synthesis and thereby reduce their odour and make them safe to dispose of. The reagent used in organic chemistry is similar to the sanitizer at ~70% purity.'
      },
    },
    category: {
      id: 13,
      name: "Chlor Alkali Products"
    },
  },
]
export const productsData2:any = [
  {
    id: 1,
    name: 'Acrylates',
    products: [
      {
        id: 1,
        name: '2-Ethyl Hexyl Acrylate',
        details: {
          whatIs: {
            head1: 'What is 2-Ethyl Hexyl Acrylate?',
            sub1: '2-ethyl hexyl acrylate is an acrylate monomor with a molecular formula of CH2=CHCOOC8H17.  It is a clear liquid which is completely soluble in alcohols and ethers but not soluble in water.  2 ethylhexyl acrylate is not a very flammable liquid with a flashpoint between 75 – 90° C and has a characteristic acrylic odour.',
            sub2: 'It is easily miscible with other organic solvents and is readily polymerized with monomer molecules to create polymer chains. 2-ethyl acrylate will react with oxidising agents such as alkalis and will polymerise with the application of heat. Polymerisation is inhibited with methyl ether or hydroquinone.',
            img: '/products-img/ethyi-hexyl-acrylate.png',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: '2-ethyl acrylate is commonly produced by combining 2-ethyl hexanol and an acrylic acid in a dehydraisation process that acts as the catalyst (sulphuric acid). Using solid catalysts can help reduce the drawbacks of this process such as corrosion and spillage of the spent acid.',
          },
          distribute: {
            head1: 'How is stored and distributed?',
            desc1: 'A solvent trader would have a bulk petrochemical storage facility to maintain the product which is normally in a cool, dry and well-ventilated facility away from oxidising agents.  2-ethyl acrylate should be kept out of direct sunlight, heat and open flames.  Suitable storage includes drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
            desc2: 'This chemical would normally be distributed in bulk vessels or tank trucks throughout regions such as the UK, Europe, Africa and America. For transportation purposes, 2-ethyl acrylate is classed as a flammable liquid with a fire hazard rating of 2 and is a packing group 2.',
          },
          used: {
            head1: 'What is 2-Ethyl Hexyl Acrylate used for?',
            desc1: '2-ethyl acrylate is used in the chemical manufacturing industry for the production of homopolymers and co-polymers which have further uses in creating aqueous polymers.  It is used as a co-polymer for caulks, paint coatings, pressure sensitive adhesives, leather finishing, textiles and paper coatings.  Due to its low volatile nature and reactivity of double bonds, it is the perfect choice for plasticising many applications.  The primary end user market of this product is the textiles, leather, adhesive, paints and coatings industry.',
          },

        },
      },
      {
        id: 2,
        name: '2-Ethyl Hexyl Acrylate',
        details: {
          whatIs: {
            head1: 'What is 2-Ethyl Hexyl Acrylate?',
            sub1: '2-ethyl hexyl acrylate is an acrylate monomor with a molecular formula of CH2=CHCOOC8H17.  It is a clear liquid which is completely soluble in alcohols and ethers but not soluble in water.  2 ethylhexyl acrylate is not a very flammable liquid with a flashpoint between 75 – 90° C and has a characteristic acrylic odour.',
            sub2: 'It is easily miscible with other organic solvents and is readily polymerized with monomer molecules to create polymer chains. 2-ethyl acrylate will react with oxidising agents such as alkalis and will polymerise with the application of heat. Polymerisation is inhibited with methyl ether or hydroquinone.',
            img: '/products-img/ethyi-hexyl-acrylate.png',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: '2-ethyl acrylate is commonly produced by combining 2-ethyl hexanol and an acrylic acid in a dehydraisation process that acts as the catalyst (sulphuric acid). Using solid catalysts can help reduce the drawbacks of this process such as corrosion and spillage of the spent acid.',
          },
          distribute: {
            head1: 'How is stored and distributed?',
            desc1: 'A solvent trader would have a bulk petrochemical storage facility to maintain the product which is normally in a cool, dry and well-ventilated facility away from oxidising agents.  2-ethyl acrylate should be kept out of direct sunlight, heat and open flames.  Suitable storage includes drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
            desc2: 'This chemical would normally be distributed in bulk vessels or tank trucks throughout regions such as the UK, Europe, Africa and America. For transportation purposes, 2-ethyl acrylate is classed as a flammable liquid with a fire hazard rating of 2 and is a packing group 2.',
          },
          used: {
            head1: 'What is 2-Ethyl Hexyl Acrylate used for?',
            desc1: '2-ethyl acrylate is used in the chemical manufacturing industry for the production of homopolymers and co-polymers which have further uses in creating aqueous polymers.  It is used as a co-polymer for caulks, paint coatings, pressure sensitive adhesives, leather finishing, textiles and paper coatings.  Due to its low volatile nature and reactivity of double bonds, it is the perfect choice for plasticising many applications.  The primary end user market of this product is the textiles, leather, adhesive, paints and coatings industry.',
          },

        },
      },
      {
        id: 3,
        name: 'Acrylic Acid',
        details: {
          whatIs: {
            head1: 'What is Acrylic Acid?',
            sub1: 'Acrylic acid (also known as 2-proenoic acid, vinyl formic acid, and propene acid) is a versatile, clear, colourless, corrosive, and flammable liquid that has a pungent odour. It has the formula C3H4O2 and is miscible with water, alcohol, ether, benzene, chloroform, and acetone. Acrylic acid is valuable as it is a chemical intermediate widely used in the production of many industrial and consumer products.',
            img: '/products-img/acrylates-2.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Technical properties of acrylic acid:',
              },
              {
                desc: 'Cas Number: 79-10-7',
              },
              {
                desc: 'Chemical Formula: C3H4O2',
              },
              {
                desc: 'Synonyms: Acroleic acid, propenoic acid and prop-2-enoic acid',
              },
              {
                desc: 'Molecular Mass: 72.06 g/mol',
              },
              {
                desc: 'Flashpoint (open cup): 122 °F / 50 °C',
              },
              {
                desc: 'Autoignition temperature: 820 °F / 438 °C',
              },
              {
                desc: 'Boiling Point: 286 °F / 141.1 °C',
              },
              {
                desc: 'Melting Point: 55 °F / 12.8 °C',
              },
              {
                desc: 'Density: 1.051 g/mL',
              },
            ],
          },
          produce: {
            head1: 'Acylic Acid Production',
            desc1: 'Acrylic acid manufacturers produce this chemical by the vapour-phase oxidation of propylene. This process involves two reactors, with the first reactor converting the propylene to acrolein and the second converting the acrolein to acrylic acid.',
            desc2: 'This method is quite expensive due to use of propylene however there are some cheaper options that may also be possible. Another commercial manufacturing process involves the sequential oxidative dehydrogenation of selective oxidation of propane to acrylic acid using a two-catalyst bed in a reactor.',
            desc3: 'Historically, acrylic acid has been produced through the carbonylation of acetylene involving nickel carbonyl, carbon monoxide and acetylene. However, this process was more expensive due to the higher price of acetylene in comparison to propylene.',
          },
          distribute: {
            head1: 'Storage and distribution',
            subHead1: 'Health hazards',
            desc1: 'Acrylic acid can cause severe irritation to the skin if handled directly with swelling and chemical burns possible. If the acid enters the eyes, then severe irritation can occur with the potential for long-term eye damage. Finally, inhaling acrylic acid can be severely irritating to the respiratory tract including the nose, throat, and lungs.',
            desc2: 'Therefore, when acrylic acid is handled, a protective suit along with suitable gloves should be worn to ensure skin contact is avoided. Well fitted safety goggles should be always worn when the chemical is being handled to avoid eye contact. Along with a respirator to avoid the inhalation of vapours from the acid if the environment lacks sufficient ventilation.',
            subHead2: 'Transportation',
            desc4: 'The acid is sensitive to heat and sunlight and should be stored in a cool, dry, and well-ventilated chemical store that is free from all sources of ignition. It is supplied with inhibitors that prevent dangerous polymerisation and an explosion as it can become quite unstable.',
            desc5: 'It has a flashpoint of 50oC (closed cup) and is therefore flammable and it has a specific gravity of 1.05. For transportation purposes, it’s classified as pack group II, hazard class 8 and should it be labelled as corrosive, flammable, and dangerous to the environment.',
          },
          used: {
            head1: 'What is Acrylic Acid used for?',
            desc1: 'Acrylic acid is an important industrial chemical as it is a chemical intermediate that is employed in the production processes of many common industrial and consumer products. There are two main uses for acrylic acid.',
            subHead2: 'Chemical intermediate',
            desc2: 'The first use of acrylic acid is as a chemical intermediate in the production of acrylic esters and resins which include ethyl acrylate, butyl acrylate, methyl acrylate, and 2-ethylhexyl acrylate. They are then polymerised and become ingredients in paint formulations, coatings, textiles (woven and non-woven), adhesives, polishes, and plastics. Methyl acrylate is also used in the manufacturing of vitamin B1. The resins can be made into such things as moulding powders for signs, construction units, and decorative emblems.',
            subHead3: 'Polymers',
            desc3: 'The second major use for acrylic acid is as a building block in the production of polyacrylic acid polymers.  These polymers are cross-linked polyacrylates and are super absorbent with the ability to absorb and retain more than one hundred times their own weight.  They are used to make nappies, feminine hygiene products and adult incontinence pads. Acrylic acid is also utilised in the production of detergent polymers and in the production of flocculants which are employed in wastewater treatment plants.',
            desc4: 'Demand for the acid has seen continued growth with increased interest in laundry products after the pandemic as well as for architectural coatings in the Asia-Pacific region.',
          },

        },
      },
      {
        id: 4,
        name: 'Butyl Acrylate',
        details: {
          whatIs: {
            head1: 'What is Butyl Acrylate?',
            sub1: 'Butyl Acrylate is an acrylate monomer with a molecular formula of CH2=CHCOO(CH2)3CH3.   It is a clear and reasonably volatile liquid which is slightly soluble in water and completely soluble in alcohols, ethers and almost all organic solvents.  It is a reasonably flammable liquid with a flashpoint around 40° C and has a distinct fruity, pungent odour.   It is easily miscible with other organic solvents and is readily polymerized with monomer molecules to create polymer chains.',
            img: '/products-img/acrylates-3.jpg',
          },
          produce: {
            head1: 'How is Butyl Acrylate produced?',
            desc1: 'Butyl acrylate can be manufactured by reacting n-butanol with acrylic acid in the presence of an acid catalyst in an elevated temperature zone to produce  butyl acrylate, water and other by-products.  The product mixture is then purified in a distillation zone to create a higher purity of butyl acrylate.  The typical yield of this process ranges between 94-97%.',
          },
          distribute: {
            head1: 'How is Butyl Acrylate stored and distributed?',
            desc1: 'A chemical stockist would have a bulk petrochemical storage facility to maintain the product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Butyl acrylate should be kept out of direct sunlight, heat and open flames.  Solvents such as butyl acrylate should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
            desc2: 'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, the product is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 3.',
          },
          used: {
            head1: 'What is Butyl Acrylate used for?',
            desc1: 'Butyl acrylate is primarily used in the production of homopolymers and co-polymers for use in water based industrial and architectural paints.  It can also be used in cleaning products, antioxidant agents, enamels, adhesives, textiles, caulks and paper finishes.  The double bond reactivity also allows for this product to be used as a chemical intermediary.  The primary end user markets of this product would be the water, plastics, leathers, paints, adhesives and textiles industries.',
          },

        },
      },
      {
        id: 5,
        name: 'Ethyl Acrylate',
        details: {
          whatIs: {
            head1: 'What is Ethyl Acrylate?',
            sub1: 'Ethyl acrylate is a clear and volatile liquid that is slightly soluble in water and completely soluble in alcohols, ethers and almost all organic solvents. It is a very flammable liquid (fire hazard rating 3) with a flashpoint of 16° C and has a sharp acrid odour.',
            img: '/products-img/acrylates-4.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Technical properties of ethyl acrylate:',
              },
              {
                desc: 'Cas Number: 140-88-5',
              },
              {
                desc: 'Chemical Formula: C5H8O2',
              },
              {
                desc: 'Synonyms:  Acrylic acid ethyl ester, ethyl propenoate and ethyl prop-2-enoate',
              },
              {
                desc: 'Molecular Mass: 100.12 g/mol',
              },
              {
                desc: 'Flashpoint (open cup): 60 °F / 16 °C',
              },
              {
                desc: 'Autoignition temperature: 653 °F / 345 °C',
              },
              {
                desc: 'Boiling Point: 210 °F / 99 °C',
              },
              {
                desc: 'Melting Point:  -96 °F / -71 °C',
              },
              {
                desc: 'Density: 0.92 g/mL',
              },
            ],
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Ethyl acrylate can be chemically manufactured using several industrial methods.  The most prominent method is to cause a reaction between acrylonitrile and ethanol using sulphuric acid as the catalyst.  Additionally, manufacturers may also use phenollic type inhibitors, soluble manganese or cerium salts to aid its production.  Other chemicals used in this reaction are  acetylene, carbon monoxide and ethanol.',
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'A chemical distributor would have a bulk storage facility to maintain the chemical’s stability. Storage should be in a cool, dry, well-ventilated facility that is out of direct sunlight. The acrylate should also be kept separate from oxidisers, polymerises and strong alkalisers.',
            desc2: 'Ethyl acrylate would normally be distributed by a solvent exporter in bulk vessels or tank trucks. For transportation purposes, ethyl acrylate is classed as a flammable liquid as it has a fire hazard rating of 3. This compound contains an inhibitor (hydroquinone) to stabilise it during transportation and stop polymerisation.',
            subHead2: 'Health hazards',
            desc4: 'Ethyl acrylate is rated a 2 for a health risk under the NFPA 704, indicating intense or continued use could cause a temporary incapacitation or residual injury with the potential for contact to burn the skin and eyes. If the compound is breathed in, the lungs can be irritated and cause coughing and shortness of breath. For these reasons, appropriate protection equipment including protective clothing and eye protection should be always worn while handling the chemical.',
            desc5: 'The acrylate is possibly carcinogenic to humans, especially for colorectal cancer, although the evidence has been inconclusive so far. As a result of animal studies indicating the possible link, ethyl acrylate is no longer authorised to be used as a food additive by the FDA. Therefore, foods in the US should only contain this compound if it occurs naturally in the product such as pineapples and some cheeses.',
            subHead3: 'Ethyl acrylate allergies',
            desc6: 'Individuals can be allergic to ethyl acrylate, often discovered when they use artificial nails, dentist materials and various adhesives. This results in contact dermatitis; a red, itchy rash that can be uncomfortable, although is not contagious or life-threatening.',
            desc7: 'A patch test performed by a clinician can be used to test for an ethyl acrylate allergy. If you are allergic, you will be advised to read product labels carefully to avoid contact as well as to test new products on a small skin area.',
          },
          used: {
            head1: 'Ethyl acrylate uses',
            desc1: 'Ethyl acrylate is primarily used in the production of emulsion-base polymers. Manufacturers produce acrylic resins which can then be used as paints, coatings, or latex products. It is mainly used in polyacrylate elastomers, acrylic rubber, textiles, acrylic fibres, leather products and denture materials. It can be used as a coating on most household items such as books, magazines, frozen food packaging, as a fragrance additive and as an adhesive for envelopes and labels. The primary end user markets are the plastics, leather, paints, packaging, paper, and textiles industries.',
          },

        },
      },
      {
        id: 6,
        name: 'Methyl Acrylate',
        details: {
          whatIs: {
            head1: 'What is Methyl Acrylate?',
            sub1: 'Methyl Acrylate (also known as acrylic acid methyl ester, and methyl 2-propenoate) is an ester of acrylic acid and has the formula C4H6O2. It is a colourless, transparent liquid which has an unpleasant odour.  It is found in nature as the volatile component of pineapple.  It has slight solubility in water but is completely soluble in alcohols, esters, and many other organic solvents.',
            img: '/products-img/acrylates-5.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Methyl acrylate is made from technical grade acrylic acid.  This acrylic acid is reacted with methanol, in a reactor bed at elevated temperatures, to produce methyl acrylate with water produced as a by-product.',
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Storage tanks and pipes for Methyl acrylate should be made of stainless steel or aluminium and the product is often distributed in steel tanks or glass bottles.',
            desc2: 'Methyl acrylate must be stored under air to prevent polymerisation but is stable under recommended storage conditions.  It is also light sensitive so must be protected from direct sunlight, and must also be stored in a cool, dry, and well-ventilated area that is free from the risk of ignition.  It is classified as Hazard class 3.2 and pack group II and should be labelled as Harmful and Highly Flammable as it has a flash point of -3oC (closed cup).  It has a specific gravity of 0.954 at 20oC.',
          },
          used: {
            head1: 'What is Methyl Acrylate used for?',
            desc1: 'Methyl acrylate is a chemical that can be employed across a range of industries as it reacts readily with a wide variety of organic and inorganic compounds.  It is therefore a very useful chemical intermediate in a variety of production processes.',
            desc2: 'One of the major areas that Methyl acrylate is employed in is the production of surface coatings These surface and water-based coatings are found in a range of industries and include the paint industry where Methyl acrylate can be a component of paints and lacquers. This is because methyl acrylate provides good water resistance, low temperature flexibility, and sunlight resistance to products, for example, latex paint formulations.',
            desc3: 'The textile industry and the leather industry also employ methyl acrylate as a component of coatings.  The leather industry uses it to provide different finishes e.g. suede and nubuck, to its products while the textile industry employs methyl acrylate in the manufacturing and finishing of woven and non-woven textiles.  The paper industry also uses methyl acrylate in paper coatings, and in the manufacture of paper itself.',
            desc4: 'Methyl acrylate is also employed in the manufacture of consumer, technical, and construction adhesives.  It is also used employed in the manufacture of acrylic and modacyrlic fibres and in the production of plastic film.',
            desc5: 'Methyl acrylate is also useful for water treatment as it is used to produce DMAEA (dimethylaminoethylacrylate) which is used as a flocculant in water treatment processes.',
          },

        },
      },
      {
        id: 7,
        name: 'Methyl Methacrylate',
        details: {
          whatIs: {
            head1: 'What is Methyl Methacrylate?',
            sub1: 'Methyl Methacrylate (also known as MMA, 2-methylmethacrylate, or methyl 2-methyl propenoate) is an ester of methacrylic acid.  It has the formula C5H8O2 and is a clear, colourless liquid that has an acrid odour and is not known to occur naturally.  It is insoluble in water, but is soluble in most organic solvents and it is also volatile and is flammable in both a liquid and vapour state.',
            img: '/products-img/acrylates-6.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'The main route of MMA production is by reacting hydrogen cyanide with acetone to form acetone cyanohydrin.  This is then reacted with concentrated sulphuric acid to produce methacrylate sulfate.  This is then reacted with methanol and water to form methyl methacrylate.  However, producers are looking at alternate production methods as this process involves the handling of highly toxic hydrogen cyanide, and also produces large amounts of ammonium bisulfate, as a by-product, which must then be disposed of.',
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Methyl methacrylate must be transported and stored in containers made of stainless steel, glass, aluminium, or carbon steel.  It should be stored in a cool, dry, well-ventilated area that is out of the direct sunlight and is away from all sources of ignition.  It is normally supplied with an inhibitor as autopolymerisation can occur, especially in light.',
            desc2: 'MMA has a specific gravity of 0.939 and a flash point of 10 oC (closed cup) so must be labelled as highly flammable and it should also be labelled as an irritant.  For transportation purposes, MMA is classified as hazard class 3, and pack group II.',
          },
          used: {
            head1: 'What is Methyl Methacrylate used for?',
            desc1: 'Methyl methacrylate is an important chemical as it is the monomer for polymethyl methacrylate (PMMA) polymers and copolymers.  These polymers and copolymers are then used in the manufacture of a variety of other products.  These include clear plastics (such as Plexiglass), resins, and acrylic sheets.  Some of the end products that have utilised these chemicals are advertising signs and displays, skylights, building panels and sidings, and plumbing and bathroom fittings.',
            desc2: 'MMA is also polymerised to form lubricant viscosity modifiers, dispersions,  molding/extrusion powder, and coatings.  These are then utilised in the production of such things as acrylic surface and paper coatings, adhesives, sealants, leather and paper coating, inks, textile finishes, latex paints, and lacquer and enamel resins.',
            desc3: 'MMA is also used in the fields of medicine and dentistry as it is used to make prosthetic devices, surgical bone cements, and as a ceramic filler or cement.  It can also be used in the production of orthotic shoe inserts, and in leaded acrylic radiation shields.',
            desc4: 'MMA can also be used in the impregnation of concrete as it makes the concrete water repellent.  It can also be used to partially replace styrene in unsaturated polyester resins as it gives better water resistance and a longer life to the final products.',
          },

        },
      },
    ],
  },
  {
    id: 2,
    name: 'Alcohols',
    products: [
      {
        id: 1,
        name: 'Ethanol',
        details: {
          whatIs: {
            head1: 'What is Ethanol?',
            sub1: 'Ethanol (also known as ethyl alcohol, drinking alcohol, grain alcohol, methylcarbinol, TSDA or Ethos) is an organic chemical compound with the chemical formula C2H6O. It is a primary alcohol and the key ingredient present in alcoholic beverages consumed around the world. It is volatile, flammable, clear, colourless with a characteristic vinous odour resembling wine. Ethanol is miscible with water and many organic solvents. It has a wide array of uses including as an antiseptic, disinfectant, antidote, a depressant, a fuel source and a solvent.',
            img: '/products-img/alcohols-1.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Chemical and physical properties of ethanol:',
              },
              {
                desc: 'Molecular Formula: C2H6O / CH3−CH2−OH / C2H5OH',
              },
              {
                desc: 'Synonyms: ethyl alcohol, grain alcohol, methylcarbinol, TSDA, Ethos, absolute alcohol, drinking alcohol, ethylic alcohol, hydroxyethane',
              },
              {
                desc: 'Cas Number: 34-17-5',
              },
              {
                desc: 'Molecular Mass: 46.041 g·mol−1',
              },
              {
                desc: 'Exact Mass: 46.041865 g/mol',
              },
              {
                desc: 'Flashpoint: 55°F / 12.8°C',
              },
              {
                desc: 'Boiling Point: 173.3°F / 78.5°C at 760 mm Hg ',
              },
              {
                desc: 'Melting Point: -173.4°F / -114.1°C',
              },
              {
                desc: 'Vapour Pressure: 59.3 mm Hg at 25 °CBoiling Point: 286 °F / 141.1 °C',
              },
              {
                desc: 'Melting Point: 55 °F / 12.8 °C',
              },
              {
                desc: 'Water Solubility: Miscible',
              },
              {
                desc:'Density: 0.7893 g/cu (at 20 °C)'
              },
              {
                desc:'Ethanol occurs naturally in many areas such as in corn, safflower, in urine, faeces, blood and sweat, emissions from fires, volcanoes, insects, fermentation of sugars and also fruit (when overripe). Ethanol is a byproduct of the metabolism of yeast, indicating that it is present in most yeast habitats and is also produced during the germination of plants.'
              }
            ],
          },
          produce: {
            head1: 'Production',
            desc1: 'Ethanol has been produced for thousands of years and is one of the oldest organic processes utilized by humankind with people throughout history appreciating its intoxicating properties.',
            desc2: 'Historically, it was produced via ethanol fermentation which is the process of converting sugars, such as glucose, into cellular energy which produces ethanol as a result:',
            desc3: 'C6H12O6 → 2 CH3CH2OH + 2 CO2',
            desc4: 'Large volumes of ethanol are still produced by fermentation and are mainly used for alcoholic and fuel uses of ethanol. Raw materials can be used in replacement of sugars, including starch and sugar-based feedstocks, such as corn grain or sugar cane, or cellulosic feedstocks such as grass, wood, crop residues, or agricultural waste.',
            desc5:'Carbon dioxide can also be used to replace the sugars or raw materials using electrochemical reactions. However, this method tends to produce smaller amounts of ethanol.',
            desc6:'Another method of producing ethanol is through the acid-catalysed hydration of ethylene in the presence of a catalyst such as phosphoric acid:',
            desc7:'C2H4 + H2O → CH3CH2OH',
            desc8:'This method is typically used for producing ethanol for solvent uses.',
            desc9:'Ethanol is also produced through the enzymatic hydrolysis of cellulose, wet milling of corn and the oxidation of methane.',
            desc10:'It is produced for use in a wide range of industries with demand increasing most rapidly in the fuel industry where government changes in legislation are requiring fuel manufacturers to increase the percentage of ethanol in their fuel.  The global production of ethanol is rising with approximately 52 million tonnes produced in 2008 alone.',
            subHead2:'Reactions',
            desc11:'Ethanol is highly flammable and soluble in water. It reacts violently with acetyl bromide and chloride and explosive mixtures can be formed if ethanol is mixed with highly concentrated hydrogen peroxide.',
            desc12:'Several enzyme reactions use ethanol, one of which being the oxidisation of ethanol to acetaldehyde with nicotinamide-adenine dinucleotide, in the presence of an alcohol dehydrogenase catalyst:',
            desc13:'Ethanol + NAD+ → acetaldehyde + NADH + H+',
            desc14:'Other reactions include hypochlorous acid or chlorine to form ethyl hypochlorite.',
            desc15:'Ethanol reacts with carboxylic acids such as amino or fatty acids to produce ethyl esters in the presence of an acid catalyst such as hydrofluoric and phosphoric acid.',
            desc16:'RCOOH + HOCH2CH3 → RCOOCH2CH3 + H2O',
            desc17:'Other reactions include the combustion of ethanol forming CO2 and water, reacting with alkali metals or strong bases and the dehydration of ethanol with an acid catalyst.'
          },
          distribute: {
            head1: 'Handing, storage & distribution',
            subHead1: 'Hazards & toxicity',
            desc1: 'Ethanol has an NFPA rating of 2 and can cause temporary incapacitation or residual injury. Ethanol (in vapour form only) will irritate the eyes, nose and throat. It has a fire rating of 3  and can be ignited under almost all ambient temperature conditions.',
            subHead2: 'Safety & procedures',
            desc4: 'Personal protective equipment should be warn at all times to prevent possible contact with your skin and eyes.  If contact is made with your skin, immediately wash the contaminated area. Wet clothing should be removed immediately and replaced.',
            desc5: 'In the case of spillage, attempt to isolate the leak to a minimum of 50 metres. The leak should be absorbed using dry earth or non-combustible materials. Access to sewers, basements and waterways should be blocked. Alcohol-resistant foam, CO2 or water spray extinguishers should be used. Ignition sources should be removed to prevent a fire or further fires developing.',
            subHead3: 'Storage & distribution',
            desc6:'Ethanol is stored in storage tanks and/or stainless-steel drums and can be transported by bulk vessels or tank trucks.  For transportation purposes, ethanol is classed as packing group II and hazard class 3 as it has a flashpoint of 14 °C (closed cup) and is highly flammable.  It should be kept in a cool, dry, well-ventilated area that is free from all fire hazards.  It has a specific gravity of 0.789.'
          },
          used: {
            head1: 'Uses',
            subHead1:'Industrial uses of ethanol',
            desc1: 'The primary use of ethanol is in the manufacturing of alcoholic beverages. Other manufacturing uses include in the production of acetaldehyde, ethyl chloride, ethyl acetate,  ethylene dibromide, acetic acid, glycol ethers, ethylamines and also in explosives, dyes, detergents, fillers, lubricants, lacquers, additives, coatings, cosmetics, perfumes, food extracts flavourings, gasoline and pharmaceuticals.',
            desc1_2:'Pharmaceutical uses of ethanol include as an antiseptic in wipes and anti-bacterial spray. It is also used occasionally as an antidote to methanol poisoning and as a neurotoxin, teratogenic agent and a human metabolite. Ethanol can relieve chronic pain for inoperable cancer patients through the neurolysis of nerves.',
            desc1_3:'Another primary use of ethanol is as an engine cleaner burner fuel additive. The majority of gasoline produced in the U.S. contains 10% ethanol which oxygenates the fuel reducing its pollution.',
            subHead2: 'Uses of ethanol as a solvent',
            desc2: 'Ethanol has many uses as a solvent including for resins, fatty acids, hydrocarbons, fats, oils and waxes. It is also present in personal care products, air care products, paints and markers. Ethanol’s structure enables for the dissolving into polar compounds such as water, non-polar and hydrophilic such as hexane and hydrophobic.',
          desc2_2:'Ethanol is also used as a medicinal solvent due to its low toxicity and non-polar capabilities. It is seen in drugs for pain relief and medicines for coughs and colds.',
            subHead3: 'Commercial uses of ethanol',
            desc3: 'Ethanol is found in many cosmetic, beauty and personal care products, antibacterial gels and sanitisers due to its cleaning properties and helps to separate sprays into the air and keep lotions and jells from splitting',
            desc4: 'It is also present in paints, varnishes, oils, vanilla extracts, fuel, alcoholic beverages, anti-freezes, inks, adhesives.',
          },

        },
      },
      {
        id: 2,
        name: 'Iso Butanol',
        details: {
          whatIs: {
            head1: 'What is Iso Butanol?',
            sub1: 'Iso butanol is a primary alcohol and an organic compound with a molecular formula of (CH3)2CHCH2OH.  It is a colourless, flammable liquid with a characteristic sweet, musty smell that is used predominantly in agrictural chemical formulations.  It only has limited miscibility in water, however is easily soluble in regular solvents such as ethers and alcohol.  Iso butanol is highly flammable with a flash point between 26 – 29º C.',
            img: '/products-img/alcohols-2.jpg',
          },
          produce: {
            head1: 'How is Iso Butanol Produced?',
            desc1: 'Iso butanol is produced in the carbonation of propylene.  There are two methods in the industrial manufacturing of iso butanol.  The first is the hydroformylation of propylene which generates a mixture of normal and isobutyraldehydes which are then hydrogenated into separate alcohols.  The second method, which is less common, is to use reppe carbonylation to create iso butanol.  Iso butanol can also occur naturally as product of the fermentation of sugars and other carbohydrates.',
          },
          distribute: {
            head1: 'Storage and Distribution of Iso Butanol',
            desc1: 'A chemical trader would have a bulk petrochemical storage facility to maintain the product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Iso butanol should be kept out of direct sunlight, heat and open flames.  Solvents such as iso butanol should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
            desc2:'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, iso butanol is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 3.',
          },
          used: {
            head1: 'What is Iso Butanol used for?',
            desc1: 'The majority of iso butanol production is converted into derivates (esters) for use as a solvent in the coatings industry.  It is very suitable for acid-curable lacquers and baking finishes.  It can also be used as a derivate in the manufacturing of plastics and rubber mixtures.  Other major applications include paint solvent, varnish remover, floor polishes, cleaning agents, stain removal, solubiliser in the textile industry, additive in gasoline, additive in de-icing fluids, dehydrating agent, mobile phase in thin layer chromatography, feedstock productions of ethers/acrylates and anti-corrosion inhibitors in engine oils.  The main end user markets are the coatings, plastics, rubber, cleaning, textiles and motor industries.',
          },

        },
      },
      {
        id: 3,
        name: 'Iso Propanol',
        details: {
          whatIs: {
            head1: 'What is Iso Propanol?',
            sub1: 'Isopropanol (also known as 2-propanol, Isopropyl alcohol, Propan-2-ol or rubbing alcohol) is a structural isomer of propanol (propyl alcohol) and has the molecular formula of C3H8O. It is a clear, colourless and volatile liquid and has a distinctive strong alcohol or acetone-like odour. This solvent is highly flammable, with a flashpoint of around 11 – 13° C. Isopropanol is soluble in most solvents, including water.',
            img: '/products-img/alcohols-3.jpg',
            sub_desc1:'Isopropanol is a common sterilising agent with antibacterial properties which is used in many cleaning applications including hand wipes, disinfectants, hand sanitisers and spray-in-air or ultrasonic products. It also has effective uses in hospitals and medical centres including eliminating skin pathogens.',
            sub_desc2:'Solutions of Isopropanol of around 70% are the most effective at disinfection and sterilisation (with a 10 – 40% solution of purified water). This is because when concentrations of alcohol drop below 50%, its sterilising properties decrease at a considerable rate and consequently when this percentage rises to 90%, these properties sustain their disinfection rates.'
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Isopropanol and propyl alcohol (1-propanol) are structural isomers of each other and have similar molecules, the difference being their -OH is attached at a different location. It is miscible in water (infinitely), ether, chloroform, acetone and alcohol and chloroform and insoluble in salt solutions.',
              },
              {
                desc: 'Technical properties of Isopropanol:',
              },
              {
                desc: 'Molecular Formula: C3H8O, CH3CHOHCH3, (CH3)2CHOH',
              },
              {
                desc: 'Molecular weight: 60.1 g/mol',
              },
              {
                desc: 'Acidity: 16.5ph',
              },
              {
                desc: 'Flashpoint: 53°F / 11.7°C',
              },
              {
                desc: 'Boiling Point: 180.5°F / 82.3°C',
              },
              {
                desc: 'Melting Point:-127.3°F / -89.5°C',
              },
              {
                desc: 'Density: 0.786 g/cm3 (20°C)',
              },
              {
                desc: 'Melting Point: 55 °F / 12.8 °C',
              },
              {
                desc: 'Refractive index: 1.3772 (20°C)',
              },
              {
                desc:'Log P: -0.16'
              },
            ],
          },
          produce: {
            head1: 'How is Isopropanol Produced?',
            desc1: 'The sterilising agent is chemically manufactured using several commercial methods of direct and indirect hydration.',
            desc2: 'The direct method (and the more modern adaptation) of manufacturing is by reacting very high-quality propene (90-99%) with water with an acidic catalyst, which removes the requirement of sulphuric acid. The two are heated and the vapour produced flows through a reactor that contains sulfonated polystyrene cation ion exchange resins.',
            desc3: 'The indirect method is a two-step process; step one is reacting propene and sulphuric acid to form sulphate esters and the second step is the hydrolysis of sulfonate esters into isopropanol. Separate reactors are used for the two different steps, and, unlike the direct method, this process can use a lower quality grade of propene.',
            desc4: 'In both the above methods, the mixture of water and by-products need to go through a distillation process to separate the isopropanol (around 90% purity).',
          },
          distribute: {
            head1: 'Handing, Storage & Distribution',
            subHead1: 'Storage & Distribution',
            desc1: 'Isopropanol should be stored in an air-tight storage unit/container in a cool, dry place at room temperature (avoid preserving in hot environments). Isopropyl alcohol can react with oxygen and air over time, forming unstable peroxides which can explode if it is incorrectly stored.',
            desc2:'The environment should be well ventilated, and it must be kept away from oxidising agents. Isopropanol should also be protected from direct sunlight, heat and sparks or open flames as it is highly flammable. Containers such as iso tanks made of stainless steel, aluminium or carbon steel are suitable storage units.',
            desc3:'A solvent stockist, such as Solventis, would have a bulk petrochemical storage facility to maintain the product with all relevant safety considerations in place.',
            desc3_1:'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks. For transportation purposes, isopropanol is classed as a flammable liquid with a fire hazard rating of 3 and is a packing group 2.',
            subHead2: 'Isopropanol Health Hazards',
            desc4: 'Inhalation of Isopropanol can cause irritation and burning sensations in the mouth, throat, eyes and nose. Ingestion can lead to drowsiness, dizziness, increased heart rate, stomach upsets and, in more severe cases, heart problems.',
            desc5: 'It is advised that eye protection should be always worn when handling isopropanol, if any clothing becomes soaked in the chemical it should be removed immediately and not worn again until clean.',
            desc6:'Isopropanol is also known to easily absorb through the skin. Consequently, prolonged, or repeated contact can cause rashes, itching, skin dryness, and redness. Skin contact should be avoided by using protective clothing when handling.'
          },
          used: {
            head1: 'Isopropyl Alcohol Uses',
            desc1: 'Isopropanol is used as both an intermediate and a solvent in an array of industries, most popularly in the pharmaceutical industry but also in the automotive, laboratory and disinfectant industries.',
            subHead2: 'Solvent',
            desc2: 'Isopropanol is used as a solvent and cleaning fluid as it is non-toxic compared to other alternatives, for example in consumer uses such as paints, thinners for wood furnishings, inks, dye solutions, cosmetics, and toiletries (lotions, body oils, polishes, shampoos, hair sprays) lubricants, greases, glasses cleaners, and disinfectants.',
            subHead3: 'Intermediate',
            desc3: 'Isopropanol is used as a chemical intermediate in the manufacture of acetone and its by-products through the process of oxidisation. Other applications include esterification to produce isopropyl acetate and reacting with aluminium metal and titanium tetrachloride to form titanium and aluminium isopropoxide.',
            subHead4:'Laboratory',
            desc4: 'In DNA extraction, isopropyl alcohol is added to precipitate DNA, which is then centrifuged to form a pellet to be studied. Therefore, iso propanol has great application in studying the genetic causes of disease to allow for new diagnostics and treatments to be developed. In addition to being used in forensic science, in which DNA extraction is used for determining paternity or sequencing genomes.',
            desc5:'Isopropyl alcohol can also be used as a biological specimen preservative with a solution mixture of around 90%. It has benefits over alternatives such as formaldehyde as it is less toxic and thus easier to be used in laboratories.',
            subHead5:'Disinfectant/Pharmaceutical',
            desc6:'In combination with 70% alcohol and a 10 - 40% solution of purified water, isopropanol is an extremely effective steriliser. For this reason, it is found in disinfectant products for homes, rubbing alcohol, hand sanitisers, care products, household cleaning products, and personal care products.',
            desc7:'This 70% concentration allows the IPA to permeate the whole cell of microorganisms and cause the proteins in the cell to coagulate or clot. This quickly kills the microorganism.',
            desc8:'Water is added to slow the evaporation of the isopropanol, increasing contact time with the surface that is being cleaned and improving the effectiveness of the product. Although concentrations of IPA that are too highly diluted will not be able to permeate the cell wall of microorganisms and therefore be less effective.',
            desc9:'Isopropyl alcohol is especially effective for the cleaning of glass surfaces, such as mirrors and windows. The high volatility of the chemical means that it evaporates very quickly, leaving no residue or streaks. As a result, IPA is commonly used in the electronics industry for cleaning specialist parts after manufacture, where no residue must be left for the function of the component.',
            desc10:'Additionally, isopropanol is used in medical and pharmaceutical applications, such as laboratory chemicals, and bathing solutions. As a water-drying aid, it can be used to prevent a swimmer\'s ear (also known as otitis externa).',
            subHead6:'Automotive',
            desc11:'Automotive industry uses of isopropanol include anti-freeze products, adhesives, coating additives and paints. It also plays an important role in making the water component of petrol more soluble so that it does not freeze. Due to its quick-drying and streak-free cleaning, it is also used in the detailing industry, such as for sticker residue removal.',
            desc12:'The information above shows that isopropanol has a variety of practical applications and can have significant benefits in our daily lives when it is handled correctly.'
          },

        },
      },
      {
        id: 4,
        name: 'Methanol',
        details: {
          whatIs: {
            head1: 'Methanol',
            sub1: 'Methanol (also known as methyl alcohol; methyl hydroxide; monohydroxymethane; and wood alcohol) has the chemical formula CH3OH and is a clear, colourless liquid which has a mild, characteristic alcohol odour.  It is soluble in water and is also soluble in other alcohols, esters, ketones, ethers, and in most other organic solvents.',
            img: '/products-img/alcohols-4.jpg',
          },
          produce: {
            head1: 'Production',
            desc1: 'Methanol is produced naturally in the environment by the anaerobic metabolism of many varieties of bacteria but it was first isolated in 1661 by Robert Boyle who produced it via the distillation of boxwood.',
            desc2: 'Since then it has become one of the most heavily traded chemicals in the world with an estimated global demand of 29 million metric tons per year.  This is because Methanol is a very versatile chemical which forms the basis of hundreds of chemicals which are then used in many every day products.',
            desc3: 'Methanol is produced in a three stage process consisting of Reforming, Compression, and Distillation.  In the first step, natural gas is combined with steam, under heat, to produce synthesis gas which consists of hydrogen, carbon monoxide, and carbon dioxide.  In step two, this synthesis gas is pressurised (compressed) and reacted to form methanol.  In the third stage, the liquid mixture is heated to separate the components.  The resulting vapour is then cooled and condensed to provide pure methanol.',
          },
          distribute: {
            head1: 'Storage and Transportation',
            desc1: 'Methanol has a flash point of 12oC (closed cup) which makes it Flammable and, as such, is classified for transport as Class 3, Pack group II.  It also has a specific gravity of 0.7915.',
            desc4: 'It should be stored in a cool, well-ventilated, area that is free from all sources of ignition and the container should be kept tightly closed when not in use.',
            desc5: 'Methanol can be poisonous if consumed so should also be labelled as toxic.',
          },
          used: {
            head1: 'Uses',
            desc1: 'Methanol is an important chemical feedstock which is utilised primarily in the production of formaldehyde, methyl tertiary butyl ether (MTBE), and acetic acid.  It is also used in the manufacture of DMT, MMA, chloromethanes, methylamines, glycol methyl ethers, and fuels.  Methanol also has general solvent and antifreeze uses so can be found as a component of paint stripper, and de-icers.',
            desc1_2:'This means that methanol is an integral part of everyday life as it can be found in plastics, synthetic fibres, fuels, resins, paints, safety glass laminate, adhesives, solvents, carpeting, insulation, refrigerants, particle board, pigments and dyes.',
            desc1_3:'Methanol is also used in waste water treatment as it provides a carbon food source for the denitrifying bacteria as the nutrient rich nitrates in sewage effluent can have a major effect on water eco-systems, for example, enabling algae blooms.',
            desc2: 'It seems that Methanol will remain an important chemical in the future, as many countries are seeking to expand methanol fuelling programmes.  This is because methanol is readily available, has a high octane rating, and is easy to transport.  If methanol production costs can be cut, via large scale plants consuming natural gas, methanol could also be used to make ethylene and propylene, and dimethyl ether.  It could also be utilised in power generation.',
          },

        },
      },
      {
        id: 5,
        name: 'Mosstanol L',
        details: {
          whatIs: {
            head1: 'Mosstanol L',
            sub1: 'Mosstanol L is a unique product compromising of anhydrous ethyl alcohol and iso propanol in approximately the following quantities: 60% ethanol and 40% iso propanol.  Mosstanol L is a clear liquid with a mild pleasant odour and has a freezing point of -112° C.  It is miscible with water, alcohol, ether, chloroform and acetone.  Mosstanol L is highly flammable with a flashpoint of 12° C.',
          },
          produce: {
            desc1: 'Mosstanol L is a by-product of a chemical process based on the Fischer-Tropsch synthesis.',
          },
          distribute: {
            head1: 'Storage and Distribution',
            desc1: 'A chemical wholesaler would have a bulk petrochemical storage facility to maintain the product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Mosstanol L should be kept out of direct sunlight, heat and open flames.  Solvents such as mosstanol L should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
            desc4: 'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, mosstanol L is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.',
          },
          used: {
            head1: 'Uses',
            desc1: 'Mosstanol L is predominantly used in paints and lacquers as a diluting product, in the printing industry as a medium of ink, window cleaning/washer fluid, fuel blending, adhesives, air fresheners, varnishes, anti-freeze in compressed air systems and de-icer.  The primary end user markets are the printing, paint, motor, consumer products and adhesive industries.',
          },

        },
      },
      {
        id: 6,
        name: 'N-Butanol',
        details: {
          whatIs: {
            head1: 'What is N-Butanol?',
            sub1: 'n-Butanol (also known as normal butanol and n-butyl alcohol) is a primary alcohol with a molecular formula of C4H10O. It is a colourless liquid of medium volatility and a characteristic banana-like odour. n-Butanol has limited miscibility in water; however, it is easily soluble in regular solvents such as ethers, alcohol, glycols and hydrocarbons. This solvent is very flammable, with a flashpoint of around 35° C.',
            img: '/products-img/alcohols-6.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Technical properties of n-Butanol:',
              },
              {
                desc: 'Cas Number: 71-36-3',
              },
              {
                desc: 'Molecular Formula: C4H10O',
              },
              {
                desc: 'Synonyms: butan-1-ol, 1-butanol, normal butanol, and n-butyl alcohol',
              },
              {
                desc: 'Molecular Mass: 74.12',
              },
              {
                desc: 'Flashpoint (closed cup): 29 °C (84.2 °F)',
              },
              {
                desc: 'Autoignition temperature: 343 °C (649.4 °F)',
              },
              {
                desc: 'Boiling Point: 117 °C (242.6 °F)',
              },
              {
                desc: 'Melting Point: -90 °C (-130 °F)',
              },
              {
                desc: 'Vapour Pressure: 0.58 kPa at 20 °C (68 °F)',
              },
              {
                desc: 'Density: 0.81 at 20 °C (68 °F)',
              },
              {
                desc:'Log P: 0.88'
              },
            ],
          },
          produce: {
            head1: 'The Production of N-Butanol',
            desc1: 'N-butanol can occur naturally as a product of the fermentation of sugars and other carbohydrates. However, the major use (and therefore production) is in the industrial arena. It is a bulk petrochemical manufactured from the feedstock of propylene in an ‘oxo process’ in the presence of a homogeneous catalyst. This creates butyraldehyde which is subsequently hydrogenated to produce n-butanol.',
          },
          distribute: {
            head1: 'How is N-Butanol stored and distributed?',
            desc1: 'A chemical wholesaler would have a bulk petrochemical storage facility to maintain the product. Storage is normally in a cool, dry, and well-ventilated facility away from oxidising agents. N-butanol should be kept out of direct sunlight, heat, and open flames. Solvents such as n-butanol should be stored in drummed containers such as iso tanks made of stainless steel, aluminium, or carbon steel.',
            desc2:'N-butanol is classed as a flammable liquid with a flammability rating of 3 under the NDPA 704 due to its flashpoint of 35 °C. A bulk solvent exporter, such as Solventis, would normally distribute this solvent in bulk vessels or tank trucks.',
          },
          used: {
            head1: 'What is N-Butanol used for?',
            desc1: '1-Butanol can be used as a chemical intermediate to create other chemicals (e.g., esters, n-butyl acetate, and amino resins); alternatively, it can be used as a solvent in the creation of consumer products. N-butanol is used as a solvent for paints, coatings, varnishes, fats, oils, waxes, rubber, and plasticizers.',
            desc2: 'Other uses include coating fabric in the textiles industry, as a cleaning or polishing agent, gasoline, brake fluid and in consumer products such as make-up, nail products, hygiene products and shaving products in the cosmetic industry.',
            desc3: 'Butanol at 85% can be used in car engines that are designed for gasoline with no engine modification required. This allows for lower fuel consumption than other gasoline alternatives such as ethanol due to the lower oxygen content of n-butanol.',
            desc4: 'The chemical is present in several foods and beverages as an artificial flavouring. It is also used in food preparation such as during the manufacture of hop extract for beermaking.',
            desc5:'The main user end market of this product is the chemical, petrochemical, textiles, cleaning, and cosmetics industries.',
          },

        },
      },
      {
        id: 7,
        name: 'N-Propanol',
        details: {
          whatIs: {
            head1: 'What is N-Propanol?',
            sub1: 'N-propanol (also known as 1-propanol, n-propanol alcohol, propan-1-ol, propyl alcohol) is a primary alcohol in which the OH entity is bonded to a primary carbon atom. N-propanol (CH3CH2CH2OH) is one of two isomers of propanol (C3H8O); the other is 2-propanol ((CH3)2CHOH). It is a clear, colourless transparent liquid that has a typical sharp musty odour that is comparable with the smell of rubbing alcohol.',
            img: '/products-img/alcohols-7.jpg',
            sub_desc1:'Miscible in water and freely miscible with all common solvents such as glycols, ketones, alcohols, aldehydes, ethers and aliphatic hydrocarbons, 1-propanol is primarily used as a solvent in the manufacturing of pharmaceuticals, cosmetics, coatings and as a chemical intermediate.',
          },
          technicalProps: {
            head: '1-propanol technical properties',
            props: [
              {
                desc: 'Chemical and physical properties of n-propanol:',
              },
              {
                desc: 'Molecular Formula: CH3CH2CH2OH / n-PrOH',
              },
              {
                desc: 'Synonyms: 1-propanol, n-propanol alcohol, propan-1-ol, propyl alcohol, n-PrOH, 1-hydroxypropane, propionic alcohol',
              },
              {
                desc: 'Cas Number: 71-23-8',
              },
              {
                desc: 'Molecular Mass: 60.096 g/mol-1',
              },
              {
                desc: 'Exact Mass: 60.057515 g/mol',
              },
              {
                desc: 'Flashpoint: 77 °F / 22 °C',
              },
              {
                desc: 'Boiling Point: 207 °F (at 760 mm Hg) / 97.2 °C',
              },
              {
                desc: 'Melting Point: -195 °F / -126 °C',
              },
              {
                desc: 'Vapour Pressure: 1.99 kPa (at 20 °C)',
              },
              {
                desc: 'Water Solubility: miscible',
              },
              {
                desc:'Density: 0.803 g/mL'
              },
              {
                desc: 'Log P: 0.329'
              },
              {
                desc:'N-propanol forms naturally during fermentation processes. The human gastrointestinal microbiota can also produce small amounts.'
              }
            ],
          },
          produce: {
            head1: 'How is N-Propanol produced?',
            desc1: 'Normal propanol is manufactured by a catalytic hydrogenation of propionaldehyde.  The propionaldehyde is itself produced via the oxo process, by hydroformylation of ethylene using carbon monoxide and hydrogen in the presence of a catalyst such as cobalt octacarbonyl or a rhodium complex.',
            desc2: 'Hydrogenation is the process of adding pairs of hydrogen atoms to unsaturated compounds, with the aim of saturating these compounds.',
            desc3: 'H2C=CH2 + CO + H2 → CH3CH2CH=O',
            desc4: 'CH3CH2CH=O + H2 → CH3CH2CH2OH',
          },
          distribute: {
            head1: 'Handing, Storage & Distribution',
            subHead1: 'Hazards & Toxicity',
            desc1: 'N-propanol has an NFPA health rating of 1, causing irritation to your eyes, nose, and throat. High exposure can cause burning, nausea, headaches, and dizziness. Vapours of n-propanol are heavier than air and can also irritate and burn. It has a flammability rating of 3, demonstrating that it can be easily ignited under most ambient temperatures. An instability rating of 0 indicates that n-propanol will remain stable, even when under fire conditions.',
            desc2:'N-propanol sits in the alcohol and polyol reactive groups. It reacts with alkali metal, nitrides, oxoacids and carboxylic acids. It is not reactive with strong oxidising agents.',
            desc3:'It reacts the same way as primary alcohols. It can be converted to alkyl halides (red phosphorus, iodine), acetic acid to give propyl acetate and chromic acids to give propionic acid.',
            subHead2: 'Storage & Distribution',
            desc4: 'N-propanol alcohol is typically bulk stored within a petrochemical storage facility for regulation. Storage is normally in a cool, dry and well ventilated facility away from oxidising agents. It should be kept out of direct sunlight, heat, and open flames. It can be stored in drummed containers such as iso tanks made of stainless steel, aluminium or carbon steel.',
            desc5: 'N-propanol alcohol is exported in bulk vessels or tank trucks. For transportation purposes, it is classed as a flammable liquid with a fire hazard rating of 2. A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa, and America. It belongs to packing group 2.',
            subHead3:'Safety & Procedures',
            desc6:'Personal protective equipment should be worn to prevent contact with the skin, eyes, nose and mouth, including respirators, safety glasses/goggles, gloves and contact lenses. If contact is made with the skin, immediately wash the contaminated area and clothing should be removed.',
            desc7:'Immediately wash the eyes with large amounts of water and seek medical attention immediately. Seek fresh air if large amounts of n-propanol have been inhaled.'
          },
          used: {
            head1: 'What is 1-propanol used for?',
            subHead1:'Industry Uses',
            desc1: '1-propanol is used as a solvent in the manufacturing of pharmaceuticals, polishes, dental lotions, coatings, lacquers, printing inks, natural gums, pigments, intermediates, dye solutions, antifreeze, fuel additives, paint additives and de-greasing fluids. It is also used as a chemical intermediate to create esters, halides, propyl amines and propyl acetate. The end-user markets of this product are the cosmetics, cleaning, motor, printing, coatings and chemical industries.',
            desc1_2: '1-propanol is also used as fuel in engines due to its high-octane count.  However, due to its expensive nature and low energy gains, it is not commonly used.',
            subHead2: 'Commercial Uses',
            desc2: '1-propanol is used as a solvent in antifoaming in cosmetics, perfumes, flavours, fragrances, air care products, cleaning and furnishing products, paints, coatings, inks, personal care products, soaps and window cleaner.',
          },

        },
      },
    ],
  },
  {
    id: 3,
    name: 'Automative',
    products: [
      {
        id: 1,
        name: 'Antifreeze C2053',
        details: {
          whatIs: {
            head1: 'Antifreeze C2053',
            sub1: 'Engine coolant concentrate based on monoethylene glycol and organic additives, suitable for petrol or diesel engines',
            sub_desc1: 'As a result of the corrosion inhibitors which have a very low depletion rate, the C2053 coolant has a long life. It should be replaced every five years or every 250,000 km for passenger vehicles and 1,000,000km for trucks/commercial vehicles. However, original manufactures instructions should always be followed when replacing coolant, and so this will depend on the vehicle.',
            sub_desc2: 'While deionised or demineralised water is best, coolant C2053 has been formulated to be usable with different water qualities, including hard water.',
            sub_desc3:'Freeze protection offered by the coolant increases as a higher concentration is used. At 50% volume of C2053 and 50% H2O, freeze protection is -40oC. For colder climates, a higher concentration can be used, which means the coolant mix can provide protection as low as -70oC.'
          },
          produce: {
            head1: 'Benefits',
            desc1: 'Increased lifetime – C2053 has corrosion inhibitors with a very low depletion rate',
            desc2: 'Protection against frost (dependent on concentration)',
            desc3: 'Eliminates deposit problems due to hard water',
            desc4: 'Protection of the joints of water pumps by eliminating abrasive solids',
            desc5: 'Improved anti-corrosion protection for the cooling systems of vehicles (especially aluminium)',
            desc6: 'Excellent anti-foaming properties'
          },
          distribute: {
            head1: 'Quality Standards',
            desc1: 'Coolant C2053 meets or exceeds the following European and International quality standards:',
            desc2:'AFNOR NF R15-601 (France)',
            desc3: 'AS 2108 (Australia)',
            desc4: 'ASTM D3306 (USA)',
            desc5: 'BS 6580: 2010 (UK)',
            desc6: 'CUNA NC 956-16 (Italy)',
            desc7: 'ONORM V 5123 (Austria)',
            desc8: 'R443 tests (Germany)',
            desc9: 'SAE J1034 (USA)',
            desc10: 'UNE 26361-88 (Spain)',
            desc11: 'FVV Heft R443'
          },

        },
      },
      {
        id: 2,
        name: 'Antifreeze C2054',
        details: {
          whatIs: {
            head1: 'Antifreeze C2054',
            sub1: 'Engine coolant concentrate formulated to be a competitively priced alternative. Based on monoethylene glycol and organic additives and suitable for petrol or diesel engines',
            sub_desc1: 'The C2054 coolant is a more budget-friendly formulation of the C2053 coolant with both using the latest organic additive technology (OAT). Despite this lower price point, C2054 offers 3 years of corrosion protection for engines and exceeds core European and International standards.',
            sub_desc2: 'The economical OAT formulation of C2054 contains no nitrates, amines, phosphates, borates, or silicates. Antifreeze C2054 also offers excellent anti-foaming characteristics and improved anticorrosion protection.',
          },
          produce: {
            head1: 'Benefits',
            desc1: 'Budget price point while offering 3 years corrosion protection',
            desc2: 'Highly stable formulation',
            desc3: 'Improved anti-corrosion protection for the cooling systems of vehicles (especially aluminium)',
            desc4: 'User and environmentally friendly',
          },
          distribute: {
            head1: 'Quality Standards',
            desc1: 'Coolant C2054 meets or exceeds the following European and International quality standards:',
            desc2:'AFNOR NF R15-601 (France)',
            desc3: 'AS 2108 (Australia)',
            desc4: 'ASTM D3306 (USA)',
            desc5: 'BS 6580: 2010 (UK)',
            desc6: 'CUNA NC 956-16 (Italy)',
            desc7: 'SAE J1034 (USA)',
            desc8: 'UNE 26361-88 (Spain)',
          },

        },
      },
      {
        id: 3,
        name: 'Antifreeze C2230',
        details: {
          whatIs: {
            head1: 'Antifreeze C2230',
            sub1: 'Traditional ethylene glycol based coolant concentrate formulated for use in all engines, including those constructed from aluminium alloys',
            sub_desc1: 'Recommended coolant for general purpose light duty automotive applications such as passenger vehicles and light commercial vehicles.',
          },
          produce: {
            head1: 'C2230 Specifications',
            desc1: 'AFNOR NF R15-601 (France)',
            desc2: 'AS 2108 (Australia)',
            desc3: 'ASTM D3306 (USA)',
            desc4: 'BS 6580: 2010 (UK)',
            desc5: 'CUNA NC 956-16 (Italy)',
            desc6: 'ONORM V 5123 (Austria)',
            desc7: 'C2230 successfully passes the FVV Heft',
            desc8: 'R443 tests (Germany)',
            desc9: 'SAE J1034 (USA)',
            desc10: 'UNE 26361-88 (Spain)'
          },
          distribute: {
            head1: 'Features',
            desc1: 'Long established robust formulation',
            desc2:'Excellent compatibility',
            desc3: 'Technology based on silicates and borates',
            desc4: 'Uses sophisticated silicate stabilisation technology',
            desc5: 'Contains no nitrites, amines or phosphates (NAP free)',
            desc6: 'Excellent anti foaming characteristics',
            desc7: 'Available in concentrate or ready to use',
          },
          used: {
            head1: 'Benefits',
            desc1: 'Peace of mind for quality and performance',
            desc2: 'Provides anti-corrosion protection for all metals and alloys in cooling systems of older and modern vehicles alike',
            desc3: 'Avoids potential gel formation',
            desc4: 'User and environmentally friendly',
            desc5: 'Helps protect the water pump and cooling components',
            desc6: 'Added convenience to the end user and versatile in various environmental climates'
          },

        },
      },
      {
        id: 4,
        name: 'Antifreeze C3053',
        details: {
          whatIs: {
            head1: 'Antifreeze C3053',
            sub1: 'Premium low toxicity engine coolant concentrate based on mono propylene and suitable for petrol and diesel engines.',
            sub_desc1: 'The coolant has a long life of up to 250,000km for passenger vehicles and up to 1,000,000km for trucks. The C3053 coolant has been specially formulated to be low toxicity and contains no nitrates, amines, phosphates, borates and silicates.',
            sub_desc2: 'C3053 is the low toxicity variant of C2053 and can technically replace the coolant. C3053 is additionally suitable for non-automotive applications, including renewables, such as for heat transfer systems',
          },
          produce: {
            head1: 'Benefits',
            desc1: 'Minimises downtime due to the longer lifetime of the coolant',
            desc2: 'Low toxicity means the product is environmentally friendly',
            desc3: 'Highly convenient due to the wide potential applications for C3053',
          },
          distribute: {
            head1: 'Quality Standards',
            desc1: 'Coolant C3053 meets or exceeds the following European and International quality standards:',
            desc2: 'AFNOR NF R15-601 (France)',
            desc3: 'BS 6580: 2010 (UK)',
            desc4: 'ASTM D3306 Type II (USA)',
          },

        },
      },
      {
        id: 5,
        name: 'Antifreeze C3054',
        details: {
          whatIs: {
            head1: 'Antifreeze C2054',
            sub1: 'C3054 propylene based coolant concentrates.',
          },
        },
      },
      {
        id: 6,
        name: 'DOT 3 Brake Fluid?',
        details: {
          whatIs: {
            head1: 'What is DOT 3 Brake Fluid?',
            sub1: 'DOT 3 brake fluid is polyethylene glycol-based fluid that has been designed to withstand very cold temperatures without thickening and to endure high temperatures without boiling.  The typical boiling temperature of DOT 3 brake fluid is around 250° C.  This product usually has a yellow to amber appearance and a mild glycol odour.  This product is slightly soluble in water however this does degrade the quality of the fluid if water mixes with the product.  All DOT brake fluids must meet an industrial standard to be allowed for sale in the market place.',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'DOT-3 brake fluid is a mixture of glycerin and alcohol, otherwise known as glycol, with extra additives to give it the robust characteristics that are required.',
          },
          distribute: {
            head1: 'Storage and Distribution',
            desc1: 'A chemical wholesaler would have a bulk petrochemical storage facility to maintain the product.  Storage is normally in a cool, dry and well ventilated facility.  DOT 3 brake fluids should be kept out of direct sunlight and exposure to moisture.  Solvents such as DOT 3 brake fluid should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
            desc2:'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, DOT 3 brake fluid is classed as only moderately flammable with a flammability rating of 1.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.',
          },
          used: {
            head1: 'Uses',
            desc1: 'Brake fluid is used in braking systems of automobiles (commercial and industrial).  Due to its viscosity, the fluid is able to transfer a manipulated force through hydraulic lines to the braking mechanism at the wheels.',
          },

        },
      },
      {
        id: 7,
        name: 'DOT 4 Brake Fluid',
        details: {
          whatIs: {
            head1: 'DOT 4 Brake Fluid',
            sub1: 'Solventis produce a range of DOT 4 brake fluids in a range of equilibrium reflux boiling points to suit individual customer requirements.',
          },
          produce: {
            subHead1: 'DOT4 XHD255',
            desc1: 'A high quality hydraulic brake fluid. A glycol ether based fluid formulated to exceed the requirements of the major internationally recognised hydraulic brake fluid standards. It has all the properties required to ensure safe and reliable operation of vehicle braking systems.',
            subHead2: 'DOT4 XHD260 Premium',
            desc11: 'A premium hydraulic brake fluid. A glycol ether based fluid formulated to exceed the requirements of the major internationally recognised hydraulic brake fluid standards.',
            subHead3: 'DOT4 LV OEM Standard',
            subHead3_des1: 'Eliminates deposit problems due to hard water',
            desc4: 'A low-viscosity hydraulic brake fluid. A glycol ether based fluid formulated to exceed the requirements of the major internationally recognised hydraulic brake fluid standards. It has all the properties required to ensure safe and reliable operation of vehicle braking systems. Ideal for use in today’s modern and advanced braking systems (ABS) as well as electronic stability programs (ESP).',
            subHead4: 'Super DOT4 OEM Standard',
            subHead4_des1: 'A high wet equilibrium reflux boiling point brake fluid. A glycol ether based fluid formulated to exceed the requirements of the major internationally recognised hydraulic brake fluid standards. It has all the properties required to ensure safe and reliable operation of vehicle braking systems. Specific use in vehicles with electronic stability programs.'
          },

        },
      },
      {
        id: 8,
        name: 'DOT 5.1 Brake Fluid',
        details: {
          whatIs: {
            head1: 'DOT 5.1 OEM Standard Brake Fluid',
            sub1: 'A premium hydraulic brake fluid. A glycol ether based fluid formulated exclusively to exceed the requirements of the major internationally recognised hydraulic brake fluid standards.',
            sub_desc1: 'It has all the properties required to ensure safe and reliable operation of vehicle braking systems. Specialist applications, primarily racing vehicles and motorcycles.',
          },
          produce: {
            head1: 'Standards',
            desc1: ' FMVSS No 116 DOT 5.1',
            desc2: ' SAE J1704',
            desc3: 'ISO 4925 Class 5.1',
          },
          distribute: {
            head1: 'Features and Benefits',
            desc1: 'High Boiling Point – minimises the risk of vapour lock occurring in the wheel cylinder, even under the most extreme conditions',
            desc2:'High Wet Boiling Point – ensures continued vapour lock protection by maintaining a high boiling point throughout the service life of the fluid',
            desc3: 'Optimal Viscosity – minimal low temperature viscosity ensures system responsiveness is maintained in very cold conditions whilst maximal high temperature viscosity ensures adequate lubricity and leakage prevention are maintained at high operating temperatures',
            desc4: 'Corrosion Inhibition – protects the full range of metallic components in the braking system from corrosion damage that can cause excessive seal wear or even loss of fluid and potential system failure',
            desc5: 'Rubber Compatibility – with the range of elastomeric material commonly found in braking systems, maximises the working life of system seals to ensure safe and reliable system operation',
            desc6: 'Fluid Compatibility – can be safely mixed with other brake fluids meeting the both DOT3 and DOT4 specifications',
            desc7: 'Fluid Stability – against both high temperature and oxidation ensures stable performance characteristics for a long and reliable service life.',
          },

        },
      },
      {
        id: 9,
        name: 'Screenwash Concentrates',
        details: {
          whatIs: {
            head1: 'Screenwash Concentrates',
            sub1: 'Solventis are a producer of screenwash concentrates for automotive applications.',
            sub_desc1: 'Screenwash is a product designed to give better visibility and safer driving conditions. It quickly clears the windscreen in all seasons due to its improved wetting characteristics and cleaning power.',
            sub_desc2: 'Screenwash is used in vehicle windscreen and headlight washing systems. It is added to water to provide a cleaning liquid used all year round, and used in different concentrations to provide different levels of frost protection to the wash system.',
          },
          produce: {
            head1: 'Solscreen',
            desc1: 'Solscreen is an environmentally friendly screenwash base product for use in screenwash and de-icing applications.',
            desc2: 'Solscreen is a low foaming product with good tolerance to hard water. Formulations based on Solscreen would normally include additional water at a level necessary to achieve the desired freezing point as well as additional water-soluble anionic surfactant to promote surface wetting.',
            desc3: 'Additional glycol can be included to give high flash point/low freeze products. Chemical softeners can be added for when dilution in hard water areas is required.',
            desc4: 'The product contains a bittering agent to prevent accidentally swallowing.',
            desc5: 'Its surfactants are compliant with the European Detergent Directive N° 648/2004/EC and are approved by Nordic Swan eco-labelled products.',
          },
          distribute: {
            head1: 'Features',
            desc1: 'Super concentrated formulation',
            desc2:'High alcohol content',
            desc3: 'Meets Dekra test method specifications',
            desc4: 'Fully biodegradable',
            desc5: 'All year round formulation',
            desc6: 'Can be blue dyed or citrus perfumed upon customer request',
          },
          used: {
            head1: 'Benefits',
            desc1: 'Can be diluted to provide a wide range of freeze protection levels',
            desc2: 'Provides freeze protection down to -75°',
            desc3: 'Demonstrates excellent material compatibility with elastomers, polymeric materials and decorative finishes',
            desc4: 'Safe for the environment',
            desc5: 'One product for all',
            desc6: 'Tailored to customer requirement'
          },

        },
      },
    ],
  },
  {
    id: 4,
    name: 'Chlorinated Solvents',
    products: [
      {
        id: 1,
        name: 'Methylene Chloride',
        details: {
          whatIs: {
            head1: 'What is Methylene Chloride?',
            sub1: 'Methylene chloride (also known as dichloromethane) is an organic halogen compound with the molecular formula of CH2Cl2.  It is colourless liquid with a distinctive chloroform odour that is widely used as a solvent in paint strippers and degreasing.  This product is a non-flammable liquid, having no measurable flashpoint or flammable limits in air.  It is miscible with most organic solvents but only slightly miscible in water.',
            img: '/products-img/chloride-1.jpg',
          },
          produce: {
            head1: 'How is Methylene Chloride produced?',
            desc1: 'Methylene chloride was first prepared by Henri Victor Regnault who isolated a mixture of chloromethane and chlorine that had been exposed to sunlight.  It is now commercially produced by treating either methyl chloride or methane at elevated temperatures of over 400° C.  These products then undergo a progressive chlorination which produces a mixture of by-products which are further separated out via distillation to produce methylene chloride.',
          },
          distribute: {
            head1: 'Storage and distribution of Methylene Chloride',
            desc1: 'A chemical wholesaler would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Solvents such as methylene chloride should be stored in drummed containers such as Isotanks made of stainless steel, aluminium or carbon steel.',
            desc2:'A bulk solvent distributor would normally transport this solvent in bulk vessels or tank trucks.  For transportation purposes, methylene chloride is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 3.',
          },
          used: {
            head1: 'What is Methylene Chloride used for?',
            desc1: 'Methylene chloride is predominantly used as a solvent for paint stripper, varnish removal, aerosol spray repellent and degreasing.  It is an effective solvent because of its highly volatility and stability.  It is also used in the processing of plastics, extracting fats and oils from food products.  For example, it can be used to decaffeinate coffee/tea and to prepare hops.  Methylene chloride can weld certain plastics and is therefore used in the model-making industry.  One final example of its use is in the garment printing industry for the removal of heat-sealed transfers.  The main user end markets are the paints, varnish, plastics, cosmetics and textiles industries.',
          },

        },
      },
      {
        id: 2,
        name: 'Perchloroethylene',
        details: {
          whatIs: {
            head1: 'What is Perchloroethylene?',
            sub1: 'Perchloroethylene (also known as tetrachloroethene) is a chlorocarbon with the molecular formula of C2Cl4.  It is a colourless liquid with a sweet odour that is most commonly used as a dry cleaning product of fabrics.  This product is a non-flammable liquid, having no measurable flashpoint or flammable limits in air.  It is miscible with most organic solvents but only slightly miscible in water.',
            img: '/products-img/chloride-2.jpg',
          },
          produce: {
            head1: 'How is Perchloroethylene produced?',
            desc1: 'Perchloroethylene was first synthesized by Michael faraday in 1821.  He discovered that at a high temperature chlorinolysis of hydrocarbons, he could produce perchloroethylene because the hydrocarbon thermally decomposes and causes an array of side products.  Since his discovery, a few other methods have been created.  On such method that is commonly used is when 1.2.-dichloroetane is heated above 400 ° C with chlorine and a catalyst.  The by-products then go through a distillation process to produce perchloroethylene.',
          },
          distribute: {
            head1: 'Storage and distribution of Perchloroethylene',
            desc1: 'A chemical stockist would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Solvents such as perchloroethylene should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
            desc2:'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, Perchloroethylene is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 3.',
          },
          used: {
            head1: 'What is Perchloroethylene used for?',
            desc1: 'Perchloroethylene is the predominant solvent used in the dry cleaning industry because it is non-flammable, stable but highly volatile.  It is safe to use on most textiles, fibres and dyes without causing damage to the garment.  It is highly effective at removing oils, greases and fats from textiles due its high boiling point and volatile nature.  A wide array of industries use perchloroethylene because it is excellent at degreasing metal parts during the production of products.  It can also be used in extracting fats, dissolving rubber, paint removal, water repellent, brake cleaning and a carrier solvent.  It was also historically used as a chemical intermediate in the manufacture of hydrofluorocarbon (HFC) 134a.',
          },

        },
      },
    ],
  },
  {
    id: 5,
    name: 'Esters',
    products: [
      {
        id: 1,
        name: 'Butyl Di Glycol Acetate',
        details: {
          whatIs: {
            head1: 'What is Butyl Di Glycol Acetate?',
            sub1: 'Butyl di glycol acetate (also known as BDGA, diethylene glycol monobutyl ether acetate, butyl diethoxol acetate, and butyl diglycol) is a clear, colourless liquid which has a faint, mild odour and the formula C10H20O4.  It is slightly soluble in water and is miscible with organic solvents.',
            img: '/products-img/esters-1.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'BDGA is produced by reacting ethylene oxide with anhydrous n-butyl alcohol to form diethylene glycol butyl ether.  The ether is then reacted with acetic acid to form butyl diglycol acetate.',
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Butyl di glycol acetate is transported in steel drums.  It is not classified as dangerous for any form of transport.  It has a flash point of 124° C (closed cup) and a specific gravity of 0.98.',
          },
          used: {
            head1: 'What is Butyl Di Glycol Acetate used for?',
            desc1: 'The main application for BDGA is as a solvent in formulations for paints, cleaning fluids, coatings and inks.  In the coatings industry it is utilized as latex coalescent for water-based industrial coatings.  In the paint industry, it is a high boiling solvent and leveling agent, and a coalescent in paints and lacquers.  It is an effective solvent for cleaning fluids and is now marketed as a cleaning agent in the electronics industry.  In the ink industry it is valued as a solvent for specialty printing inks and for ball point pen pastes.  It is also a suitable solvent for dyes used in wood stains and furniture polishes.',
          },

        },
      },
      {
        id: 2,
        name: 'Butyl Glycol Acetate',
        details: {
          whatIs: {
            head1: 'What is Butyl Glycol Acetate?',
            sub1: 'Butyl Glycol Acetate (also known as 2-butoxyethyl acetate; ethylene glycol butyl ether acetate; and 2-butoxyethanol acetate) has the chemical formula C8H16O3, and is a clear, colourless to pale yellow liquid.  It has a mild and pleasant ester odour and is only sparingly soluble in water but is miscible with many common organic solvents, for example, alcohols, ketones, aldehydes, ethers, glycols, and glycol ethers.  It is this solvent power, combined with its’ low volatility, that sees Butyl Glycol Acetate employed in many branches of industry.',
            img: '/products-img/esters-2.jpg',
          },
          produce: {
            head1: 'How is Butyl Glycol Acetate Produced?',
            desc1: 'The first stage in the production of Butyl Glycol Acetate is to react ethylene oxide with anhydrous n-butyl alcohol.  The product of this is ethylene glycol butyl ether which is then reacted with acetic acid, acetic anhydride, or acetic acid chloride, to form ethylene glycol butyl ether acetate, otherwise known as Butyl Glycol Acetate.',
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Butyl Glycol Acetate is stable under standard conditions and has a specific gravity of 0.9422 and a Flash point of 71.1o C (closed cup).  It should be stored in a cool, well-ventilated area that is away from all possible sources of ignition, and the container should be tightly sealed until ready for use.',
            desc2:'Butyl Glycol Acetate is usually transported in carbon steel, or stainless steel, drums or in tank cars.  It is not regulated for transport but is Flammable and should also be labelled as Xn, as it is Harmful when ingested.',
          },
          used: {
            head1: 'What is Butyl Glycol Acetate used for?',
            desc1: 'Butyl Glycol Acetate is a chemical that has good solvent power and it is this degree of solvency that sees Butyl Glycol Acetate employed in industry.  The main use for it is in the coatings industry where it improves the gloss and flow of coatings that are baked at temperatures of 150-200 oC.  It also improves the brushability and flow of cellulose nitrate and cellulose ether lacquers, and of paints formulated from chlorinated binders.  Butyl Glycol Acetate is also a good solvent for urethane finishes and is a film coalescing aid for polyvinyl latex acetate.',
            desc2: 'Butyl Glycol Acetate also has applications in the printing industry where it is a component of flexographic, gravure, and screen-printing inks.  This is because of the slow evaporation rate of Butyl Glycol Acetate which makes it ideal for use in these specialty printing inks.',
            desc3: 'It is also found in in ball pen pastes, and in dyes that are employed in furniture polishes and wood stains, and in dyes used to print and colour textiles.',
            desc4: 'Butyl Glycol Acetate is also employed in the cleaning industry where it is a component in some ink and spot removal formulations.'
          },

        },
      },
      {
        id: 3,
        name: 'Ethyl Acetate',
        details: {
          whatIs: {
            head1: 'What is Ethyl Acetate?',
            sub1: 'Ethyl acetate (also known as ethyl ethanoate, acetic acid ethyl ester, acetoxyethane, 1-acetoxyethane, EtOAC, ETAC, EA) is an organic ester compound with a molecular formula of C4H8O2. It is a colourless liquid with a fruity characteristic odour that is commonly recognised in glues and nail polish remover. Ethyl acetate is extremely flammable with a flashpoint of -4° C and a flammability rating of 3 and is also highly miscible with all common organic solvents (alcohols, ketones, glycols, esters) but only slightly miscibility in water. This product is commonly used as a solvent for cleaning, paint removal and coatings.',
            img: '/products-img/esters-3.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Chemical and physical properties of ethyl acetate:',
              },
              {
                desc: 'Molecular Formula: C4H8O2 / CH3−COO−CH2−CH3 / CH3COOC2H5',
              },
              {
                desc: 'Synonyms: ethyl ethanoate, acetic acid ethyl ester, acetoxyethane, 1-acetoxyethane, EtOAC, ETAC, EA',
              },
              {
                desc: 'Cas Number: 141-78-6',
              },
              {
                desc: 'Molecular Mass: 88.052429 g/mol',
              },
              {
                desc: 'Exact Mass: 88.052429 g/mol',
              },
              {
                desc: 'Flashpoint: 24°F / -4°C',
              },
              {
                desc: 'Boiling Point: 171°F / 77.1 °C at 760 mm Hg',
              },
              {
                desc: 'Melting Point: −83.6 °C / −118.5 °F',
              },
              {
                desc: 'Vapour Pressure: 93.2 mm Hg at 25 °C',
              },
              {
                desc: 'Water Solubility: 64 g/L (at 25 °C)',
              },
              {
                desc:'Density: 0.902 g/cm3'
              },
              {
                desc:'Log P: 0.71'
              }
            ],
          },
          produce: {
            head1: 'How is ethyl acetate made?',
            desc1: 'There are various methods for manufacturing ethyl acetate. Originally, it was synthesised by distilling ethanol and acetic acid in the presence of sulfuric acid. It is now primarily produced commercially via the Tishchenko method of condensing two equivalents of acetaldehyde using an alkoxide catalyst.',
            desc2: '2 CH3CHO → CH3CO2CH2CH3',
            desc3: 'Another primary method is using Fischer esterification which involves reacting acetic acid with ethanol, a process accelerated by acid catalysis.',
            desc4: 'CH3CO2H + CH3CH2OH → CH3CO2CH2CH3 + H2O',
            desc5:'Other methods include as a by-product of the oxidation of butane with acetic acid, the ethanolysis of polyvinyl acetate, and the alkylation of acetic acid.'
          },
          distribute: {
            head1: 'Handling, Storage & Distribution',
            subHead1: 'Hazards & Toxicity',
            desc1: 'Ethyl ethanoate has an NFPA health rating of 1 and can cause significant irritation. Overexposure to the eyes, nose and skin can cause irritation, drowsiness, and unconsciousness. If inhaled, ethyl ethanoate can irritate the throat and respiratory passages and cause headaches and nausea.',
            desc2:'An NFPA fire rating of 3 indicates that it can be ignited under almost all ambient temperature conditions. Heat, sparks, or flames can ignite this solvent and create vapours that will travel to the source of the ignition. These vapours are heavier than air and will, therefore, spread into surrounding areas.',
            desc3: 'An instability rating of 0 indicates that it is normally stable, even under fire conditions.',
            subHead2: 'Safety & Procedures',
            desc4: 'Personal protective equipment should be worn at all times when handling ethyl ethanoate. Eye protection must be worn even when contact lenses are being used. If contaminated, hands should be washed immediately, and clothing should be removed and replaced.',
            desc5: 'In the case of spillage, isolation of leak area of 50 metres in all directions is recommended. All ignition or flame sources should be removed and entryways into water systems and sewers should be prohibited. Soak up and absorb the spillage using combustible materials. Only attempt to eliminate the leak if it is safe to do so.',
            subHead2_desc1:'Responses for firefighting include using dry chemical, CO2, water spray or alcohol-resistant foam extinguishers for smaller fires. Larger fires require fog or alcohol-resistant foam.',
            subHead3: 'Storage & Distribution',
            desc6: 'A chemical stockist would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Ethyl acetate should be kept out of direct sunlight, heat and open flames.  Ethyl acetate should be stored in drummed containers such as iso tanks made of stainless steel, aluminium or carbon steel.',
            desc7: 'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, ethyl acetate is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 2.'
          },
          used: {
            head1: 'What is ethyl acetate used for?',
            desc1: 'Ethyl acetate has many uses in the industrial and commercial industries as both a solvent and a diluent.',
            subHead2: 'Industry Uses',
            desc2: 'Ethyl acetate is used in various industrial applications such as in paints as a hardener, adhesives, paint and coating additives, degreasing solvents, active agents, processing aids and plasticisers.  At a lower purity, it can be used in printing and pharmaceuticals. It is also used in coating formulations for wood furniture, agricultural, construction equipment, mining equipment and marine uses.',
            desc2_2: 'Laboratory uses include in mixtures used in column chromatography and extractions.',
            subHead3: 'Commercial Uses',
            desc3: 'The most common use of ethyl acetate is as an ester in wine as it is naturally produced during the fermentation process. It contributes to wine’s fruity flavours. It also contributes to the decaffeination of coffee beans and tea leaves.',
            desc4:'Commercial products containing this solvent include automotive products, cleaning and furnishing care products, paints, coatings, inks and plastics. It is also used in air care products and perfumes, as it evaporates quickly leaving only the scent to remain.',
            desc5:'As a high purity solvent, it is used in cleaning electric circuit boards and as a nail polish remover. At a lower purity, it can be used as in perfumes, food, decaffeination of tea/coffee and a carrier solvent for herbicides. '
          },

        },
      },
      {
        id: 4,
        name: 'Iso Butyl Acetate',
        details: {
          whatIs: {
            head1: 'What is Iso Butyl Acetate?',
            sub1: 'Iso butyl acetate is a chemical compound with a molecular formula of C6H12O2. This product is a colourless liquid that has a fruity ester odour. It is commonly used as a solvent in the production of polymers, resins, oils and cellulose. This product is highly flammable with a flash point of 18º C and a flammability rating of 3.  It is highly miscible with all common organic solvents (alcohols, ketones, glycols, esters) but only slightly miscibility in water.',
            img: '/products-img/esters-4.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'The most common method for chemically manufacturing iso butyl acetate is via the esterification of isobutyl alcohol and acetic acid which are heated in the presence of a strong acid.',
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'A chemical wholesaler would have a bulk petrochemical storage facility to maintain the product. Storage is normally in a cool, dry and well ventilated facility away from oxidising agents. Iso butyl acetate should be kept out of direct sunlight, heat and open flames. Solvents such as iso butyl acetate should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
            desc2:'A bulk chemical distributor would normally export this solvent in bulk vessels or tank trucks. For transportation purposes, iso butyl acetate is classed as a flammable liquid with a fire hazard rating of 2. A full bulk chemical exporter would distribute the solvent through-out regions such as the UK, Europe, Africa and America. This product is a packing group 2.',
          },
          used: {
            head1: 'What is Iso Butyl Acetate used for?',
            desc1: 'Iso Butyl Acetate has great solvency traits for polymers, resins, oils, cellulose and readily thinned with aliphatic hydrocarbons. It is mainly used in the paints and coatings industry for wood varnishes, architectural coatings, printing inks and adhesives. It can replace n-butyl acetate if a coating needs to dry quicker. It is also widely used in aerosol sprays, thinners, sealants, cleaners, fragrance, cosmetics and personal care-products. The primary end user market of this product is paints, coatings, cosmetics and cleaning industries.',
          },

        },
      },
      {
        id: 5,
        name: 'Iso Propyl Acetate',
        details: {
          whatIs: {
            head1: 'What is Iso Propyl Acetate?',
            sub1: 'Iso propyl acetate is an organic compound with a molecular formula of C5H10O2.  It is commonly used as a solvent for cellulose, plastics, oils and fats.  This product is a clear, colourless liquid that has a fruity ester odour.  This product is highly flammable with a flash point of 2° C and a flammability rating of 3.   It is highly miscible with all common organic solvents (alcohols, ketones, glycols, esters) but has only slight miscibility in water.',
            img: '/products-img/esters-5.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'The most common method for chemically manufacturing iso propyl acetate is via the esterification of isopropanol and acetic acid which are heated in the presence of a strong acid.',
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'A chemical stockist would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Iso propyl acetate should be kept out of direct sunlight, heat and open flames.  Solvents such as iso propyl acetate should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
            desc2:'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, iso propyl acetate is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 2.',
          },
          used: {
            head1: 'What is Iso Propyl Acetate used for?',
            desc1: 'The major use of this product is in printing inks (especially gravure machines) because it is fast evaporating which ensures that the ink dries quickly.  This ink can be used for printing magazines, catalogues, labels and wallpaper.  The other common use of iso propyl acetate is a solvent in the production of cellulose, plastics, oils and fats.  It is also used in the fragrance, cosmetic and personal care industry as a solvent.  An alternative use is as a surfactant in cleaning fluids, coatings for cars and nail care.  The main user end markets are the printing, coatings, cleaning and cosmetic industries.',
          },

        },
      },
      {
        id: 6,
        name: 'Methyl Acetate',
        details: {
          whatIs: {
            head1: 'What is Methyl Acetate?',
            sub1: 'Methyl acetate (also known as methyl ethanoate, acetic acid methyl ester, MeOAc, Tereton, Devoton) is a carboxylate ester with a molecular formula of C3H6O2. It is a clear, colourless liquid that has a typical ester odour similar to glues and nail polish removers. It is very flammable with a flashpoint of -10° C and a flammability rating of 3. Methyl acetate is commonly used in low toxicity solvents such as glues, nail polish removers.',
            img: '/products-img/esters-6.jpg',
            sub_desc1: 'It is highly miscible with all common organic solvents (alcohols, ketones, glycols, esters) but has only slight miscibility in water, but becomes more soluble in water with elevated temperatures. It is commonly found in fruits such as apples, grapes and bananas.'
          },
          technicalProps: {
            head: 'Methyl ethanoate technical properties',
            props: [
              {
                desc: 'Chemical and physical properties of methyl acetate:',
              },
              {
                desc: 'Molecular Formula: C3H6O2 / CH3COOCH3',
              },
              {
                desc: 'Synonyms: methyl ethanoate, acetic acid methyl ester, MeOAc, tereton, devoton, methyl ester of acetic acid, methylacetate',
              },
              {
                desc: 'Cas Number: 79-20-9',
              },
              {
                desc: 'Molecular Mass: 74.079 g·mol−1',
              },
              {
                desc: 'Exact Mass: 74.036779 g/mol',
              },
              {
                desc: 'Flashpoint: 14 °F / -10 °C',
              },
              {
                desc: 'Boiling Point: 134.4 °F at 760 mm Hg / 56.8 °C',
              },
              {
                desc: 'Melting Point: -144 °F / -98.0 °C',
              },
              {
                desc: 'Vapour Pressure: 170 mm Hg at 68 ° F ; 235 mm Hg at 77° F',
              },
              {
                desc: 'Water Solubility: ~25% (20 °C)',
              },
              {
                desc:'Density: 0.932 g cm−3'
              },
              {
                desc:'Log P: 0.18'
              },
              {
                desc:'Methyl acetate is a carboxylate ester as it contains a carbonyl group bonded to an OR group and is produced through the esterification of acetic acid with methanol.'
              }
            ],
          },
          produce: {
            head1: 'How is methyl acetate produced?',
            desc1: 'There are various methods of producing methyl acetate. One that is used industrially is via carbonylation. These types of reactions bring together carbon monoxide substrates. To produce methyl acetate, methanol is heated alongside acetic acid in the presence of sulfuric acid. Another method of production is the esterification of methanol and acetic acid in the presence of a strong acid. Sulfuric acid is a common catalyst also used in this reaction.',
          },
          distribute: {
            head1: 'Handling, Storage & Distribution',
            subHead1: 'Hazards & Toxicity',
            desc1: 'Methly acetate has a NFPA health rating of 2 and can cause temporary incapacitation or residual injury. If inhaled or ingested, headaches, dizziness, drowsiness and fatigue can occur. Contact with the eyes can cause irritation. It has a flammability rating of 3 and can be ignited under most ambient temperature conditions residing from its low flash point of -10 °C. When ablaze, methyl acetate emits heavy, irritating, and toxic fumes that can travel considerable distances. These vapours are also explosive and risk bursting if able to return to the source of ignition.',
            desc2:'Methyl acetate’s reactivity is aligned with other compounds of the ester group. In the presence of strong bases or acids such as sodium hydroxide or hydrochloric acid and sulfuric acid at high temperatures, it is converted back into methanol and acetic acid.',
            subHead2: 'Storage & Distribution',
            desc4: 'Methyl acetate should be stored in a storage area specialised for flammable liquids, tightly enclosed in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel. This area should be cool, dry and well-ventilated, out of direct sunlight, heat, open flames and away from strong acids and alkalis, nitrates and strong oxidisers.',
            desc5: 'A bulk solvent exporter would normally distribute in bulk vessels or tank trucks. For transportation purposes, methyl acetate is classed as a flammable liquid with a fire hazard rating of 2 and is a packing group 2.',
            subHead3: 'Safety & Procedures',
            desc6: 'Personal protective equipment should be worn at all times when handling methyl ethanoate to prevent contact with the skin, eyes, nose and throat. If contact is made with the skin, immediately wash the contaminated area and seek medical attention. If contact is made with the eyes, immediately wash with large amounts of water. If swallowed, seek medical attention immediately.',
            desc7: 'When opening containers or moving opened containers, they must be fully resealed and maintained in an upright position to prohibit leakages.',
            desc8: 'If methyl ethanoate is spilt, isolate the leak for at least 50 metres in all directions. In the event of a fire, water extinguishers may be ineffective due to methyl acetate’s low flashpoint. Foam extinguishers that are alcohol-resistant are suitable for small and large fires.'
          },
          used: {
            head1: 'What is methyl ethanoate used for?',
            subHead2: 'Industry Uses',
            desc2: 'Industry uses of methyl ethanoate involve the reaction of carbonylation to produce acetic anhydride. It is also used in paint and coating adhesives, lubricants, intermediates, processing aids and as a solvent in paint, glue, nail polish and graffiti removers.',
            desc2_2: 'Methyl ethanoate is also used as a chemical intermediate for the synthesis of chlorophacinone, diphacinone, fenfluramine, o-methoxyphenylacetone, p-methoxyphenylacetone, methyl cinnamate, methyl cyanoacetate, methyldopa, and phenylacetone and in the manufacturing of cellulose adhesives and perfumes.',
            subHead3: 'Commercial Uses',
            desc3: 'Methyl ethanoate is used commercially as a flavouring agent in food additives for rum, brandy, whisky, in adhesives, cleaning products, personal care and cosmetic products, lubricants, fast-paced drying paints such as lacquers, motor vehicle coatings, furniture coatings, industrial coatings (low boiling point) inks, resins, oils artificial leathers and electronic products. The main user end markets for this product are the paint, coatings, cosmetic, textiles and motor industries.',
          },

        },
      },
      {
        id: 7,
        name: 'N-Butyl Acetate',
        details: {
          whatIs: {
            head1: 'What is N-Butyl Acetate?',
            sub1: 'Normal butyl acetate (also known as n-butyl acetate, butyl acetate, butyl ethanoate, 123-86-4) is a clear, colourless ester with a molecular formula of C6H12O2. It is found in various fruits, red apples in particular, and employs characteristic flavours with a sweet banana smell. This organic compound has a variety of uses including as a food flavouring, as a solvent in the process of lacquer production, in polishes, inks, adhesives and occasionally as a high-boiling solvent.',
            img: '/products-img/esters-7.jpg',
          },
          technicalProps: {
            head: 'Technical Properties ',
            props: [
              {
                desc: 'Chemical and physical properties of Butyl Acetate:',
              },
              {
                desc: 'Molecular Formula: C6H12O2 / CH3COO(CH2)3CH3',
              },
              {
                desc: 'Synonyms: n-butyl acetate, butyl acetate, butyl ethanoate, butyl ester',
              },
              {
                desc: 'Molecular Formula: C6H12O2 / CH3COO(CH2)3CH3',
              },
              {
                desc: 'Molecular Mass: 116.160 g/mol-1',
              },
              {
                desc: 'Exact Mass: 116.08373 g/mol',
              },
              {
                desc: 'Flashpoint: 72 °F / 22 °C',
              },
              {
                desc: 'Boiling Point: 259.7 °F / 126.1 °C',
              },
              {
                desc: 'Melting Point: −108 °F / −78 °C',
              },
              {
                desc: 'Vapour Pressure: 10 mm Hg at 68 ° F',
              },
              {
                desc: 'Water Solubility: 0.68 g/100 mL (20 °C)',
              },
              {
                desc:'Density: 0.8825 g/cm3 (20 °C)'
              },
              {
                desc:'Log P: 1.82'
              },
              {
                desc:'Butyl Acetate is highly flammable and highly miscible with many organic solvents including alcohols, esters and glycols. It is only slightly miscible in water.'
              }
            ],
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'The most common method of manufacturing butyl acetate commercially is by the esterification of butanol and acetic acid which are then heated by a catalyst such as sulfuric acid. If an isomer of butanol is used instead, you will form an isomer of butyl acetate.',
          },
          distribute: {
            head1: 'How is it handled, stored and distributed?',
            desc2:'Methyl acetate’s reactivity is aligned with other compounds of the ester group. In the presence of strong bases or acids such as sodium hydroxide or hydrochloric acid and sulfuric acid at high temperatures, it is converted back into methanol and acetic acid.',
            subHead2: 'Hazards and toxicity',
            desc4: 'Butyl acetate is classed as highly flammable both with fire (an NFPA rating of 3) and air and water reactions. It can be easily ignited by high temperatures and flames. Its vapours are also heavy and will travel to an ignition source and form explosive mixtures with the air.',
            desc5: 'It also has an NFPA health rating of 2. Avoid inhaling as this will cause headaches, drowsiness, irritation of the mouth, nose eyes, and nausea. The use of PPE equipment is required for both eyes and skin as this will help to avoid prolonged exposure of butyl acetate as it can cause dryness.',
            subHead3: 'Storage and distribution',
            desc6: 'A chemical trader would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from other strong oxidising agents and acids.  Normal butyl acetate should be kept out of direct sunlight, heat and open flames and stored in drummed containers which are tightly closed such as isotanks made of stainless steel, aluminium or carbon steel. Containers that are opened must be closed and kept grounded to prevent spillage. It is important to ensure that entry of butyl acetate into sewers, basements or waterways is prevented and that vapour is suppressed where appropriate to reduce spread and risk.',
            desc7: 'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, normal butyl acetate is classed as a flammable liquid. A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 3.',
          },
          used: {
            head1: 'What is N-Butyl Acetate used for?',
            desc1: ' Butyl acetate has a variety of industry and consumer uses with its main end-user markets including paints/lacquers, coatings, cosmetics, leather, cleaning and the pharmaceutical industries.',
            subHead2: 'Industry Uses',
            desc2: 'Normal butyl acetate’s most common industry use is in the production of lacquers and paints (due to its low volatility) as a solvent. Additionally, it has uses in the manufacturing of artificial leather, plastics adhesives and hardened coatings and topcoats.',
            desc2_2: 'It is commonly used in the pharmaceutical industry as a solvent or an extraction agent for processing oils and coatings. Other industry uses include lubricants, intermediaries, fruit flouring and various additives.',
            subHead3: 'Consumer uses ',
            desc3: 'Butyl acetate is found in several cosmetic products including as a flavouring solvent in perfumes, in fabrics and leather, in cleaning and care products for vehicles, air, and personal use and as an anticorrosive agent.',
          },

        },
      },
      {
        id: 8,
        name: 'N-Propyl Acetate',
        details: {
          whatIs: {
            head1: 'What is N-Propyl Acetate?',
            sub1: 'Normal propyl acetate (also known as n-propyl acetate, 1-propyl acetate, propyl acetate, 1-acetoxypropane, acetic acid) is an organic compound with a molecular formula of C5H10O2 / CH3COOCH2CH2CH3. It is a clear, colourless ester that has a distinguishable acetate odour, is highly flammable, highly miscible with all common organic solvents (alcohols, ketones, glycols, esters) but only slightly miscible in water.',
            img: '/products-img/esters-8.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Chemical and physical properties of n-propyl acetate:',
              },
              {
                desc: 'Chemical and physical properties of n-propyl acetate:',
              },
              {
                desc: 'Synonyms: n-propyl acetate, 1-propyl acetate, propyl acetate, npac, npa, np, normal propyl acetate, propyl ethanoate, n-propyl ethanoate, propyl ester, acetic acid, n-propyl ester, 1-acetoxypropane.',
              },
              {
                desc: 'Cas Number: 109-60-4',
              },
              {
                desc: 'Molecular Mass: 102.06808 g/mol',
              },
              {
                desc: 'Flashpoint: 14 °F / -10 °C',
              },
              {
                desc: 'Boiling Point: 214.9 ° F at 760 mm Hg',
              },
              {
                desc: 'Melting Point: -139 °F / -95 °C',
              },
              {
                desc: 'Vapour Pressure: 67.21 mm Hg',
              },
              {
                desc: 'Water Solubility: g/100ml at 16 °C: 1.6',
              },
              {
                desc:'Density: 0.886 at 68 °F'
              },
            ],
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'The primary and most common method for chemically manufacturing n-propyl acetate is the direct esterification of 1-propanol and acetic acid which are heated in the presence of a strong acid, such as sulfuric or methanesulfonic acid. An alternate method involves the ester interchange of 1-propanol with ethyl acetate.',
          },
          distribute: {
            head1: 'Handling, Storage & Distribution',
            subHead1: 'Hazards and safety',
            desc1: 'N-propyl acetate has an NFPA health rating of 1, indicating that it can irritate extensive exposure. An NFPA fire rating of 3 demonstrates that it is highly flammable and can be easily ignited by heat or sparks under ambient conditions. Its vapours travel to the source of the ignition and are heavier than air. In the case of a fire, use dry chemical, CO2 or alcohol-resistant foam. An NFPA instability rating of 0 shows that butyl tri glycol is stable underneath most conditions, including fire.',
            desc2:'Full personal protective equipment should be worn when handling n-propyl acetate to prevent contact with the skin, eyes and mouth.',
            subHead2: 'Storage and Distribution',
            desc4: 'A chemical wholesaler would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Normal propyl acetate should be kept out of direct sunlight, heat and open flames.  Solvents such as normal propyl acetate should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
            desc5: 'A bulk chemical exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, normal propyl acetate is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 2.',
          },
          used: {
            head1: 'What is N-Propyl Acetate used for?',
            desc2: 'The major use of normal propyl acetate is as a solvent in the coatings and printing industries.  It is a good solvent for these industries because it has the ability to thin many other organic compounds.  Normal propyl acetate dissolves a host of resins which make it a suitable solvent for wood lacquers and industrial finishes.  Within the printing industry it is mainly used in flexographic and special screening prints.  It is also used in aerosol sprays, nail care and as a fragrance solvent.  It can also be used as a flavouring additive due to its odour similar to pears.  The main user end markets are the printing, coatings, lacquers, cosmetic and flavouring industries.',
          },

        },
      },
    ],
  },
  {
    id: 6,
    name: 'Glycols',
    products: [
      {
        id: 1,
        name: 'Di Propylene Glycol',
        details: {
          whatIs: {
            head1: 'What is Di Propylene Glycol?',
            sub1: 'Di propylene glycol (also known as oyybispropanol, 2,2-dihydroxyisopropylether, 1,1-oxydipropane-2-ol, di-1,2-propylene glycol, and DPG) is a clear, colourless, viscous liquid with a characteristic odour and the formula C6H14O3. It is fully miscible in water and is also miscible with many organic solvents.  This solvency, combined with low toxicity and a low evaporation rate, makes DPG a chemical which is a very useful reactive intermediate in a range of industries.',
            img: '/products-img/glycols-1.png',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Di propylene glycol is produced as a byproduct of propylene glycol production which occurs in a propylene oxide hydrolysis process.  Tri propylene glycol is another by-product of this process.',
            desc2: 'It is estimated that the worldwide capacity for di propylene glycol production is approximately 107,000 tonnes per annum.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Di propylene glycol is generally stored and distributed in stainless steel, aluminium or lined tank cars, tank trucks, or drums.  It has a flash point of 124 °C (closed cup) and a specific gravity of 1.023 and is not classified as dangerous for any mode of transport.',
          },
          used: {
            head1: 'What is Di Propylene Glycol used for?',
            desc1: 'Di propylene glycol finds use as a chemical intermediate across a range of industries.  It is used as a component in the production of high volume plasticiser and, indeed, 38% of DPG is consumed in this process.  It is also an initiator in urethane polyols, and a reactant in unsaturated polyurethane resins where it adds flexibility and hydrolytic stability.  It is also used for cutting oils, in hydraulic brake fluid production, and is a solvent for agricultural chemicals such as insecticides.  It is also used as a solvent for printing inks, nitrocellulose, cellulose acetate, lacquers and coatings.  It is an ingredient in industrial soaps and also has a role in the refining industry where it is used as an extraction solvent to extract aromatics.',
            desc2: 'There is also a Fragrance Grade of di propylene glycol which is used in the cosmetics industry where it is an additive in perfumes, and in skin and hair care products, where it binds and carries the fragrance elements of the perfume being used.'
          },

        },
      },
      {
        id: 2,
        name: 'Diethylene Glycol',
        details: {
          whatIs: {
            head1: 'What is Diethylene Glycol?',
            sub1: 'Diethylene glycol (also known as DEG, 2,2-oxydiethanol and diglycol) is a clear, colourless, odourless liquid with the formula C4H10O3. It is soluble both in water and in many organic compounds and has hygroscopic properties which makes it a useful industrial chemical.',
            img: '/products-img/glycols-2.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Technical properties of diethylene glycol:',
              },
              {
                desc: 'Cas Number: 111-46-6',
              },
              {
                desc: 'Molecular Formula: C4H10O3 or (CH2CH2OH)2O',
              },
              {
                desc: 'Synonyms: Diglycol, DEG, 2,2-oxydiethanol and dihydroxy diethyl ether',
              },
              {
                desc: 'Molecular Mass: 106.12 g/mol',
              },
              {
                desc: 'Flashpoint (open cup): 143 °C (290 °F)',
              },
              {
                desc: 'Autoignition temperature: 229 °C (444 °F)',
              },
              {
                desc: 'Boiling Point: 245 °C (473 °F)',
              },
              {
                desc: 'Melting Point: -10 °C (14 °F)',
              },
              {
                desc: 'Density: 1.12 at 20 °C (68 °F)',
              },
              {
                desc: 'Log P: -1.47',
              },
            ],
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Production of diethylene glycol is generally based on the demand for, and production of, monoethylene glycol (MEG) as it is a by-product of this production process. The process consists of the oxidation of ethylene at a high temperature in the presence of a silver oxide catalyst. The ethylene oxide is then hydrated to yield diethylene glycol with monoethylene glycol and triethylene glycol as co-products.',
            desc2: 'The chemical industry tries to maximise the production of monoethylene glycol in this process, however, diethylene glycol is a very useful by-product.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Diethylene glycol can be stored in stainless steel, aluminium, or lined drums, tank cars, or tank trucks.  It has a specific gravity of 1.118 and a flashpoint of 143 °C (open cup). This results in a flammability rating of 1 under the NFPA 704 indicating the compound requires considerable preheating before ignition could occur. It is not regulated for transport on road, rail, air, or sea but it is classified as harmful and can be toxic if swallowed.',
            subHead2: 'Health hazards',
            desc4: 'The compound is rated a 1 for health under the NFPA 704 indicating that exposure should only cause a minor residual injury.',
            desc5: 'The primary health hazard with diethylene glycol is the risk of poisoning. The chemical properties of the compound make it possible to be passed as counterfeit glycerol, a highly versatile, non-toxic compound used as a sweetener in food and an antiviral in the medical industry. Many deaths have occurred because of products produced using glycerol being contaminated with diethylene glycol.',
            desc6: 'If the compound is swallowed, then fomepizole or ethanol should be promptly administered to prevent metabolism. While fomepizole has minimal adverse effects, it is a highly expensive treatment option. Later in the phases of a poisoning when DEG has metabolised, dialysis may be the only remaining option for the individual.'
          },
          used: {
            head1: 'What is diethylene glycol used for?',
            desc1: 'Diethylene glycol has a variety of uses in the industry. The tobacco industry makes use of its hygroscopic properties by utilising it as a humectant in tobacco products to control the moisture of the tobacco filler. This same property also makes it useful in the treatment of paper, cork, glue, and cellophane and it is utilised as a dehydrant in the natural gas industry where it removes water from gas pipelines.',
            desc2: 'The compound is also used as a chemical intermediate in the manufacture of unsaturated polyester resins, plasticisers, acrylate and methacrylate resins, and urethanes. In the U.S. and Western Europe, 51% of DEG is consumed in this way.',
            desc3: 'However, in Japan, it is mostly utilised as a cement grinding aid. It can also be used in petroleum solvent extraction and can be found in printing ink and drywall joint compounds.',
            desc4: 'Diethylene glycol is now being displaced by tri ethylene glycol in some of its applications as the lower toxicity of tri ethylene glycol makes it more appealing to manufacturers.'
          },

        },
      },
      {
        id: 3,
        name: 'Hexylene Glycol',
        details: {
          whatIs: {
            head1: 'What is Hexylene Glycol?',
            sub1: 'Hexylene glycol (also known as HGL, 2-methyl pentane-2,4-diol, pinakon and Diolane) is a clear, colourless liquid with a characteristic odour.  It is fully miscible in water and has the chemical formula C6H14O2.  Hexylene glycol is a compound that appears in a large number of products that are used commercially and industrially',
            img: '/products-img/glycols-3.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Hexylene glycol is formed from the achiral reagents hydrogen and diacetone alcohol.',
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Hexylene Glycol is stored in bulk storage or stainless steel drums and is transported by tank truck.  It is classed as non-hazardous for air, sea, and road freight but is classed as an irritant.  It has a specific gravity of 0.925 and a flash point of 93 °C (closed cup).',
          },
          used: {
            head1: 'What is Hexylene Glycol used for?',
            desc1: 'The single largest user of hexylene glycol is the industrial coatings industry which uses approximately 45% of the HGL produced world-wide.  It is a component in lacquers and varnishes, and is a solvent plasticiser in surface coatings.  It is also a component in both oil and water- based paints, and in paint strippers.',
            desc2: 'Hexylene glycol is also used as a chemical intermediate, which accounts for approximately 20% of its consumption, and another 10% is used on oil and natural-gas fields where it is both a down hole lubricant, and a grinding and extraction aid.',
            desc3: 'Hexylene glycol is also employed as an antifreeze, and as a coupling agent for hydraulic fluids.  It is a moisturising, and setting, agent in the manufacture of textiles and can also be found in the cosmetics industry where it is a component of fragrances and bath, hair, and soap preparations.  It also has a role as a wetting agent in pesticide formulations and is a solvent in the preparation of dyes.'
          },

        },
      },
      {
        id: 4,
        name: 'Mono Ethylene Glycol',
        details: {
          whatIs: {
            head1: 'What is Mono Ethylene Glycol?',
            sub1: 'Mono ethylene glycol (also known as MEG, EG, 1,2-ethanediol or 1,2-Dihydroxyethane) is an organic compound with the formula C2H6O2. It is a slightly viscous liquid with a clear, colourless appearance and a sweet taste that emits virtually no odour. It’s miscible with water, alcohols, and many other organic compounds and is primarily used in the industry for manufacturing polyester fibres and as a component in the production of antifreeze, coolants, aircraft anti-icers and de-icers.',
            img: '/products-img/glycols-4.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Technical properties of Mono Ethylene Glycol:',
              },
              {
                desc: 'Molecular Formula: C2H6O2 / (CH2OH)2 / HOCH2CH2OH',
              },
              {
                desc: 'Synonyms: monoethyleneglycol, mono ethyl glycol, meg glycol, ethylene glycol, 1,2-ethanediol, Ethane-1,2-diol, EG, industrial glycol, 1,2-Dihydroxyethane, glycol alcohol.',
              },
              {
                desc: 'Synonyms: Diglycol, DEG, 2,2-oxydiethanol and dihydroxy diethyl ether',
              },
              {
                desc: 'Cas Number: 107-21-1',
              },
              {
                desc: 'Molecular Mass: 62.07 g/mol',
              },
              {
                desc: 'Exact Mass: 62.036779 g/mol',
              },
              {
                desc: 'Flashpoint: 232 °F/ 111.11 °C',
              },
              {
                desc: 'Autoignition temperature: 770 °F / 410 °C',
              },
              {
                desc: 'Boiling Point: 387.7 °F / 197.6 °C at 760 mm Hg',
              },
              {
                desc: 'Melting Point: 9 ° F / -12.8 °C',
              },
              {
                desc: 'Vapour Pressure: 0.06 mm Hg at 68 °F / 20 °C'
              },
              {
                desc: 'Density: 1.115 at 68 °F'
              },
              {
                desc: 'Log P: -1.69'
              }
            ],
          },
          produce: {
            head1: 'How is Mono Ethylene Glycol Produced?',
            desc1: 'The intermediate ethylene oxide is used to convert ethylene (ethene) into ethylene glycol. Ethylene oxide is obtained through oxidation and is then reacted with water to give mono ethylene glycol with di and tri ethylene glycols as co-products:',
            desc2: 'C2H4O + H2O → HOCH2CH2OH',
            desc3: 'Acids and bases can catalyse this reaction, or it can occur at neutral pH under elevated temperatures. Yields of up to 90% can be achieved with acidic or neutral pH with a large excess of water.',
            desc4: 'Mono ethylene glycol is also manufactured via the hydrogenation of dimethyl oxalate in the presence of a copper catalyst or via the acetoxylation of ethylene.',
            desc5: 'Global demand for Monoethylene Ethylene Glycol (MEG) is strong with the market worth $25 billion and expected to grow 6% annually to 2024. This is especially due to the increased production of polyethene terephthalate (PET) and the demand for polyesters in the Asia Pacific. Demand is strongest in China where approximately 70% of the world’s MEG output is consumed.'
          },
          distribute: {
            head1: 'How is Mono Ethylene Glycol Stored and Distributed?',
            subHead1: 'Storage & Handling',
            desc1: 'Under the NFPA 704, mono ethylene glycol is rated as a 0 for instability, indicating that mono ethylene glycol is usually stable. Mono ethylene glycol’s vapours are heavier than air and will travel to surrounding areas. Due to its high flashpoint of 111.11°C, the chemical has a flammability rating of 1, indicating that it requires considerable preheating for ignition and combustion to occur. However, in storage, MEG should be kept away from heat, sparks, and open flames. If a fire was to occur, alcoholresistant foam or water spray should be used to fight fires with a focus on preventing the spillage from reaching water sources or sewers.',
            subHead2: 'Mono Ethylene Glycol Health Hazards',
            desc4: 'The chemical has high toxicity when ingested with the major danger being a result of the sweet taste encouraging further consumption; this increases the danger posed to animals and children. Ingestion of sufficient amounts is fatal if left untreated with the ethylene glycol being oxidised in the body to glycolic acid and then the toxic chemical, oxalic acid. MEG ingestion impacts the central nervous system, heart and can cause acute kidney failure.',
            desc5: 'Eye exposure to mono ethylene glycol vapours can irritate, and therefore it is suggested goggles should be worn while handling the chemical. Exposure to ethylene glycol in liquid form has the potential to cause more serious eye damage. If contact is made with the eyes, immediately wash with plenty of water and seek medical attention.',
            desc6: 'Skin exposure with MEG can also irritate and so gloves should be worn. If the skin does become contaminated, all wet clothing should be removed, and the skin washed with water. Inhalation exposure to high levels of ethylene glycol can cause irritation, and potentially intolerable respiratory discomfort and coughs. If excessive inhalation occurs, the individual should be removed from the environment, breathe fresh air, and seek medical attention.'
          },
          used: {
            head1: 'Mono Ethylene Glycol Uses',
            desc1: 'Mono ethylene glycol is more commonly used as a polymer precursor but also in antifreeze as well as in a wide variety of industries.',
            subHead2: 'Polymer Precursor',
            desc2: 'There is strong global demand for mono ethylene glycol in the plastic industry as it is a vital ingredient in the production of polyester fibres, films, and resins, one of which is polyethene terephthalate (PET). PET is created by heating ethylene glycol with terephthalic acid in an esterification reaction. This chemical is then converted into plastic bottles, microwaveable containers and is even used in the textile industry. It is estimated that 70-80% of all the MEG consumed is used as a chemical intermediate in these polyester production processes.',
            subHead3: 'Antifreeze',
            desc3: 'A primary industry use of mono ethylene glycol is in antifreeze applications where it is a component in the manufacture of antifreeze, coolants, aircraft anti-icers and deicers due to its ability to depress the freezing temperature of the water. While pure ethylene glycol freezes at -12.9 °C, when mixed with water this can greatly reduce to around -45 °C with 60% ethylene glycol and 40% water. Bitter flavourings are usually added to MEG used in antifreeze to reverse the sweet taste which may encourage children and animals to consume the chemical.',
            subHead4: 'Other Industry Uses',
            desc4: 'Mono ethylene glycol is also used in the manufacture of alkyd resins which are used to form a film in paints, enamels, and varnishes. In the gas industry, ethylene glycol is used to remove water vapour from the gas before it is processed further. Here, it is also used as a desiccant in gas pipelines to stop the formation of clathrates.',
            desc5: 'For the electronic industry, MEG is used as a chemical intermediate in the production of capacitors. Or for the treatment and prevention of fungi and rot in wood, mono ethylene glycol can be used, especially useful for exhibitions and museums. In the medical field, ethylene glycol can be used in the production of vaccines, although it is not present in the final administered vaccine. It is a minor ingredient in a variety of cleaners, including screen cleaners for electronics where it is paired with isopropyl alcohol.'
          },

        },
      },
      {
        id: 5,
        name: 'Mono Ethylene Glycol - Tech',
        details: {
          whatIs: {
            head1: 'What is Mono Ethylene Glycol - Tech?',
            sub1: 'Mono Ethylene Glycol (also known as MEG) is a clear, colourless, virtually odourless, and slightly viscous liquid.  It is miscible with water, alcohols, and many organic compounds, and has the formula C2H6O2.  It is the most important of the commercially available ethylene glycols as it has many industrial applications',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Mono Ethylene Glycol is produced by the oxidation of ethylene at a high temperature in the presence of a silver oxide catalyst.  The ethylene oxide is then hydrated to yield mono ethylene glycol with di and tri ethylene glycols as co-products.',
            desc2: 'Global demand for MEG is strong with demand estimated at 18 million tonnes in 2008 and forecasts suggesting that this demand could rise to 25 million tonnes by 2015.  Demand is strongest in China where approximately 70% of the world’s MEG output is consumed.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Mono Ethylene Glycol can be stored in stainless steel, aluminium, or lined drums, tank cars, or tank trucks.  It has a specific gravity of 1.115 and a flash point of 110 °C (closed cup).  It is not regulated for transport on road, rail, air, or sea but it is classified as harmful, and is harmful if swallowed.',
          },
          used: {
            head1: 'What is Mono Ethylene Glycol - Tech used for?',
            desc1: 'There is strong global demand for Mono Ethylene Glycol as it is a vital ingredient in the production of polyester fibres, films, and resins, one of which is polyethylene terephthalate (PET).  The PET is then converted into plastic bottles which are used globally.  It is estimated that 70-80% of all the MEG consumed is used as a chemical intermediate in these polyester production processes.',
            desc2: 'The second largest market for MEG is in antifreeze applications where it is a component in the manufacture of antifreeze, coolants, aircraft anti-icer, and de-icers.',
            desc3: 'Mono ethylene glycol also has humectant properties and this makes it ideal for use in the fibre treatment of textiles, the paper industry, and in adhesives, inks, and cellophane.',
            desc4: 'It is also a used as a dehydration agent in natural gas pipelines where it inhibits the formation of natural gas clathrates before being recovered from the gas and reused.'
          },

        },
      },
      {
        id: 6,
        name: 'Mono Propylene Glycol',
        details: {
          whatIs: {
            head1: 'What Is Monopropylene Glycol?',
            sub1: 'Monopropylene glycol (also known as propylene glycol, PG, propan1, 2diol and MPG) is a clear, colourless and viscous liquid with a characteristic odour and has the formula C3H8O2. This solvent is soluble in water and holds hygroscopic properties, meaning it can attract hard water molecules. ',
            sub2: 'It is used across a wide range of industries as it has low toxicity, coupled with a freezing point which is depressed upon mixing with water.',
            img: '/products-img/glycols-6.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Chemical and physical properties of mono propylene glycol:',
              },
              {
                desc: 'Molecular Formula: C3H8O2 / CH3CH(OH)CH2OH',
              },
              {
                desc: 'Synonyms: MPG, Propylene Glycol, PG, Propan1, 2diol, Propane-1,2-Diol, 1,2-Dihydroxypropane 1,2Propandiol',
              },
              {
                desc: 'Cas Number: 57-55-6',
              },
              {
                desc: 'Molecular Mass: 76.095 g·mol−1',
              },
              {
                desc: 'Exact Mass: 76.052429 g/mol',
              },
              {
                desc: 'Flashpoint: 210 °F / 98.9 °C',
              },
              {
                desc: 'Boiling Point: 370.8 °F / 188.2 °C',
              },
              {
                desc: 'Melting Point: −74 °F / −59 °C',
              },
              {
                desc: 'Vapour Pressure: 0.13 mm Hg at 25 °C',
              },
              {
                desc: 'Water Solubility: Miscible',
              },
              {
                desc: 'Density: 1.0361 g/cu cm at 20 °C'
              },
              {
                desc: 'Log P: -1.34'
              }
            ],
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Mono propylene glycol is produced from propylene oxide.  The most common process is by the non-catalytic hydrolysis of propylene oxide in a high-temperature and high-pressure environment.  The second method is the catalytic one, which can proceed at 150 °C, in the presence of ion exchange resin, or a small amount of sulphuric acid or alkali.  It can also be produced from glycerol which is a bio-diesel by-product.',
            desc2: 'The demand for, and consumption of, mono propylene glycol is high with an estimated 1.2 million tonnes produced yearly by plants situated around the world.',
          },
          distribute: {
            head1: 'How is it handled, stored distributed?',
            desc1: 'Mono propylene glycol is stored and moved in stainless steel or mild steel tanks and can be transported by tank trucks.  It is not classified as dangerous for any mode of transport and is not hazardous to health.  It has a flash point of 103 °C (closed cup) and a specific gravity of 1.04.',
          },
          used: {
            head1: 'Monopropylene Glycol Uses',
            desc1: 'There are many uses for mono propylene glycol across many different industries and some chemical manufacturers produce two grades of MPG to meet these varied needs.',
            subHead2: 'Consumer uses',
            desc2: 'The first grade is used in the food industry for food colourings and flavourings and is also a classified humectant food additive (E1520). There are also many applications in the cosmetics industry that use this solvent, specifically personal care products including shampoos, bubble baths, baby wipes and as a moisturiser in make-up.',
            subHead3: 'Industry uses',
            desc3: 'The second is industrial grade MPG which has a variety of uses but the main application is as an antifreeze and aircraft wing and runway de-icer which is because its freezing point lowers upon mixing with water.  It is also used in heat transfer liquids such as engine coolants.',
            desc4: 'Monopropylene Glycol is additionally used in the pharmaceutical industry, examples include as a chemical intermediate in the production of high-performance unsaturated polyester resins used in paints and varnishes and as an excellent solvent utilised in printing inks. It is also used in the manufacturing of non-ionic detergents which are used in the petroleum, sugar-refining, and papermaking industries, the cryonics industry and as an additive in pipe tobacco, preventing dehydration',
          },

        },
      },
      {
        id: 7,
        name: 'Triethylene Glycol',
        details: {
          whatIs: {
            head1: 'What is Triethylene Glycol?',
            sub1: 'Triethylene glycol (also known as TEG, triglycol and trigen) is a colourless, viscous, non-volatile liquid with the formula C6H14O4.  It is well known for its hygroscopic quality and its ability to dehumidify fluids.',
            img: '/products-img/glycols-7.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Triethylene glycol is prepared commercially as a co-product of the oxidation of ethylene at high temperature, in the presence of a silver oxide catalyst.  The ethylene oxide is then hydrated to yield mono, di, tri, and tetra ethylene glycols.',
            desc2: 'It is estimated that the total world consumption of TEG is in excess of 175 metric tonnes annually.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Triethylene glycol can be stored and transported in stainless steel, aluminium  or lined tank cars, tank trucks, or 225 kg drums.  It has a specific gravity of 1.125 and a flash point of 168 °C (closed cup) and is not classified for transport by road, sea, or rail.',
          },
          used: {
            head1: 'What is Triethylene Glycol used for?',
            subHead1: 'Oil & Gas Industry',
            desc1: 'The main uses for tri ethylene glycol are based upon its hygroscopic quality. This means that it can absorb moisture from the air through absorption or adsorption. It is used as a dehydrating agent for natural gas pipelines where it removes the water from the gas before being condensed. The triethylene glycol can then be continually reused, although the by-product of benzene needs to be disposed of carefully. This process is useful as it prevents the gas from freezing making the gas easier to transport and manage for end consumers.',
            subHead2: 'Mild Disinfectant',
            desc2: 'Triethylene glycol can also be used as a mild disinfectant. Due to its low toxicity, antimicrobial properties, and low odour, it is commonly used for air disinfection in occupied areas where more aggressive disinfectants cannot be used. Due to these disinfectant properties and the dehydrating properties, it is an ideal dehumidifying agent in air-conditioning units.',
          },

        },
      },
    ],
  },
  {
    id: 7,
    name: 'Glycols',
    products: [
      {
        id: 1,
        name: 'Di Propylene Glycol',
        details: {
          whatIs: {
            head1: 'What is Di Propylene Glycol?',
            sub1: 'Di propylene glycol (also known as oyybispropanol, 2,2-dihydroxyisopropylether, 1,1-oxydipropane-2-ol, di-1,2-propylene glycol, and DPG) is a clear, colourless, viscous liquid with a characteristic odour and the formula C6H14O3. It is fully miscible in water and is also miscible with many organic solvents.  This solvency, combined with low toxicity and a low evaporation rate, makes DPG a chemical which is a very useful reactive intermediate in a range of industries.',
            img: '/products-img/glycols-1.png',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Di propylene glycol is produced as a byproduct of propylene glycol production which occurs in a propylene oxide hydrolysis process.  Tri propylene glycol is another by-product of this process.',
            desc2: 'It is estimated that the worldwide capacity for di propylene glycol production is approximately 107,000 tonnes per annum.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Di propylene glycol is generally stored and distributed in stainless steel, aluminium or lined tank cars, tank trucks, or drums.  It has a flash point of 124 °C (closed cup) and a specific gravity of 1.023 and is not classified as dangerous for any mode of transport.',
          },
          used: {
            head1: 'What is Di Propylene Glycol used for?',
            desc1: 'Di propylene glycol finds use as a chemical intermediate across a range of industries.  It is used as a component in the production of high volume plasticiser and, indeed, 38% of DPG is consumed in this process.  It is also an initiator in urethane polyols, and a reactant in unsaturated polyurethane resins where it adds flexibility and hydrolytic stability.  It is also used for cutting oils, in hydraulic brake fluid production, and is a solvent for agricultural chemicals such as insecticides.  It is also used as a solvent for printing inks, nitrocellulose, cellulose acetate, lacquers and coatings.  It is an ingredient in industrial soaps and also has a role in the refining industry where it is used as an extraction solvent to extract aromatics.',
            desc2: 'There is also a Fragrance Grade of di propylene glycol which is used in the cosmetics industry where it is an additive in perfumes, and in skin and hair care products, where it binds and carries the fragrance elements of the perfume being used.'
          },

        },
      },
      {
        id: 2,
        name: 'Diethylene Glycol',
        details: {
          whatIs: {
            head1: 'What is Diethylene Glycol?',
            sub1: 'Diethylene glycol (also known as DEG, 2,2-oxydiethanol and diglycol) is a clear, colourless, odourless liquid with the formula C4H10O3. It is soluble both in water and in many organic compounds and has hygroscopic properties which makes it a useful industrial chemical.',
            img: '/products-img/glycols-2.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Technical properties of diethylene glycol:',
              },
              {
                desc: 'Cas Number: 111-46-6',
              },
              {
                desc: 'Molecular Formula: C4H10O3 or (CH2CH2OH)2O',
              },
              {
                desc: 'Synonyms: Diglycol, DEG, 2,2-oxydiethanol and dihydroxy diethyl ether',
              },
              {
                desc: 'Molecular Mass: 106.12 g/mol',
              },
              {
                desc: 'Flashpoint (open cup): 143 °C (290 °F)',
              },
              {
                desc: 'Autoignition temperature: 229 °C (444 °F)',
              },
              {
                desc: 'Boiling Point: 245 °C (473 °F)',
              },
              {
                desc: 'Melting Point: -10 °C (14 °F)',
              },
              {
                desc: 'Density: 1.12 at 20 °C (68 °F)',
              },
              {
                desc: 'Log P: -1.47',
              },
            ],
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Production of diethylene glycol is generally based on the demand for, and production of, monoethylene glycol (MEG) as it is a by-product of this production process. The process consists of the oxidation of ethylene at a high temperature in the presence of a silver oxide catalyst. The ethylene oxide is then hydrated to yield diethylene glycol with monoethylene glycol and triethylene glycol as co-products.',
            desc2: 'The chemical industry tries to maximise the production of monoethylene glycol in this process, however, diethylene glycol is a very useful by-product.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Diethylene glycol can be stored in stainless steel, aluminium, or lined drums, tank cars, or tank trucks.  It has a specific gravity of 1.118 and a flashpoint of 143 °C (open cup). This results in a flammability rating of 1 under the NFPA 704 indicating the compound requires considerable preheating before ignition could occur. It is not regulated for transport on road, rail, air, or sea but it is classified as harmful and can be toxic if swallowed.',
            subHead2: 'Health hazards',
            desc4: 'The compound is rated a 1 for health under the NFPA 704 indicating that exposure should only cause a minor residual injury.',
            desc5: 'The primary health hazard with diethylene glycol is the risk of poisoning. The chemical properties of the compound make it possible to be passed as counterfeit glycerol, a highly versatile, non-toxic compound used as a sweetener in food and an antiviral in the medical industry. Many deaths have occurred because of products produced using glycerol being contaminated with diethylene glycol.',
            desc6: 'If the compound is swallowed, then fomepizole or ethanol should be promptly administered to prevent metabolism. While fomepizole has minimal adverse effects, it is a highly expensive treatment option. Later in the phases of a poisoning when DEG has metabolised, dialysis may be the only remaining option for the individual.'
          },
          used: {
            head1: 'What is diethylene glycol used for?',
            desc1: 'Diethylene glycol has a variety of uses in the industry. The tobacco industry makes use of its hygroscopic properties by utilising it as a humectant in tobacco products to control the moisture of the tobacco filler. This same property also makes it useful in the treatment of paper, cork, glue, and cellophane and it is utilised as a dehydrant in the natural gas industry where it removes water from gas pipelines.',
            desc2: 'The compound is also used as a chemical intermediate in the manufacture of unsaturated polyester resins, plasticisers, acrylate and methacrylate resins, and urethanes. In the U.S. and Western Europe, 51% of DEG is consumed in this way.',
            desc3: 'However, in Japan, it is mostly utilised as a cement grinding aid. It can also be used in petroleum solvent extraction and can be found in printing ink and drywall joint compounds.',
            desc4: 'Diethylene glycol is now being displaced by tri ethylene glycol in some of its applications as the lower toxicity of tri ethylene glycol makes it more appealing to manufacturers.'
          },

        },
      },
      {
        id: 3,
        name: 'Hexylene Glycol',
        details: {
          whatIs: {
            head1: 'What is Hexylene Glycol?',
            sub1: 'Hexylene glycol (also known as HGL, 2-methyl pentane-2,4-diol, pinakon and Diolane) is a clear, colourless liquid with a characteristic odour.  It is fully miscible in water and has the chemical formula C6H14O2.  Hexylene glycol is a compound that appears in a large number of products that are used commercially and industrially',
            img: '/products-img/glycols-3.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Hexylene glycol is formed from the achiral reagents hydrogen and diacetone alcohol.',
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Hexylene Glycol is stored in bulk storage or stainless steel drums and is transported by tank truck.  It is classed as non-hazardous for air, sea, and road freight but is classed as an irritant.  It has a specific gravity of 0.925 and a flash point of 93 °C (closed cup).',
          },
          used: {
            head1: 'What is Hexylene Glycol used for?',
            desc1: 'The single largest user of hexylene glycol is the industrial coatings industry which uses approximately 45% of the HGL produced world-wide.  It is a component in lacquers and varnishes, and is a solvent plasticiser in surface coatings.  It is also a component in both oil and water- based paints, and in paint strippers.',
            desc2: 'Hexylene glycol is also used as a chemical intermediate, which accounts for approximately 20% of its consumption, and another 10% is used on oil and natural-gas fields where it is both a down hole lubricant, and a grinding and extraction aid.',
            desc3: 'Hexylene glycol is also employed as an antifreeze, and as a coupling agent for hydraulic fluids.  It is a moisturising, and setting, agent in the manufacture of textiles and can also be found in the cosmetics industry where it is a component of fragrances and bath, hair, and soap preparations.  It also has a role as a wetting agent in pesticide formulations and is a solvent in the preparation of dyes.'
          },

        },
      },
      {
        id: 4,
        name: 'Mono Ethylene Glycol',
        details: {
          whatIs: {
            head1: 'What is Mono Ethylene Glycol?',
            sub1: 'Mono ethylene glycol (also known as MEG, EG, 1,2-ethanediol or 1,2-Dihydroxyethane) is an organic compound with the formula C2H6O2. It is a slightly viscous liquid with a clear, colourless appearance and a sweet taste that emits virtually no odour. It’s miscible with water, alcohols, and many other organic compounds and is primarily used in the industry for manufacturing polyester fibres and as a component in the production of antifreeze, coolants, aircraft anti-icers and de-icers.',
            img: '/products-img/glycols-4.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Technical properties of Mono Ethylene Glycol:',
              },
              {
                desc: 'Molecular Formula: C2H6O2 / (CH2OH)2 / HOCH2CH2OH',
              },
              {
                desc: 'Synonyms: monoethyleneglycol, mono ethyl glycol, meg glycol, ethylene glycol, 1,2-ethanediol, Ethane-1,2-diol, EG, industrial glycol, 1,2-Dihydroxyethane, glycol alcohol.',
              },
              {
                desc: 'Synonyms: Diglycol, DEG, 2,2-oxydiethanol and dihydroxy diethyl ether',
              },
              {
                desc: 'Cas Number: 107-21-1',
              },
              {
                desc: 'Molecular Mass: 62.07 g/mol',
              },
              {
                desc: 'Exact Mass: 62.036779 g/mol',
              },
              {
                desc: 'Flashpoint: 232 °F/ 111.11 °C',
              },
              {
                desc: 'Autoignition temperature: 770 °F / 410 °C',
              },
              {
                desc: 'Boiling Point: 387.7 °F / 197.6 °C at 760 mm Hg',
              },
              {
                desc: 'Melting Point: 9 ° F / -12.8 °C',
              },
              {
                desc: 'Vapour Pressure: 0.06 mm Hg at 68 °F / 20 °C'
              },
              {
                desc: 'Density: 1.115 at 68 °F'
              },
              {
                desc: 'Log P: -1.69'
              }
            ],
          },
          produce: {
            head1: 'How is Mono Ethylene Glycol Produced?',
            desc1: 'The intermediate ethylene oxide is used to convert ethylene (ethene) into ethylene glycol. Ethylene oxide is obtained through oxidation and is then reacted with water to give mono ethylene glycol with di and tri ethylene glycols as co-products:',
            desc2: 'C2H4O + H2O → HOCH2CH2OH',
            desc3: 'Acids and bases can catalyse this reaction, or it can occur at neutral pH under elevated temperatures. Yields of up to 90% can be achieved with acidic or neutral pH with a large excess of water.',
            desc4: 'Mono ethylene glycol is also manufactured via the hydrogenation of dimethyl oxalate in the presence of a copper catalyst or via the acetoxylation of ethylene.',
            desc5: 'Global demand for Monoethylene Ethylene Glycol (MEG) is strong with the market worth $25 billion and expected to grow 6% annually to 2024. This is especially due to the increased production of polyethene terephthalate (PET) and the demand for polyesters in the Asia Pacific. Demand is strongest in China where approximately 70% of the world’s MEG output is consumed.'
          },
          distribute: {
            head1: 'How is Mono Ethylene Glycol Stored and Distributed?',
            subHead1: 'Storage & Handling',
            desc1: 'Under the NFPA 704, mono ethylene glycol is rated as a 0 for instability, indicating that mono ethylene glycol is usually stable. Mono ethylene glycol’s vapours are heavier than air and will travel to surrounding areas. Due to its high flashpoint of 111.11°C, the chemical has a flammability rating of 1, indicating that it requires considerable preheating for ignition and combustion to occur. However, in storage, MEG should be kept away from heat, sparks, and open flames. If a fire was to occur, alcoholresistant foam or water spray should be used to fight fires with a focus on preventing the spillage from reaching water sources or sewers.',
            subHead2: 'Mono Ethylene Glycol Health Hazards',
            desc4: 'The chemical has high toxicity when ingested with the major danger being a result of the sweet taste encouraging further consumption; this increases the danger posed to animals and children. Ingestion of sufficient amounts is fatal if left untreated with the ethylene glycol being oxidised in the body to glycolic acid and then the toxic chemical, oxalic acid. MEG ingestion impacts the central nervous system, heart and can cause acute kidney failure.',
            desc5: 'Eye exposure to mono ethylene glycol vapours can irritate, and therefore it is suggested goggles should be worn while handling the chemical. Exposure to ethylene glycol in liquid form has the potential to cause more serious eye damage. If contact is made with the eyes, immediately wash with plenty of water and seek medical attention.',
            desc6: 'Skin exposure with MEG can also irritate and so gloves should be worn. If the skin does become contaminated, all wet clothing should be removed, and the skin washed with water. Inhalation exposure to high levels of ethylene glycol can cause irritation, and potentially intolerable respiratory discomfort and coughs. If excessive inhalation occurs, the individual should be removed from the environment, breathe fresh air, and seek medical attention.'
          },
          used: {
            head1: 'Mono Ethylene Glycol Uses',
            desc1: 'Mono ethylene glycol is more commonly used as a polymer precursor but also in antifreeze as well as in a wide variety of industries.',
            subHead2: 'Polymer Precursor',
            desc2: 'There is strong global demand for mono ethylene glycol in the plastic industry as it is a vital ingredient in the production of polyester fibres, films, and resins, one of which is polyethene terephthalate (PET). PET is created by heating ethylene glycol with terephthalic acid in an esterification reaction. This chemical is then converted into plastic bottles, microwaveable containers and is even used in the textile industry. It is estimated that 70-80% of all the MEG consumed is used as a chemical intermediate in these polyester production processes.',
            subHead3: 'Antifreeze',
            desc3: 'A primary industry use of mono ethylene glycol is in antifreeze applications where it is a component in the manufacture of antifreeze, coolants, aircraft anti-icers and deicers due to its ability to depress the freezing temperature of the water. While pure ethylene glycol freezes at -12.9 °C, when mixed with water this can greatly reduce to around -45 °C with 60% ethylene glycol and 40% water. Bitter flavourings are usually added to MEG used in antifreeze to reverse the sweet taste which may encourage children and animals to consume the chemical.',
            subHead4: 'Other Industry Uses',
            desc4: 'Mono ethylene glycol is also used in the manufacture of alkyd resins which are used to form a film in paints, enamels, and varnishes. In the gas industry, ethylene glycol is used to remove water vapour from the gas before it is processed further. Here, it is also used as a desiccant in gas pipelines to stop the formation of clathrates.',
            desc5: 'For the electronic industry, MEG is used as a chemical intermediate in the production of capacitors. Or for the treatment and prevention of fungi and rot in wood, mono ethylene glycol can be used, especially useful for exhibitions and museums. In the medical field, ethylene glycol can be used in the production of vaccines, although it is not present in the final administered vaccine. It is a minor ingredient in a variety of cleaners, including screen cleaners for electronics where it is paired with isopropyl alcohol.'
          },

        },
      },
      {
        id: 5,
        name: 'Mono Ethylene Glycol - Tech',
        details: {
          whatIs: {
            head1: 'What is Mono Ethylene Glycol - Tech?',
            sub1: 'Mono Ethylene Glycol (also known as MEG) is a clear, colourless, virtually odourless, and slightly viscous liquid.  It is miscible with water, alcohols, and many organic compounds, and has the formula C2H6O2.  It is the most important of the commercially available ethylene glycols as it has many industrial applications',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Mono Ethylene Glycol is produced by the oxidation of ethylene at a high temperature in the presence of a silver oxide catalyst.  The ethylene oxide is then hydrated to yield mono ethylene glycol with di and tri ethylene glycols as co-products.',
            desc2: 'Global demand for MEG is strong with demand estimated at 18 million tonnes in 2008 and forecasts suggesting that this demand could rise to 25 million tonnes by 2015.  Demand is strongest in China where approximately 70% of the world’s MEG output is consumed.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Mono Ethylene Glycol can be stored in stainless steel, aluminium, or lined drums, tank cars, or tank trucks.  It has a specific gravity of 1.115 and a flash point of 110 °C (closed cup).  It is not regulated for transport on road, rail, air, or sea but it is classified as harmful, and is harmful if swallowed.',
          },
          used: {
            head1: 'What is Mono Ethylene Glycol - Tech used for?',
            desc1: 'There is strong global demand for Mono Ethylene Glycol as it is a vital ingredient in the production of polyester fibres, films, and resins, one of which is polyethylene terephthalate (PET).  The PET is then converted into plastic bottles which are used globally.  It is estimated that 70-80% of all the MEG consumed is used as a chemical intermediate in these polyester production processes.',
            desc2: 'The second largest market for MEG is in antifreeze applications where it is a component in the manufacture of antifreeze, coolants, aircraft anti-icer, and de-icers.',
            desc3: 'Mono ethylene glycol also has humectant properties and this makes it ideal for use in the fibre treatment of textiles, the paper industry, and in adhesives, inks, and cellophane.',
            desc4: 'It is also a used as a dehydration agent in natural gas pipelines where it inhibits the formation of natural gas clathrates before being recovered from the gas and reused.'
          },

        },
      },
      {
        id: 6,
        name: 'Mono Propylene Glycol',
        details: {
          whatIs: {
            head1: 'What Is Monopropylene Glycol?',
            sub1: 'Monopropylene glycol (also known as propylene glycol, PG, propan1, 2diol and MPG) is a clear, colourless and viscous liquid with a characteristic odour and has the formula C3H8O2. This solvent is soluble in water and holds hygroscopic properties, meaning it can attract hard water molecules. ',
            sub2: 'It is used across a wide range of industries as it has low toxicity, coupled with a freezing point which is depressed upon mixing with water.',
            img: '/products-img/glycols-6.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Chemical and physical properties of mono propylene glycol:',
              },
              {
                desc: 'Molecular Formula: C3H8O2 / CH3CH(OH)CH2OH',
              },
              {
                desc: 'Synonyms: MPG, Propylene Glycol, PG, Propan1, 2diol, Propane-1,2-Diol, 1,2-Dihydroxypropane 1,2Propandiol',
              },
              {
                desc: 'Cas Number: 57-55-6',
              },
              {
                desc: 'Molecular Mass: 76.095 g·mol−1',
              },
              {
                desc: 'Exact Mass: 76.052429 g/mol',
              },
              {
                desc: 'Flashpoint: 210 °F / 98.9 °C',
              },
              {
                desc: 'Boiling Point: 370.8 °F / 188.2 °C',
              },
              {
                desc: 'Melting Point: −74 °F / −59 °C',
              },
              {
                desc: 'Vapour Pressure: 0.13 mm Hg at 25 °C',
              },
              {
                desc: 'Water Solubility: Miscible',
              },
              {
                desc: 'Density: 1.0361 g/cu cm at 20 °C'
              },
              {
                desc: 'Log P: -1.34'
              }
            ],
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Mono propylene glycol is produced from propylene oxide.  The most common process is by the non-catalytic hydrolysis of propylene oxide in a high-temperature and high-pressure environment.  The second method is the catalytic one, which can proceed at 150 °C, in the presence of ion exchange resin, or a small amount of sulphuric acid or alkali.  It can also be produced from glycerol which is a bio-diesel by-product.',
            desc2: 'The demand for, and consumption of, mono propylene glycol is high with an estimated 1.2 million tonnes produced yearly by plants situated around the world.',
          },
          distribute: {
            head1: 'How is it handled, stored distributed?',
            desc1: 'Mono propylene glycol is stored and moved in stainless steel or mild steel tanks and can be transported by tank trucks.  It is not classified as dangerous for any mode of transport and is not hazardous to health.  It has a flash point of 103 °C (closed cup) and a specific gravity of 1.04.',
          },
          used: {
            head1: 'Monopropylene Glycol Uses',
            desc1: 'There are many uses for mono propylene glycol across many different industries and some chemical manufacturers produce two grades of MPG to meet these varied needs.',
            subHead2: 'Consumer uses',
            desc2: 'The first grade is used in the food industry for food colourings and flavourings and is also a classified humectant food additive (E1520). There are also many applications in the cosmetics industry that use this solvent, specifically personal care products including shampoos, bubble baths, baby wipes and as a moisturiser in make-up.',
            subHead3: 'Industry uses',
            desc3: 'The second is industrial grade MPG which has a variety of uses but the main application is as an antifreeze and aircraft wing and runway de-icer which is because its freezing point lowers upon mixing with water.  It is also used in heat transfer liquids such as engine coolants.',
            desc4: 'Monopropylene Glycol is additionally used in the pharmaceutical industry, examples include as a chemical intermediate in the production of high-performance unsaturated polyester resins used in paints and varnishes and as an excellent solvent utilised in printing inks. It is also used in the manufacturing of non-ionic detergents which are used in the petroleum, sugar-refining, and papermaking industries, the cryonics industry and as an additive in pipe tobacco, preventing dehydration',
          },

        },
      },
      {
        id: 7,
        name: 'Triethylene Glycol',
        details: {
          whatIs: {
            head1: 'What is Triethylene Glycol?',
            sub1: 'Triethylene glycol (also known as TEG, triglycol and trigen) is a colourless, viscous, non-volatile liquid with the formula C6H14O4.  It is well known for its hygroscopic quality and its ability to dehumidify fluids.',
            img: '/products-img/glycols-7.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Triethylene glycol is prepared commercially as a co-product of the oxidation of ethylene at high temperature, in the presence of a silver oxide catalyst.  The ethylene oxide is then hydrated to yield mono, di, tri, and tetra ethylene glycols.',
            desc2: 'It is estimated that the total world consumption of TEG is in excess of 175 metric tonnes annually.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Triethylene glycol can be stored and transported in stainless steel, aluminium  or lined tank cars, tank trucks, or 225 kg drums.  It has a specific gravity of 1.125 and a flash point of 168 °C (closed cup) and is not classified for transport by road, sea, or rail.',
          },
          used: {
            head1: 'What is Triethylene Glycol used for?',
            subHead1: 'Oil & Gas Industry',
            desc1: 'The main uses for tri ethylene glycol are based upon its hygroscopic quality. This means that it can absorb moisture from the air through absorption or adsorption. It is used as a dehydrating agent for natural gas pipelines where it removes the water from the gas before being condensed. The triethylene glycol can then be continually reused, although the by-product of benzene needs to be disposed of carefully. This process is useful as it prevents the gas from freezing making the gas easier to transport and manage for end consumers.',
            subHead2: 'Mild Disinfectant',
            desc2: 'Triethylene glycol can also be used as a mild disinfectant. Due to its low toxicity, antimicrobial properties, and low odour, it is commonly used for air disinfection in occupied areas where more aggressive disinfectants cannot be used. Due to these disinfectant properties and the dehydrating properties, it is an ideal dehumidifying agent in air-conditioning units.',
          },

        },
      },
    ],
  },
  {
    id: 8,
    name: 'Glycols',
    products: [
      {
        id: 1,
        name: 'Di Propylene Glycol',
        details: {
          whatIs: {
            head1: 'What is Di Propylene Glycol?',
            sub1: 'Di propylene glycol (also known as oyybispropanol, 2,2-dihydroxyisopropylether, 1,1-oxydipropane-2-ol, di-1,2-propylene glycol, and DPG) is a clear, colourless, viscous liquid with a characteristic odour and the formula C6H14O3. It is fully miscible in water and is also miscible with many organic solvents.  This solvency, combined with low toxicity and a low evaporation rate, makes DPG a chemical which is a very useful reactive intermediate in a range of industries.',
            img: '/products-img/glycols-1.png',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Di propylene glycol is produced as a byproduct of propylene glycol production which occurs in a propylene oxide hydrolysis process.  Tri propylene glycol is another by-product of this process.',
            desc2: 'It is estimated that the worldwide capacity for di propylene glycol production is approximately 107,000 tonnes per annum.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Di propylene glycol is generally stored and distributed in stainless steel, aluminium or lined tank cars, tank trucks, or drums.  It has a flash point of 124 °C (closed cup) and a specific gravity of 1.023 and is not classified as dangerous for any mode of transport.',
          },
          used: {
            head1: 'What is Di Propylene Glycol used for?',
            desc1: 'Di propylene glycol finds use as a chemical intermediate across a range of industries.  It is used as a component in the production of high volume plasticiser and, indeed, 38% of DPG is consumed in this process.  It is also an initiator in urethane polyols, and a reactant in unsaturated polyurethane resins where it adds flexibility and hydrolytic stability.  It is also used for cutting oils, in hydraulic brake fluid production, and is a solvent for agricultural chemicals such as insecticides.  It is also used as a solvent for printing inks, nitrocellulose, cellulose acetate, lacquers and coatings.  It is an ingredient in industrial soaps and also has a role in the refining industry where it is used as an extraction solvent to extract aromatics.',
            desc2: 'There is also a Fragrance Grade of di propylene glycol which is used in the cosmetics industry where it is an additive in perfumes, and in skin and hair care products, where it binds and carries the fragrance elements of the perfume being used.'
          },

        },
      },
      {
        id: 2,
        name: 'Diethylene Glycol',
        details: {
          whatIs: {
            head1: 'What is Diethylene Glycol?',
            sub1: 'Diethylene glycol (also known as DEG, 2,2-oxydiethanol and diglycol) is a clear, colourless, odourless liquid with the formula C4H10O3. It is soluble both in water and in many organic compounds and has hygroscopic properties which makes it a useful industrial chemical.',
            img: '/products-img/glycols-2.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Technical properties of diethylene glycol:',
              },
              {
                desc: 'Cas Number: 111-46-6',
              },
              {
                desc: 'Molecular Formula: C4H10O3 or (CH2CH2OH)2O',
              },
              {
                desc: 'Synonyms: Diglycol, DEG, 2,2-oxydiethanol and dihydroxy diethyl ether',
              },
              {
                desc: 'Molecular Mass: 106.12 g/mol',
              },
              {
                desc: 'Flashpoint (open cup): 143 °C (290 °F)',
              },
              {
                desc: 'Autoignition temperature: 229 °C (444 °F)',
              },
              {
                desc: 'Boiling Point: 245 °C (473 °F)',
              },
              {
                desc: 'Melting Point: -10 °C (14 °F)',
              },
              {
                desc: 'Density: 1.12 at 20 °C (68 °F)',
              },
              {
                desc: 'Log P: -1.47',
              },
            ],
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Production of diethylene glycol is generally based on the demand for, and production of, monoethylene glycol (MEG) as it is a by-product of this production process. The process consists of the oxidation of ethylene at a high temperature in the presence of a silver oxide catalyst. The ethylene oxide is then hydrated to yield diethylene glycol with monoethylene glycol and triethylene glycol as co-products.',
            desc2: 'The chemical industry tries to maximise the production of monoethylene glycol in this process, however, diethylene glycol is a very useful by-product.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Diethylene glycol can be stored in stainless steel, aluminium, or lined drums, tank cars, or tank trucks.  It has a specific gravity of 1.118 and a flashpoint of 143 °C (open cup). This results in a flammability rating of 1 under the NFPA 704 indicating the compound requires considerable preheating before ignition could occur. It is not regulated for transport on road, rail, air, or sea but it is classified as harmful and can be toxic if swallowed.',
            subHead2: 'Health hazards',
            desc4: 'The compound is rated a 1 for health under the NFPA 704 indicating that exposure should only cause a minor residual injury.',
            desc5: 'The primary health hazard with diethylene glycol is the risk of poisoning. The chemical properties of the compound make it possible to be passed as counterfeit glycerol, a highly versatile, non-toxic compound used as a sweetener in food and an antiviral in the medical industry. Many deaths have occurred because of products produced using glycerol being contaminated with diethylene glycol.',
            desc6: 'If the compound is swallowed, then fomepizole or ethanol should be promptly administered to prevent metabolism. While fomepizole has minimal adverse effects, it is a highly expensive treatment option. Later in the phases of a poisoning when DEG has metabolised, dialysis may be the only remaining option for the individual.'
          },
          used: {
            head1: 'What is diethylene glycol used for?',
            desc1: 'Diethylene glycol has a variety of uses in the industry. The tobacco industry makes use of its hygroscopic properties by utilising it as a humectant in tobacco products to control the moisture of the tobacco filler. This same property also makes it useful in the treatment of paper, cork, glue, and cellophane and it is utilised as a dehydrant in the natural gas industry where it removes water from gas pipelines.',
            desc2: 'The compound is also used as a chemical intermediate in the manufacture of unsaturated polyester resins, plasticisers, acrylate and methacrylate resins, and urethanes. In the U.S. and Western Europe, 51% of DEG is consumed in this way.',
            desc3: 'However, in Japan, it is mostly utilised as a cement grinding aid. It can also be used in petroleum solvent extraction and can be found in printing ink and drywall joint compounds.',
            desc4: 'Diethylene glycol is now being displaced by tri ethylene glycol in some of its applications as the lower toxicity of tri ethylene glycol makes it more appealing to manufacturers.'
          },

        },
      },
      {
        id: 3,
        name: 'Hexylene Glycol',
        details: {
          whatIs: {
            head1: 'What is Hexylene Glycol?',
            sub1: 'Hexylene glycol (also known as HGL, 2-methyl pentane-2,4-diol, pinakon and Diolane) is a clear, colourless liquid with a characteristic odour.  It is fully miscible in water and has the chemical formula C6H14O2.  Hexylene glycol is a compound that appears in a large number of products that are used commercially and industrially',
            img: '/products-img/glycols-3.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Hexylene glycol is formed from the achiral reagents hydrogen and diacetone alcohol.',
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Hexylene Glycol is stored in bulk storage or stainless steel drums and is transported by tank truck.  It is classed as non-hazardous for air, sea, and road freight but is classed as an irritant.  It has a specific gravity of 0.925 and a flash point of 93 °C (closed cup).',
          },
          used: {
            head1: 'What is Hexylene Glycol used for?',
            desc1: 'The single largest user of hexylene glycol is the industrial coatings industry which uses approximately 45% of the HGL produced world-wide.  It is a component in lacquers and varnishes, and is a solvent plasticiser in surface coatings.  It is also a component in both oil and water- based paints, and in paint strippers.',
            desc2: 'Hexylene glycol is also used as a chemical intermediate, which accounts for approximately 20% of its consumption, and another 10% is used on oil and natural-gas fields where it is both a down hole lubricant, and a grinding and extraction aid.',
            desc3: 'Hexylene glycol is also employed as an antifreeze, and as a coupling agent for hydraulic fluids.  It is a moisturising, and setting, agent in the manufacture of textiles and can also be found in the cosmetics industry where it is a component of fragrances and bath, hair, and soap preparations.  It also has a role as a wetting agent in pesticide formulations and is a solvent in the preparation of dyes.'
          },

        },
      },
      {
        id: 4,
        name: 'Mono Ethylene Glycol',
        details: {
          whatIs: {
            head1: 'What is Mono Ethylene Glycol?',
            sub1: 'Mono ethylene glycol (also known as MEG, EG, 1,2-ethanediol or 1,2-Dihydroxyethane) is an organic compound with the formula C2H6O2. It is a slightly viscous liquid with a clear, colourless appearance and a sweet taste that emits virtually no odour. It’s miscible with water, alcohols, and many other organic compounds and is primarily used in the industry for manufacturing polyester fibres and as a component in the production of antifreeze, coolants, aircraft anti-icers and de-icers.',
            img: '/products-img/glycols-4.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Technical properties of Mono Ethylene Glycol:',
              },
              {
                desc: 'Molecular Formula: C2H6O2 / (CH2OH)2 / HOCH2CH2OH',
              },
              {
                desc: 'Synonyms: monoethyleneglycol, mono ethyl glycol, meg glycol, ethylene glycol, 1,2-ethanediol, Ethane-1,2-diol, EG, industrial glycol, 1,2-Dihydroxyethane, glycol alcohol.',
              },
              {
                desc: 'Synonyms: Diglycol, DEG, 2,2-oxydiethanol and dihydroxy diethyl ether',
              },
              {
                desc: 'Cas Number: 107-21-1',
              },
              {
                desc: 'Molecular Mass: 62.07 g/mol',
              },
              {
                desc: 'Exact Mass: 62.036779 g/mol',
              },
              {
                desc: 'Flashpoint: 232 °F/ 111.11 °C',
              },
              {
                desc: 'Autoignition temperature: 770 °F / 410 °C',
              },
              {
                desc: 'Boiling Point: 387.7 °F / 197.6 °C at 760 mm Hg',
              },
              {
                desc: 'Melting Point: 9 ° F / -12.8 °C',
              },
              {
                desc: 'Vapour Pressure: 0.06 mm Hg at 68 °F / 20 °C'
              },
              {
                desc: 'Density: 1.115 at 68 °F'
              },
              {
                desc: 'Log P: -1.69'
              }
            ],
          },
          produce: {
            head1: 'How is Mono Ethylene Glycol Produced?',
            desc1: 'The intermediate ethylene oxide is used to convert ethylene (ethene) into ethylene glycol. Ethylene oxide is obtained through oxidation and is then reacted with water to give mono ethylene glycol with di and tri ethylene glycols as co-products:',
            desc2: 'C2H4O + H2O → HOCH2CH2OH',
            desc3: 'Acids and bases can catalyse this reaction, or it can occur at neutral pH under elevated temperatures. Yields of up to 90% can be achieved with acidic or neutral pH with a large excess of water.',
            desc4: 'Mono ethylene glycol is also manufactured via the hydrogenation of dimethyl oxalate in the presence of a copper catalyst or via the acetoxylation of ethylene.',
            desc5: 'Global demand for Monoethylene Ethylene Glycol (MEG) is strong with the market worth $25 billion and expected to grow 6% annually to 2024. This is especially due to the increased production of polyethene terephthalate (PET) and the demand for polyesters in the Asia Pacific. Demand is strongest in China where approximately 70% of the world’s MEG output is consumed.'
          },
          distribute: {
            head1: 'How is Mono Ethylene Glycol Stored and Distributed?',
            subHead1: 'Storage & Handling',
            desc1: 'Under the NFPA 704, mono ethylene glycol is rated as a 0 for instability, indicating that mono ethylene glycol is usually stable. Mono ethylene glycol’s vapours are heavier than air and will travel to surrounding areas. Due to its high flashpoint of 111.11°C, the chemical has a flammability rating of 1, indicating that it requires considerable preheating for ignition and combustion to occur. However, in storage, MEG should be kept away from heat, sparks, and open flames. If a fire was to occur, alcoholresistant foam or water spray should be used to fight fires with a focus on preventing the spillage from reaching water sources or sewers.',
            subHead2: 'Mono Ethylene Glycol Health Hazards',
            desc4: 'The chemical has high toxicity when ingested with the major danger being a result of the sweet taste encouraging further consumption; this increases the danger posed to animals and children. Ingestion of sufficient amounts is fatal if left untreated with the ethylene glycol being oxidised in the body to glycolic acid and then the toxic chemical, oxalic acid. MEG ingestion impacts the central nervous system, heart and can cause acute kidney failure.',
            desc5: 'Eye exposure to mono ethylene glycol vapours can irritate, and therefore it is suggested goggles should be worn while handling the chemical. Exposure to ethylene glycol in liquid form has the potential to cause more serious eye damage. If contact is made with the eyes, immediately wash with plenty of water and seek medical attention.',
            desc6: 'Skin exposure with MEG can also irritate and so gloves should be worn. If the skin does become contaminated, all wet clothing should be removed, and the skin washed with water. Inhalation exposure to high levels of ethylene glycol can cause irritation, and potentially intolerable respiratory discomfort and coughs. If excessive inhalation occurs, the individual should be removed from the environment, breathe fresh air, and seek medical attention.'
          },
          used: {
            head1: 'Mono Ethylene Glycol Uses',
            desc1: 'Mono ethylene glycol is more commonly used as a polymer precursor but also in antifreeze as well as in a wide variety of industries.',
            subHead2: 'Polymer Precursor',
            desc2: 'There is strong global demand for mono ethylene glycol in the plastic industry as it is a vital ingredient in the production of polyester fibres, films, and resins, one of which is polyethene terephthalate (PET). PET is created by heating ethylene glycol with terephthalic acid in an esterification reaction. This chemical is then converted into plastic bottles, microwaveable containers and is even used in the textile industry. It is estimated that 70-80% of all the MEG consumed is used as a chemical intermediate in these polyester production processes.',
            subHead3: 'Antifreeze',
            desc3: 'A primary industry use of mono ethylene glycol is in antifreeze applications where it is a component in the manufacture of antifreeze, coolants, aircraft anti-icers and deicers due to its ability to depress the freezing temperature of the water. While pure ethylene glycol freezes at -12.9 °C, when mixed with water this can greatly reduce to around -45 °C with 60% ethylene glycol and 40% water. Bitter flavourings are usually added to MEG used in antifreeze to reverse the sweet taste which may encourage children and animals to consume the chemical.',
            subHead4: 'Other Industry Uses',
            desc4: 'Mono ethylene glycol is also used in the manufacture of alkyd resins which are used to form a film in paints, enamels, and varnishes. In the gas industry, ethylene glycol is used to remove water vapour from the gas before it is processed further. Here, it is also used as a desiccant in gas pipelines to stop the formation of clathrates.',
            desc5: 'For the electronic industry, MEG is used as a chemical intermediate in the production of capacitors. Or for the treatment and prevention of fungi and rot in wood, mono ethylene glycol can be used, especially useful for exhibitions and museums. In the medical field, ethylene glycol can be used in the production of vaccines, although it is not present in the final administered vaccine. It is a minor ingredient in a variety of cleaners, including screen cleaners for electronics where it is paired with isopropyl alcohol.'
          },

        },
      },
      {
        id: 5,
        name: 'Mono Ethylene Glycol - Tech',
        details: {
          whatIs: {
            head1: 'What is Mono Ethylene Glycol - Tech?',
            sub1: 'Mono Ethylene Glycol (also known as MEG) is a clear, colourless, virtually odourless, and slightly viscous liquid.  It is miscible with water, alcohols, and many organic compounds, and has the formula C2H6O2.  It is the most important of the commercially available ethylene glycols as it has many industrial applications',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Mono Ethylene Glycol is produced by the oxidation of ethylene at a high temperature in the presence of a silver oxide catalyst.  The ethylene oxide is then hydrated to yield mono ethylene glycol with di and tri ethylene glycols as co-products.',
            desc2: 'Global demand for MEG is strong with demand estimated at 18 million tonnes in 2008 and forecasts suggesting that this demand could rise to 25 million tonnes by 2015.  Demand is strongest in China where approximately 70% of the world’s MEG output is consumed.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Mono Ethylene Glycol can be stored in stainless steel, aluminium, or lined drums, tank cars, or tank trucks.  It has a specific gravity of 1.115 and a flash point of 110 °C (closed cup).  It is not regulated for transport on road, rail, air, or sea but it is classified as harmful, and is harmful if swallowed.',
          },
          used: {
            head1: 'What is Mono Ethylene Glycol - Tech used for?',
            desc1: 'There is strong global demand for Mono Ethylene Glycol as it is a vital ingredient in the production of polyester fibres, films, and resins, one of which is polyethylene terephthalate (PET).  The PET is then converted into plastic bottles which are used globally.  It is estimated that 70-80% of all the MEG consumed is used as a chemical intermediate in these polyester production processes.',
            desc2: 'The second largest market for MEG is in antifreeze applications where it is a component in the manufacture of antifreeze, coolants, aircraft anti-icer, and de-icers.',
            desc3: 'Mono ethylene glycol also has humectant properties and this makes it ideal for use in the fibre treatment of textiles, the paper industry, and in adhesives, inks, and cellophane.',
            desc4: 'It is also a used as a dehydration agent in natural gas pipelines where it inhibits the formation of natural gas clathrates before being recovered from the gas and reused.'
          },

        },
      },
      {
        id: 6,
        name: 'Mono Propylene Glycol',
        details: {
          whatIs: {
            head1: 'What Is Monopropylene Glycol?',
            sub1: 'Monopropylene glycol (also known as propylene glycol, PG, propan1, 2diol and MPG) is a clear, colourless and viscous liquid with a characteristic odour and has the formula C3H8O2. This solvent is soluble in water and holds hygroscopic properties, meaning it can attract hard water molecules. ',
            sub2: 'It is used across a wide range of industries as it has low toxicity, coupled with a freezing point which is depressed upon mixing with water.',
            img: '/products-img/glycols-6.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Chemical and physical properties of mono propylene glycol:',
              },
              {
                desc: 'Molecular Formula: C3H8O2 / CH3CH(OH)CH2OH',
              },
              {
                desc: 'Synonyms: MPG, Propylene Glycol, PG, Propan1, 2diol, Propane-1,2-Diol, 1,2-Dihydroxypropane 1,2Propandiol',
              },
              {
                desc: 'Cas Number: 57-55-6',
              },
              {
                desc: 'Molecular Mass: 76.095 g·mol−1',
              },
              {
                desc: 'Exact Mass: 76.052429 g/mol',
              },
              {
                desc: 'Flashpoint: 210 °F / 98.9 °C',
              },
              {
                desc: 'Boiling Point: 370.8 °F / 188.2 °C',
              },
              {
                desc: 'Melting Point: −74 °F / −59 °C',
              },
              {
                desc: 'Vapour Pressure: 0.13 mm Hg at 25 °C',
              },
              {
                desc: 'Water Solubility: Miscible',
              },
              {
                desc: 'Density: 1.0361 g/cu cm at 20 °C'
              },
              {
                desc: 'Log P: -1.34'
              }
            ],
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Mono propylene glycol is produced from propylene oxide.  The most common process is by the non-catalytic hydrolysis of propylene oxide in a high-temperature and high-pressure environment.  The second method is the catalytic one, which can proceed at 150 °C, in the presence of ion exchange resin, or a small amount of sulphuric acid or alkali.  It can also be produced from glycerol which is a bio-diesel by-product.',
            desc2: 'The demand for, and consumption of, mono propylene glycol is high with an estimated 1.2 million tonnes produced yearly by plants situated around the world.',
          },
          distribute: {
            head1: 'How is it handled, stored distributed?',
            desc1: 'Mono propylene glycol is stored and moved in stainless steel or mild steel tanks and can be transported by tank trucks.  It is not classified as dangerous for any mode of transport and is not hazardous to health.  It has a flash point of 103 °C (closed cup) and a specific gravity of 1.04.',
          },
          used: {
            head1: 'Monopropylene Glycol Uses',
            desc1: 'There are many uses for mono propylene glycol across many different industries and some chemical manufacturers produce two grades of MPG to meet these varied needs.',
            subHead2: 'Consumer uses',
            desc2: 'The first grade is used in the food industry for food colourings and flavourings and is also a classified humectant food additive (E1520). There are also many applications in the cosmetics industry that use this solvent, specifically personal care products including shampoos, bubble baths, baby wipes and as a moisturiser in make-up.',
            subHead3: 'Industry uses',
            desc3: 'The second is industrial grade MPG which has a variety of uses but the main application is as an antifreeze and aircraft wing and runway de-icer which is because its freezing point lowers upon mixing with water.  It is also used in heat transfer liquids such as engine coolants.',
            desc4: 'Monopropylene Glycol is additionally used in the pharmaceutical industry, examples include as a chemical intermediate in the production of high-performance unsaturated polyester resins used in paints and varnishes and as an excellent solvent utilised in printing inks. It is also used in the manufacturing of non-ionic detergents which are used in the petroleum, sugar-refining, and papermaking industries, the cryonics industry and as an additive in pipe tobacco, preventing dehydration',
          },

        },
      },
      {
        id: 7,
        name: 'Triethylene Glycol',
        details: {
          whatIs: {
            head1: 'What is Triethylene Glycol?',
            sub1: 'Triethylene glycol (also known as TEG, triglycol and trigen) is a colourless, viscous, non-volatile liquid with the formula C6H14O4.  It is well known for its hygroscopic quality and its ability to dehumidify fluids.',
            img: '/products-img/glycols-7.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Triethylene glycol is prepared commercially as a co-product of the oxidation of ethylene at high temperature, in the presence of a silver oxide catalyst.  The ethylene oxide is then hydrated to yield mono, di, tri, and tetra ethylene glycols.',
            desc2: 'It is estimated that the total world consumption of TEG is in excess of 175 metric tonnes annually.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Triethylene glycol can be stored and transported in stainless steel, aluminium  or lined tank cars, tank trucks, or 225 kg drums.  It has a specific gravity of 1.125 and a flash point of 168 °C (closed cup) and is not classified for transport by road, sea, or rail.',
          },
          used: {
            head1: 'What is Triethylene Glycol used for?',
            subHead1: 'Oil & Gas Industry',
            desc1: 'The main uses for tri ethylene glycol are based upon its hygroscopic quality. This means that it can absorb moisture from the air through absorption or adsorption. It is used as a dehydrating agent for natural gas pipelines where it removes the water from the gas before being condensed. The triethylene glycol can then be continually reused, although the by-product of benzene needs to be disposed of carefully. This process is useful as it prevents the gas from freezing making the gas easier to transport and manage for end consumers.',
            subHead2: 'Mild Disinfectant',
            desc2: 'Triethylene glycol can also be used as a mild disinfectant. Due to its low toxicity, antimicrobial properties, and low odour, it is commonly used for air disinfection in occupied areas where more aggressive disinfectants cannot be used. Due to these disinfectant properties and the dehydrating properties, it is an ideal dehumidifying agent in air-conditioning units.',
          },

        },
      },
    ],
  },
  {
    id: 9,
    name: 'Glycol Ethers',
    products: [
      {
        id: 1,
        name: 'Butyl Di Glycol',
        details: {
          whatIs: {
            head1: 'What is Butyl Di Glycol?',
            sub1: 'Butyl di glycol (also known as BDG, butyl dioxitol, diethylene glycol monobutyl ether, 2(-2butoxyethoxy) ethanol and butoxydiethylene glycol) is a colourless, clear organic compound with a faint characteristic odour that has the formula C8H18O3. It is soluble in water and miscible with many common solvents, and also has low volatility and a high boiling point. These are the factors that make butyl di glycol most useful in the paint industry.',
            img: '/products-img/glycol-esters-1.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Butyl di glycol is one of the co-products formed when ethylene molecules are reacted with n-butanol using an alkali catalyst. If the ratio of ethylene to butanol is higher than two at the end of this process, then butyl diglycol is produced (along with tri-ethylene glycol monoethers).',
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Butyl di glycol is stored and transported either in bulk isocontainers or in drums made of mild steel and/or stainless steel and should always be stored under nitrogen. The room temperature where it is stored should not reach over 40 °C as it can oxidise at higher temperatures.',
            desc2: 'Butyl di glycol is not classified as dangerous for any form of transport but is classified as an irritant and should not be in contact with strong acids or oxidisers. It has a flashpoint of 105 °C (closed cup) and a specific gravity of 0.955. Keeping butyl diglycol in the appropriate conditions can give it a shelf life of up to a year.'
          },
          used: {
            head1: 'What is Butyl Di Glycol used for?',
            desc1: 'Butyl di glycol is most commonly used in the coatings and paint industries where its low volatility and high boiling point have seen it widely accepted as a flow promoter for baking finishes such as melamine, urea, phenol, or epoxy resin composites.  It is also widely used in stove enamels as it has a high evaporation number which means that the enamel properties can be improved without it affecting the drying time.  It also has a role in air-drying paints as it increases “brushability”.',
            desc2: 'Butyl di glycol is also found in the printing industry where it is a solvent for printing inks, and is also a starting material in the production of butyl diglycol acetate.'
          },

        },
      },
      {
        id: 2,
        name: 'Butyl Glycol',
        details: {
          whatIs: {
            head1: 'What is Butyl Glycol?',
            sub1: 'Butyl glycol (also known as BG, 2-butoxyethanol, glycol monobutyl ether and ethylene glycol monobutyl ether, butyl cellosolve, butoxyethanol) is a clear, colourless, oily liquid with a unique sweet yet mild odour and has the formula C6H14O2. It is a butyl ether of ethylene glycol and is miscible with water and common organic solvents. It has been produced industrially for over half a century and is used primarily as a solvent in paints and surface coatings but also in inks and cleaning products.',
            img: '/products-img/glycol-esters-2.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Chemical and physical properties of butyl glycol:',
              },
              {
                desc: 'Molecular Formula: C6H14O2 / CH3(CH2)2CH2OCH2CH2OH',
              },
              {
                desc: 'Synonyms: 2-Butoxyethanol, Butyl Cellosolve, Butyl Monoether Glycol, Ethylene Glycol Monobutyl Ether (EGBE), Butoxyethanol',
              },
              {
                desc: 'Cas Number: 111-76-2',
              },
              {
                desc: 'Molecular Mass: 118.176 g/mol1',
              },
              {
                desc: 'Exact Mass: 118.09938 g/mol',
              },
              {
                desc: 'Flashpoint: 153 °F / 67 °C',
              },
              {
                desc: 'Boiling Point: 340 °F / 171 °C',
              },
              {
                desc: 'Melting Point: -107 °F / -77 °C',
              },
              {
                desc: 'Vapour Pressure: 0.76 mm Hg at 68 ° F',
              },
              {
                desc: 'Water Solubility: ≥ 100 mg/ml (72° F)',
              },
              {
                desc:'Density: 0.90 g/cm3'
              },
              {
                desc: 'Log P: 0.83'
              }
            ],
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Butyl glycol is produced by reacting ethylene oxide with an alcohol such as normal butanol (nbutanol) within a catalyst. This process is called ethoxylation. If the ratio of ethylene oxide to nbutanol is greater than one then di- and tri- ethylene glycol monoethers are also produced.',
            desc2: 'Below is the chemical equation for this reaction:',
            desc3: 'C2H4O + C4H9OH → C4H9OC2H4OH',
            desc4: 'World production is estimated at between 300-500 KT per annum. Butyl glycol can also be produced through the etherification of butanol with 2-chloroethanol.'
          },
          distribute: {
            head1: 'How is it Handled, Stored and Distributed?',
            desc1: 'Butyl glycol is classed as an irritant, therefore, great precaution and care must be taken during the handling and distribution process.',
            subHead2: 'Hazards',
            desc4: 'Butyl glycol, if in contact with your eyes, skin, throat, can be harmful and cause serious irritation. Ingestion, and skin contact, can produce headaches, nausea, and dizziness. The wearing of PPE equipment is recommended to prevent the chances of skin content, swallowing and inhaling.',
            desc5: 'If contact is made, it should be immediately washed out of eyes, soapy water should be used to clean the skin and any clothing contacted should also be removed and replaced. Medical support must be obtained in all circumstances, especially if the chemical is swallowed.',
            subHead2_desc1:'It has a National Fire and Protection Association health rating of 3, indicating that it can cause serious and even permanent injuries in critical conditions. A fire rating of 2 indicates that a modest amount of high heat exposure is required for ignition to ensue; a flame or spark will easily cause an ignition.',
            subHead3: 'Storage & Distribution',
            desc6: 'Butyl glycol should be stored in a cool, dark place away from food and oxidants. It is transported in carbon steel, stainless steel or teflon containers and can be moved in bulk or drums. It has a specific gravity of 0.9 and a flashpoint of 60 °C (closed cup) and has been classified as harmful but is not classified as dangerous for any form of transport.',
            desc7: 'If a leak or spillage has occurred, it should be immediately isolated (up to 50 meters in a 360 angle) and the source should be eliminated (only if possible, without risk). Personal protection equipment must be worn, specifically a respirator to filter out gases emitted from the spillage.',
            desc8: 'The leak should be soaked up by a non-combustible material such as earth and then collected in sealable containers. Wash away remainder with water. If it is a minor leak, then a more common approach can be taken including the use of kitchen towel. This should then be burned away from the spillage. The area must then be ventilated to ensure all vapours and gases are eliminated.'
          },
          used: {
            head1: 'How is Butyl Glycol Used?',
            desc1: 'Butyl glycol has many uses, primarily as a solvent, in both the commercial and industrial industries.',
            subHead2: 'Industry Uses',
            desc2: 'Butyl glycol usage is dominated by the paint industry which consumes approximately 75 % of all the BG produced. This is because it is a low volatility solvent and can therefore both extend the drying times of coatings and improve their flow.',
            desc2_2: 'Other applications include use as a solvent in printing inks due to its high boiling point, textile dyes and as a component of hydraulic fluids. It is also a component of drilling and cutting oils and is a major component of Corexit 9527, which is an oil spill dispersant product.',
            desc2_3: 'It is also a chemical intermediate and, as such, is a starting material in the production of butyl glycol acetate which is, itself, an excellent solvent. It is also a starting material in the production of plasticisers by the reaction of phthalic anhydride.',
            subHead3: 'Commercial Uses',
            desc3: 'Butyl glycol is used regularly in most households as it is a component of many home cleaning products. It provides excellent cleaning power for domestic cleaning products and also provides the characteristic odour that we associate with them. It also plays the same role in some industrial and commercial surface cleaners.',
            desc4: 'Many other products contain butyl glycol including spray lacquers, varnishes, varnish removers, paints, liquid soaps, degreasers, leather protectors, whiteboard cleaners, printing pastes, enamels, cosmetics and herbicides.'
          },

        },
      },
      {
        id: 3,
        name: 'Butyl Poly Glycol',
        details: {
          whatIs: {
            head1: 'What is Butyl Poly Glycol?',
            sub1: 'Butyl poly glycol (also known as BPGL) is a brown liquid with a pungent odour.  It is miscible with water.',
            img: '/products-img/glycol-esters-3.jpg',
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Butyl poly glycol should be stored and transported in carbon steel/stainless steel drums and/or phenolic lined steel drums.  It has a specific gravity of 1.011 and a flash point of 174 °C (closed cup).  It is not regulated for any form of transport but is classed as an Irritant and carries the risk of serious damage to eyes.',
          },
          used: {
            head1: 'What is Butyl Poly Glycol used for?',
            desc1: 'Butyl poly glycol is used both as a hydraulic fluid component and an organic intermediate.',
          },

        },
      },
      {
        id: 4,
        name: 'Butyl Tri Glycol Ether',
        details: {
          whatIs: {
            head1: 'What is Butyl Tri Glycol Ether?',
            sub1: 'Butyl tri glycol (also known as BTGE, butyl tri tetra, triethylene glycol butyl ether, butoxy triglycol and triglycol monobutyl ether) is a clear, colourless liquid with a mild odour and the formula C10H22O4 / CH3(CH2)3(OCH2CH2)3OH. It is part of a group of glycol ethers with low volatility and strong coupling properties. It is miscible in water and has surface tension properties, making it useful in household and industrial cleaners.',
            img: '/products-img/glycol-esters-4.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Chemical and physical properties of butyl tri glycol:',
              },
              {
                desc: 'Molecular Formula: C10H22O4 / CH3(CH2)3(OCH2CH2)3OH',
              },
              {
                desc: 'Synonyms: BTGE, butyl tri tetra, butyltriglycol, butoxytriglycol, butyl tri tetra, butyl tri glycol, butyl triglycol, butoxy triglycol, triethylene glycol butyl ether, triglycol monobutyl ether, Dowanol tbat, butoxy triethylene glycol.',
              },
              {
                desc: 'Cas Number: 143-22-6',
              },
              {
                desc: 'Molecular Mass: 206.151809 g/mol',
              },
              {
                desc: 'Flashpoint: 290 °F / 143 °C',
              },
              {
                desc: 'Boiling Point: 532.4 °F / 278 °C',
              },
              {
                desc: 'Melting Point: -22 °F/ -30.0 °C',
              },
              {
                desc: 'Freezing Point: -31 °F/ -35 °C',
              },
              {
                desc: 'Water Solubility: miscible',
              },
              {
                desc: 'Density: 0.9890 g/cu cm at 20 °C',
              },
            ],
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'The primary method of manufacturing butyl tri glycol is via reacting ethylene oxide with ethyl alcohol. This is done by vacuum distillation which separates and isolates the produced butyl tri glycol from the reaction.',
            desc2: 'Other methods of production include reacting of alcohols with ethylene oxide. Global consumption of butyl tri glycol ether is estimated at approximately 21,000 tonnes per year.',
          },
          distribute: {
            head1: 'Handling, storage and distribution',
            subHead1: 'Hazards and Safety',
            desc1: 'Butyl tri glycol has an NFPA health rating of 2, indicating that it can cause incapacitation or residual injury under emergency conditions. Short term exposure to the eyes and skin can cause irritation, dryness, and cracking.',
            desc2: 'An NFPA fire rating of 1 demonstrates that it will not ignite under ambient temperatures unless preheated. An NFPA instability rating of 0 shows that butyl tri glycol is stable underneath most conditions, including fire.',
            desc3: 'Full personal protective equipment should be worn when handling this product to prohibit contact with the skin, eyes, and throat. This includes gloves, masks, and Safety Goggles. In the case of a leak, respirators should be worn for protection against vapours. The leak should be prevented from reaching sewers, waterways and basements and washed away with water.',
            subHead2: 'Storage and distribution',
            desc4: 'Butyl tri glycol can be stored and transported in stainless steel, mild steel, or carbon steel drums and/or tanks and must be kept in a well-ventilated area.  It is not classified as dangerous for any form of transport but is classed as an Irritant.  It has a flashpoint of 156 °C (closed cup) and a specific gravity of 0.985.',
          },
          used: {
            head1: 'What is butyl tri glycol used for?',
            subHead1: 'Industry Uses',
            desc1: 'Butyl tri glycol is used as a solvent for nitrocellulose, oils, paint removers, gums, soaps, dyes, grease, industrial cleaners, polish strippers, disinfectants, chlorinated rubber, wood paints, inks and levelling agents.',
            desc1_2: 'It is also used as a component in the base blend used in the manufacture of cutting and hydraulic oils, including hydraulic brake fluids, as a useful component in paint stripping formulations as it has low volatility, employed as a dye carrier in textile dyeing processes, as a coalescent for coatings, in the manufacture of plasticizers, as a dye carrier for textile dyes and as a solvent/intermediate for ester production.',
            subHead2: 'Commercial Uses',
            desc2: 'Butyl tri glycol is found in many commercial products including de-icers, automotive care products, paints, inks, coatings, oils, greases, disinfectants and lubricants.',
          },

        },
      },
      {
        id: 5,
        name: 'Ethyl Di Glycol',
        details: {
          whatIs: {
            head1: 'What is Ethyl Di Glycol?',
            sub1: 'Ethyl di glycol (also known as EDG, 2-(2-ethoxyethoxyethanol, ethoxy diglycol and diethylene glycol monoethylether) is a clear, colourless liquid with a mild, yet characteristic odour.  It is miscible in water and also in alcohols, esters, ethers, and ketones.',
            img: '/products-img/glycol-esters-5.png',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Ethyl di glycol is a product of the reaction of ethylene oxide and ethanol in the presence of a catalyst.  The final product is refined by distillation where the unreacted alcohol, and the mono and di ether products, are separated.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Ethyl di glycol can be stored and transported in mild steel drums or polyethylene, or polypropylene, storage drums.  It is not classified as dangerous for any form of transport but it is classed as an Irritant.  It has a flash point of 96 °C (closed cup) and a specific gravity of 0.990.',
          },
          used: {
            head1: 'What is Ethyl Di Glycol used for?',
            desc1: 'Ethyl di glycol has low viscosity at low temperatures and it is this quality, combined with a low solidification point, which see it employed as a constituent part of many brake fluids.  It is also widely used in the paint industry where it is used to improve the gloss and flow properties of paint.  It is also a constituent of many wood stains and wood preservatives.',
          desc2:'Ethyl di glycol also has a variety of roles in other industries.  In the printing industry it is used both in printing inks and as a cleaning agent in offset printing.  It is an ingredient in Indian inks and also in ballpoint pen pastes.  In the textile industry, it is a solvent used in the printing and dyeing of textile fabrics and fibres.  It can also be used in the production and formulation of pesticides.'
          },

        },
      },
      {
        id: 6,
        name: 'Ethyl Tri Glycol',
        details: {
          whatIs: {
            head1: 'What is Ethyl Tri Glycol?',
            sub1: 'Ethyl triglycol (also known as ethoxy triglycol; triethylene glycol monoethyl ether; and TGEE) has the formula C8H18O4 and is an ethoxy alcohol derivative.  It is an odourless, colourless, and viscous liquid that is water soluble and is also hygroscopic.  It also has a high boiling point of 256oC and a slow evaporation rate.',
            img: '/products-img/glycol-esters-6.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Ethyl triglycol is produced in a closed, continuous process by the reaction of ethanol with ethylene oxide in the presence of a catalyst.  It is then purified, via distillation, to form the final product.  Diethylene glycol monoethyl ether and ethylene glycol monoethyl ether are also co-products of this reaction.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Triethylene glycol monoethyl ether has a flashpoint of 132oC (closed cup), a specific gravity of 1.02 and is not classified as hazardous for transportation. It should be transported in carbon, steel or stainless steel tanks and should then be stored in a cool, dry, and well-ventilated area.  The container should be resealed after use and should be kept upright. Ethyl triglycol should be stable if stored in recommended conditions.',
          },
          used: {
            head1: 'What is Ethyl Tri Glycol used for?',
            desc1: 'The majority of Ethyl triglycol is consumed in hydraulic and brake fluids.  This is because the viscosity of ethyl triglycol remains largely constant when temperatures fluctuate, and also because of its high boiling point (256oC).',
            desc2:'Triethylene glycol monoethyl ether is also utilised as both a chemical process solvent and as a chemical intermediate in the production of esters used as plasticisers, surfactants, and solvents.  It is also employed as a solvent in the manufacture of protective coatings, adhesives, wood stains and varnish, paint strippers and in household and industrial cleaning formulations.',
            desc3: 'Ethyl triglycol is also employed in the textile industry where it acts as a dye carrier in textile dyeing processes and it also acts as a coupling agent for resins and dyes in other water-based printing inks.  Ethyl triglycol is also utilised as a solubilizer for incompatible liquids in the production of insecticides and is also employed in the detergent industry in hand-wash pastes.',
            desc4: 'It is this variety of applications that means many of us are in contact with Ethyl triglycol on a regular basis.  Household products which may contain Ethyl triglycol include disinfectants, surface cleaners, paint, paint strippers, floor polish, marker pens, and automotive brake fluid.'
          },

        },
      },
      {
        id: 7,
        name: 'Methyl Di Glycol',
        details: {
          whatIs: {
            head1: 'What is Methyl Di Glycol?',
            sub1: 'Methyl di glycol (also known as diethylene glycol monomethyl ether, diglycol monomethyl ether, methoxy diglycol, ethylene diglycol monomethyl ether, DEGME, MDG and MDGE) is a clear, colourless, almost odourless liquid which has the formula C5H12O3. It is miscible in water and many organic solvents and has hygroscopic qualities.',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Methyl di glycol is a product of the reaction of ethylene oxide and methanol in a high temperature and high pressure environment.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Methyl di glycol should be stored in a cool, dry, well-ventilated area, out of the direct sunlight.  It is not classified as dangerous for any form of transport but is classed as harmful.  It has a specific gravity of 1.021 and a flash point of 87o C (closed cup).',
          },
          used: {
            head1: 'What is Methyl Di Glycol used for?',
            desc1: 'The primary uses for methyl di glycol are as a de-icing additive in aviation fuel, and as a solvent.  It is utilised in the aviation industry as it has a relatively high flash point and it is utilised in both the paint and printing industry because it combines high solvency with a low odour.  This makes diethylene glycol monomethyl ether a very effective solvent for resins, pastes, and nitrocellulose lacquers, and also for printing inks, stamp pad inks and ballpoint pen inks.',
          },

        },
      },
      {
        id: 8,
        name: 'Methyl Glycol',
        details: {
          whatIs: {
            head1: 'What is Methyl Glycol?',
            sub1: 'Methyl glycol (also known as 2-methoxyethanol, glycol monomethyl ether, ethylene glycol monomethylether, methyl cellosolve, methyl oxito, and MGL) is a clear, colourless liquid that has a mild characteristic, ether-like, odour.  It is miscible with water and many organic solvents and has the formula C3H8O2',
            img: '/products-img/glycol-esters-8.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Methyl glycol is produced via the reaction of ethylene oxide with methanol, in water, and in a high temperature and high pressure environment.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Methyl glycol has a flashpoint of 37 °C (closed cup) and is thus highly flammable and should be stored in a cool, dry, well-ventilated area that is free from the possibility of ignition.  For transport purposes it is categorised as hazard class 3, and packing group III.  2-methoxyethanol is classified as harmful and has a specific gravity of 0.965.',
          },
          used: {
            head1: '2 Methoxyethanol Uses',
            desc1: 'Methyl glycol has the ability to dissolve a variety of different types of chemical compounds.  This ability sees it used as a solvent for cellulose acetate, and a solvent for resins (particularly in the electronics industry).  2-methoxyethanol is used in alcohol soluble dyes, and in quick-drying varnishes, enamels, nail polishes and wood stains.',
            desc2:'It is also used as an additive in aeroplane deicing solutions and small amounts of methyl glycol are also used in perfume fixatives and in the manufacture of photographic film.',
          },

        },
      },
    ],
  },
  {
    id: 10,
    name: 'Hydrocarbons',
    products: [
      {
        id: 1,
        name: 'Aromatic Solvent C9',
        details: {
          whatIs: {
            head1: 'What is Aromatic Solvent C9?',
            sub1: 'Aromatic hydrocarbons are a series of organic molecules that form flat ring-shaped bonds.  Aromatic hydrocarbon C9/C10/C12 resins are conventionally named because they are defined by the number of carbon monomers in the chemical.  Aromatic hydrocarbons have a distinctive aromatic odour and a typical Gardner colour of 6 – 10 (dark yellow to dark brown).  They are insoluble in water, low alcohols and ketones, however are soluble in aliphatic hydrocarbons and chlorinated hydrocarbon solvents.',
          },
          produce: {
            head1: 'The Production of Aromatic Hydrocarbon',
            desc1: 'Aromatic hydrocarbon resins are chemically manufactured from resin oil that contains various monomers.  The end product is combination of the following chemicals: indene (20-25%), methlinenes(5-15%), vinyltoluenes(15-25%) and a-methylstyrene (up to 5%).  They are based on aromatic feedstocks that do not undertake much refinement prior to the above polymerisation process.'
          },
          distribute: {
            head1: 'Storage and distribution of Aromatic Solvent c9.',
            desc1: 'A chemical trader would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Solvents such as the aromatic hydrocarbons should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
            desc2: 'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, aromatic hydrocarbons are classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 3.'
          },
          used: {
            head1: 'What is Aromatic Solvent c9 used for?',
            desc1: 'Aromatic hydrocarbons are mainly used in adhesives, printing inks, sealants, polychoroprene rubber, concrete curing compounds, anti-drying agents and paints.  They have a good compatibility with SBR, SIS, SEBS and SEPS and can be used as a pressure sensitive adhesive, hot-melt adhesive and synthetic rubber.  They can also be applied to coatings on ships, vehicles and bridges because they will improve the lustre, increase hardness and make areas more water resistant.  Within the printing industry, the petroleum resin will increase water resistance, solvent consumption and resistance to dry.  They are also used for hot road markings.  The end user markets for this product are the paints, coatings and rubber industries.',
          },

        },
      },
      {
        id: 2,
        name: 'Aromatic Solvent C10',
        details: {
          whatIs: {
            head1: 'What is Aromatic Solvent C10?',
            sub1: 'Aromatic solvent C10 (also known as Solvesso 150; aromatic 150; A150; and kocosol 150) is a colourless, clear liquid with a mild aromatic odour.  It is a member of the petroleum hydrocarbon family and consists predominately of C9-C11 aromatic hydrocarbons, predominately C10.',
          },
          produce: {
            head1: 'How is Aromatic Solvent C10 produced?',
            desc1: 'Aromatic solvent C10 is produced from the distillation of aromatic streams that are derived from crude oil.  The processes and equipment for the manufacture, transfer, and storage of these aromatic solvents are continuous and enclosed.',
            desc2: 'Global production of heavy aromatic Naphtha-type products, such as A150, is expected to exceed 450 thousand metric tons per annum.'
          },
          distribute: {
            head1: 'Storage and distribution of Aromatic Solvents',
            desc1: 'Aromatic solvent C10 can be stored in mild steel drums and /or iso tanks and transported by tank truck or bulk vessels.  It should be stored in a cool, dry, well-ventilated area that is free from the risk of ignition.  Aromatic solvent C10 has a specific gravity of 0.855 and a flash point of 55 °C (CC) which makes it flammable, and is classified as packing group III.',
          },
          used: {
            head1: 'What is Aromatic Solvent c10 used for?',
            desc1: 'Aromatic solvent C10 is a high boiling point (181-205 °C) aromatic hydrocarbon solvent used mainly in paints and coatings, printing inks, and the agrochemical industry.  It has a flash point and evaporation rate higher than that of Xylene and therefore imparts better flow and film formation making it useful in the paint and coatings industry.  It also has no ethyl-benzene content and is therefore desired for environmentally friendly agrochemical and pesticide formulations.',
            desc2: 'Aromatic solvent C10 is a resin blendstock for foundries and has downhole applications in oilfields.  It is also ideal for use in process additive fluids such as chloro-rubber formulations, synthetic resins, and oil-modified alkyds.'
          },

        },
      },
      {
        id: 3,
        name: 'Aromatic Solvent C12',
        details: {
          whatIs: {
            head1: 'What is Aromatic Solvent C12?',
            sub1: 'Aromatic solvent C 12 (also known as solvent naphtha; Garosol 200; Solvesso 200; aromatic 200; and wash oil) is a clear and slightly yellow liquid which is aromatic and is insoluble in water.  It is part of the petroleum hydrocarbon family and has the chemical name of aromatic hydrocarbon 64742-94-5.',
          },
          produce: {
            head1: 'How is Aromatic Solvent C12 produced?',
            desc1: 'Aromatic solvent C 12 is a heavy aromatic that is produced from the distillation of aromatic streams that are derived from crude oil.',
          },
          distribute: {
            head1: 'How is Aromatic Solvent C12 Stored?',
            desc1: 'Aromatic solvent C 12   is stored in mild steel drums and/or iso tanks and can be transported by bulk vessels or tank trucks.  It should be stored in an area that is both cool and well ventilated.  It is not regulated for transport by road, air, sea, or rail but is classified as Harmful.  It has a specific gravity of 0.975 and a flash point of 95 °C (closed cup).',
          },
          used: {
            head1: 'What are the uses for Aromatic Solvent C12?',
            desc1: 'Aromatic solvent C 12 is a useful industrial chemical as it has a high boiling point (approximately 220-305 degrees C), a slow evaporation rate, and a high flash point.  It is also a low hazardous air pollutant and is relatively environmentally friendly. The combination of these  factors make aromatic solvent C 12 desirable in many applications, such as high build coatings and printing inks; agrochemicals; oil field chemicals; fuel additives; and emulsifiers and surfactants.',
            desc2: 'It also has a role in water treatment chemicals, process oils, and as a foundry chemical.  It is used in lubricants and corrosion inhibitors and in solvent-based dyes.'
          },

        },
      },
      {
        id: 4,
        name: 'Toluene',
        details: {
          whatIs: {
            head1: 'What is Toluene',
            sub1: 'Toluene is a clear water-insoluble solvent with a molecular formula of C7H8.  It has an aromatic, benzene-like smell and is a highly volatile flammable liquid with a flash point of 4° C.  It is obtained from petroleum and coal tar and is predominantly used as a solvent in the manufacturing of other organic chemicals.',
            img: '/products-img/toluene.jpg',
          },
          produce: {
            head1: 'How is Toluene produced?',
            desc1: 'Toluene is naturally released into the atmosphere from the following: petroleum fuels, toluene-based solvents, thinners and from motor vehicle exhaust fumes.  The current method to chemically manufacture toluene is through a catalytic reforming process.  A hydrocarbon mixture which is rich in aromatics is passed over a dehydrated catalyst and then obtained from a cut of the distillation or solvent extraction process.'
          },
          distribute: {
            head1: 'Storage and Distribution of Toluene',
            desc1: 'A chemical wholesaler would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Toluene should be kept out of direct sunlight, heat and open flames.  Solvents such as toluene should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
            desc2: 'A bulk solvent exporter would normally distribute this solvent in bulk vessels or tank trucks.  For transportation purposes, toluene is classed as a flammable liquid with a fire hazard rating of 2.  A full bulk chemical distributor would export the solvent throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 2.'
          },
          used: {
            head1: 'What is Toluene used for?',
            desc1: 'The main chemical use of toluene is to make benzene, xylenes and other solvents.  It can also be used to manufacture other chemicals such as phenol, nitrobenzene, benzoic acid and benzyl chloride.  As a solvent, toluene can be used in paints, paint thinners, adhesives, inks, resins, cleaning agents, leather tanners and inks.  It can also be used to manufacture polymers that produce nylon, plastic soda bottles and for pharmaceuticals, dyes and cosmetic products.  Toluene is also used as a coolant in sodium cold traps underneath nuclear reactor loops.  The user end markets of this product are the chemical, paints, adhesive, cleaning, leather, plastics, cosmetic and pharmaceutical industries.',
            desc2:'It is also used as an additive in aeroplane deicing solutions and small amounts of methyl glycol are also used in perfume fixatives and in the manufacture of photographic film.',
          },

        },
      },
      {
        id: 5,
        name: 'Xylene',
        details: {
          whatIs: {
            head1: 'What is Xylene?',
            sub1: 'Xylene or xylol (C6H4(CH3))  is a mixture of three isomers – ortho (o), meta (m), and para (p).  Xylene is a clear, colourless, sweet-smelling liquid that is highly flammable with a flashpoint between 23° C and 61° C.',
            img: '/products-img/xylene.jpg',
          },
          produce: {
            head1: 'How is Xylene produced?',
            desc1: 'Xylene is both naturally occurring and manmade.  It can be refined from crude oil in a process known as alkylation.  It can also be produced from coal carbonisation as an extract from the benzole gas created by coke ovens.'
          },
          distribute: {
            head1: 'Storage and Distribution of Xylene',
            desc1: 'A chemical wholesaler would have a bulk petrochemical storage facility to regulate this product.  Storage is normally in a cool, dry and well ventilated facility away from oxidising agents.  Xylene should be kept out of direct sunlight, heat and open flames.  Solvents such as xylene should be stored in drummed containers such as isotanks made of stainless steel, aluminium or carbon steel.',
            desc2: 'A bulk solvent exporter would normally distribute this chemical in bulk vessels or tank trucks.  For transportation purposes, xylene is classed as a flammable liquid with a fire hazard rating of 3.  A full bulk chemical distributor would export xylene throughout regions such as the UK, Europe, Africa and America.  This product is a packing group 3.'
          },
          used: {
            head1: 'What is Xylene used for?',
            desc1: 'The majority of mixed xylene isomers are used for blending into petrol and gasoline.  It is also a key solvent in the printing, rubber, leather and pesticides industries.  It can also be used as a cleaning agent for steel, silicon and as a thinner for paint, varnishes, adhesives and inks.  Other applications ofxXylene include making certain types of plastic, as an inhalant drug and the manufacture of dyes, fibres, perfumes, and films.  The main end user markets are the petrochemical, printing, rubber, leather, cleaning, plastics and pesticides industries.',
          },

        },
      },

    ],
  },
  {
    id: 11,
    name: 'Ketones',
    products: [
      {
        id: 1,
        name: 'Acetone',
        details: {
          whatIs: {
            head1: 'What is Acetone?',
            sub1: 'Acetone (alternatively known as Dimethylketone, Dimethylketal or 2-Propanone, UN 1090) is a clear, colorless, liquid chemical with the formula (CH₃)₂CO. It is a flammable, low toxic, water-miscible compound with a variety of everyday uses in industry, the laboratory, pharmaceuticals and the home.',
            img: '/products-img/acetone.jpg',
          },
          produce: {
            head1: 'How is Acetone produced?',
            desc1: 'Acetone is a naturally occurring chemical which is a by-product of normal metabolic processes in humans, animals and plants. Industrial acetone is usually produced as a by-product from phenol production and is derived, in this instance, from propylene and benzene, which are the main raw materials used to make phenol.',
            desc2: 'The world annual production of acetone is several millions of tons. It is produced in over 40 different countries including the UK and Europe, Africa and America and is moved around the globe by chemical manufacturers, distributors and stockists.'
          },
          distribute: {
            head1: 'Storage and Distribution',
            desc1: 'Due to its highly flammable nature, care must be taken to store and use this product. Acetone is stored in contract bulk petrochemical sites or at stockists own premises either in mild steel bulk storage tanks and/or new or reconditioned steel drums or isotanks.',
            desc2: 'It can be transported by bulk vessels or tank trucks. For transportation purposes, Acetone is classed as highly flammable and irritant and is packing group II, flashpoint -17.8º C. The specific gravity (SG) of acetone is 0.8.'
          },
          used: {
            head1: 'What is Acetone used for?',
            desc1: 'The uses for Acetone are many and diverse. The most common uses are as a precursor to other chemicals, primarily to methyl methacrylate in the ever-growing plastics and PVC industries. It’s approximated that 75% of acetone produced by chemical manufacturers is utilised this way.',
            desc2: 'Other industrial uses of Acetone include the use as a denaturant in the pharmaceutical industry (to produce denatured alcohol). Of the remainder, around 13% of the world’s Acetone production is used by the end user market as a solvent, providing the active ingredient in many cleaning products, nail polish removers, paint/resin/adhesive thinners and various degreasers. Other uses include its employ as an excipient or bulking agent in certain medications and in the high street beauty industry as a component in chemical peels – a process which strips the outer layers of skin away to freshen the appearance.'
          },

        },
      },
      {
        id: 2,
        name: 'Cyclohexanone',
        details: {
          whatIs: {
            head1: 'What is Cyclohexanone?',
            sub1: 'Cyclohexanone (also known as oxocyclohexane, pimelic ketone, cyclohexyl ketone, and CYC) is a clear oily liquid that has a colourless to light yellow tinge and a pungent odour. It is a sixcarbon cyclic molecule belonging to the class of cyclic ketones (organic compounds) with the formula C6H10O.',
            sub2: 'It is slightly soluble in water, completely miscible with common solvents and reacts with oxidants such as nitric acid. It occurs naturally in crude oils and is also produced synthetically, in large quantities, as it is a key intermediate in the production of nylon.',
            img: '/products-img/cyclohexanone.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Chemical and physical properties of cyclohexanone:',
              },
              {
                desc: 'Molecular Formula: C6H10O / (CH2)5CO',
              },
              {
                desc: 'Synonyms: Ketohexamethylene, oxocyclohexane, sextone, pimelic ketone, pimelin ketone, cyclohexyl ketone, Hydrol-O, anone, CYC.',
              },
              {
                desc: 'Cas Number: 108-94-1',
              },
              {
                desc: 'Molecular Mass: 98.14 g/mol',
              },
              {
                desc: 'Exact Mass: 98.073165 g/mol',
              },
              {
                desc: 'Flashpoint: 111°F / 43.9',
              },
              {
                desc: 'Boiling Point: 312.1 ° F / 155.6 at 760 mm Hg',
              },
              {
                desc: 'Melting Point: 3 ° F/ -16.1 ° C',
              },
              {
                desc: 'Vapour Pressure: 101.7° F at 10 mm Hg',
              },
              {
                desc: 'Water Solubility: 50 to 100 mg/mL at 64° F',
              },
              {
                desc:'Density: 0.945 at 68 °F'
              }
            ],
          },
          produce: {
            head1: 'How is cyclohexanone made?',
            desc1: 'There are several methods of manufacturing cyclohexanone, one of which being the catalytic hydrogenation of phenol:',
            desc2: 'C6H5OH + 2 H2 → (CH2)5CO',
            desc3: 'Another method is via the catalytic air-oxidation of cyclohexane, typically in the presence of cobalt crystals:',
            desc4: 'C6H12 + O2 → (CH2)5CO + H2O',
            desc5: 'This reaction is one of the primary commercial bulk manufacturing methods, the other being the hydrogenation of benzene (in a closed system).',
            desc6: 'Other methods include the catalytic dehydrogenation of cyclohexanol:',
            desc7: 'C6H11OH → C6H11OH + H2',
            desc8:'Worldwide, thousands of tonnes of cyclohexyl ketone are produced annually. Demand for it is still growing, especially in China, and several new production plants have come on-line in the past few years in order to help meet this demand.'
          },
          distribute: {
            head1: 'Handling, storage and distribution',
            subHead1: 'Hazards and toxicity',
            desc1: 'Cyclohexanone has an NFPA health rating of 1 and “can cause significant irritation”. If inhaled, it can irritate the throat and respiratory passages, causing headaches and nausea. Excessive exposure to the eyes, nose and skin can cause similar effects such as irritation, drowsiness, and unconsciousness.',
            desc2: 'It has an NFPA fire rating of 3 and “can be ignited under almost all ambient temperature conditions”. Heat, sparks, or flames can and create vapours that are heavier than air and will travel to the source of the ignition and surrounding areas. An instability rating of 0 indicates that it is “normally stable, even under fire conditions”.',
            subHead2: 'Safety and procedures',
            desc4: 'In the case of a spillage, the leak should be isolated at a minimum of 50 metres and avoid being walked through. You should also prohibit the leak from spreading into waterways, sewers, and basements. Soak up the spillage with dry materials such as dirt or combustible materials.',
            desc5: 'Cyclohexanone has a low flash point; therefore, fires can easily be ignited. In the case of a fire, all ignition sources should be removed, and alcohol-resistant foam, dry chemical or CO2 should be used to fight. PPE equipment should always be worn when handling cyclohexanone to protect the skin and eyes. Contaminated clothing should be removed immediately.',
            subHead3: 'Storage and distribution',
            desc6:'Cyclohexanone can be transported in drums and/or tank trucks. It should be stored in a cool, dry, well-ventilated area that is free from the risk of ignition. For transportation purposes, it falls into packing group III and hazard class III and it is an Irritant and is highly flammable. It has a specific gravity of 0.945 and a flashpoint of 46 °C (closed cup).'
          },
          used: {
            head1: 'Cyclohexanone uses',
            subHead1: 'Cyclohexanone uses in industry',
            desc1: 'Cyclohexanone has many industrial uses, primarily as an industrial chemical and chemical intermediate in the production of specific target molecules. In fact, the consumption of cyclohexanone is linked almost entirely to the nylon industry with derivatives oxidised to produce adipic acid and caprolactam, which are precursors for nylon 6. Up to 70% of the world’s caprolactam is produced via cyclohexanone.',
            desc1_2: 'Other cyclohexanone derivatives are used for the synthesis of pharmaceuticals, dyes, herbicides, pesticides, plasticisers, and rubber chemicals. Additional industry uses of cyclohexanone include as an adhesive, fuel, paint and coating additive and laboratory chemical.',
            desc1_3: 'Cyclohexanone is used as a solvent for lacquers, paints, resins, degreasers, spot removers, polymers, copolymers, waxes, crude rubber, cellulose acetate, the manufacturing of herbicides and anihistamines.',
            subHead2: 'Consumer uses',
            desc2: 'Cyclohexanone is found in various consumer products including in adhesives, paints, automotive, cleaning and furnishing care products, electronics, and photo chemicals.'
          },

        },
      },
      {
        id: 3,
        name: 'Di Acetone Alcohol',
        details: {
          whatIs: {
            head1: 'What is Di Acetone Alcohol?',
            sub1: 'Di acetone alcohol (also known as DAA, 4-hydroxy-4methyl-2-pentanone, and diacetone) is a clear, colourless liquid with a mild odour, that is soluble in water and miscible in oil. It has the formula C6H12O2.  Di acetone alcohol occurs naturally in the plant Sleepy Grass (achnatherum robustum) and is prepared synthetically for use in the chemical and industrial industries.',
            img: '/products-img/ketones-1.jpg',
          },
          produce: {
            head1: 'How is Di-Acetone Alcohol produced?',
            desc1: 'Di acetone alcohol can be prepared from acetone by the action of the alkali metal hydroxides, calcium hydroxide and barium hydroxide.',
          },
          distribute: {
            head1: 'Storage and distribution of Di-Acetone Alcohol',
            desc1: 'Di acetone alcohol is stored in mild steel and /or stainless steel tanks and/or drums and can be transported by bulk vessels or tank trucks.  It should be stored in an area that is well ventilated and that is away from sunlight, ignition sources, and other forms of heat.  For transportation purposes, it comes into packing group III, hazard class 3.3 and is an irritant. Diacetone alcohol has a specific gravity of 0.938 and a flashpoint of 59 °C (closed cup).',
          },
          used: {
            head1: 'What is Di-Acetone-Alcohol used for?',
            desc1: 'The main use for di acetone alcohol is as a solvent for water-based coatings with approximately 90% of all the DAA produced used in this way.  It can also be added to cellulose ester lacquers where it produces a brilliant gloss and hard film, with little odour.',
            desc2: 'Diacetone alcohol has many other uses including in the making of artificial silk, leather and imitation gold lead, in gravure printing inks, wood stains, wood preservatives and also in degreasers and metal cleaning compounds.',
            desc3:'DAA is also important as a chemical intermediate as it can be condensed to produce mesityl oxide (MO) and water.  This carbon-carbon double bond of MO is then selectively hydrogenated to produce MIBK (methyl isobutyl ketone) which is, itself, a valuable industrial solvent.'
          },

        },
      },
      {
        id: 4,
        name: 'Di Iso Butyl Ketone',
        details: {
          whatIs: {
            head1: 'What is Di Iso Butyl Ketone?',
            sub1: 'Di iso butyl ketone (also known as DIBK, 2,6-Dimethyl-4-heptanone, Isovalerone, and Isobutyl ketone) is a clear, colourless, stable liquid with a mild, sweet odour reminiscent of peppermint.  It is miscible with most organic compounds, is immiscible with water, and has the formula C9H18O.',
            sub2: 'It is a solvent with a high-boiling point and which is also slow-evaporating and low density.  These properties make it a very useful product across a range of industries.',
            img: '/products-img/ketones-2.jpg',
          },
          produce: {
            head1: 'How is Di Iso Butyl Ketone produced?',
            desc1: 'Di iso butyl ketone is produced by first dehydrogenating alcohol to acetone.  There is then a series of condensations and hydrogenations with di iso butyl ketone, acetone, and methyl isobutyl ketone co-produced in a mixed ketone process.  These products are then separated and purified and are ready for use.',
          },
          distribute: {
            head1: 'Storage and Distribution of Di Iso Butyl Ketone',
            desc1: 'Di iso butyl ketone can be stored in bulk tanks or drums and can be transported by tank truck.  It has a specific gravity of 0.807 and a flash point of 49 °C and is, therefore, highly flammable.  It should be stored in a cool, dry, well-ventilated area that is free from the risk of ignition.  For transportation purposes, DIBK is classified as packing group III and hazard class 3.',
          },
          used: {
            head1: 'What is Di Iso Butyl Ketone used for?',
            desc1: 'Di iso butyl ketone is a very useful chemical in industry.  It provides good solvency for many synthetic resins such as vinyl, acrylic, alkyds, polyester and epoxy.  It is also a solvent for nitrocellulose lacquers, high-solids coatings and stains, and paint stripper.  Equally, it is a solvent for adhesives, printing inks, and for cleaning and degreasing.',
            desc2: 'Di iso butyl ketone is also an extraction solvent for organic pollutants, and for the mining of minerals.  It is also used as an extraction solvent and recrystallisation aid in the pharmaceutical industry, and has a role as a chemical intermediate in the production of di isobutyl carbinol.'
          },

        },
      },
      {
        id: 5,
        name: 'Methyl Ethyl Ketone',
        details: {
          whatIs: {
            head1: 'What is Methyl Ethyl Ketone?',
            sub1: 'Methyl ethyl ketone (MEK) or butanone is a clear, volatile liquid with the formula C4H8O that is soluble in water and has a mild, acetone odour. The compound is biosynthesized by trees and is found in small quantities in foods such as some fruits and vegetables, chicken, beans, honey, and a wide variety of cheeses.',
            img: '/products-img/ketone-3.jpg',
          },
          technicalProps: {
            head: 'Technical Properties',
            props: [
              {
                desc: 'Technical properties of Methyl Ethyl Ketone:',
              },
              {
                desc: 'Cas Number: 78-93-3',
              },
              {
                desc: 'Molecular Formula: C4H8O or CH3COCH2CH3',
              },
              {
                desc: 'Synonyms: MEK, butanone, 2-butanone, butan-2- one, oxobutane, or methyl acetone',
              },
              {
                desc: 'Molecular Mass: 72.11 g/mol',
              },
              {
                desc: 'Exact Mass: 72.057514874 g/mol',
              },
              {
                desc: 'Flashpoint (closed cup): 16 °F / -9 °C',
              },
              {
                desc: 'Autoignition temperature: 961 °F / 516.11 °C',
              },
              {
                desc: 'Boiling Point: 175 °F / 79.4 °C at 760 mm Hg',
              },
              {
                desc: 'Melting Point: -123.3 °F / -86.28 °C',
              },
              {
                desc: 'Vapour Pressure: 77.5 mm Hg at 68 °F / 20 °C',
              },
              {
                desc:'Density: 0.806 at 68 °F'
              },
              {
                desc: 'Log P: 0.29'
              }
            ],
          },
          produce: {
            head1: 'How is Methyl Ethyl Ketone produced?',
            desc1: 'The main commercial production route for methyl ethyl ketone products is through the dehydrogenation of secondary butanol although newer technology involves the direct oxidation of nbutene in solution using palladium and cupric chlorides as catalysts.',
            desc2: 'The Chinese market is the main driver for the demand of MEK and is also where several new productions plants have been opened in the last 5 years. World production now stands at approximately 320,000 to 350,000 tonnes.',
          },
          distribute: {
            head1: 'How is Methyl Ethyl Ketone Stored and Distributed?',
            desc1: 'Methyl ethyl ketone is packed in drums. It should be stored in a cool, dry, well-ventilated area that is free from the risk of ignition as it is highly flammable. For transportation purposes, methyl ethyl ketone is classified as packing group II and a hazard class 3 with a flashpoint of -9° C (closed cup) and a specific gravity of 0.81. It is also an irritant.',
            subHead2: 'Health Hazards',
            desc4: 'The compound is rated a 1 for health under the NFPA 704 indicating that exposure should only cause a minor residual injury.',
            desc5: 'To avoid inhalation occurring, especially for regular uses, adequate ventilation should be ensured with local exhaust ventilation and enclosures. The direct inhalation of high levels of MEK may cause dizziness, nausea, headaches, irritation of the respiratory system and chest tightness. If the individual has difficulty breathing, they should be moved to air free of the vapours and be provided oxygen until medical assistance is available.',
            desc6:'Direct eye exposure can cause sore, stinging, red eyes with tearing and vapours can also irritate the eyes. Chemical safety goggles should therefore be used when contact with the eyes is possible. Repeated or prolonged skin contact should be avoided as this can cause irritation and dryness. Therefore, gloves, aprons and appropriate boots should be worn when repeated contact with MEK is possible.'
          },
          used: {
            head1: 'Methyl Ethyl Ketone Uses',
            subHead1: 'Solvent',
            desc1: 'The primary use of MEK is as a solvent with over 50% of demand coming from the paints and coating industry. The compound is used to enable a low viscosity solution that does not impact the film properties of the product.',
            desc1_2: 'These lacquers are used in the automotive, electrical goods and furniture industries. It is very effective as a surface coating solvent that it has become almost vital to the development of high solids coatings that reduce external emissions.',
            subHead2: 'Plastic Wielding Agent',
            desc2: 'MEK is also commonly used in scale model sets, where a strong, durable bond is required between different model parts. When applied to a part, the surface plastic is dissolved and can then be wielded together by hand. The methyl ethyl ketone then evaporates away, leaving no residue to impact the appearance of the model and strong bonds that will be difficult to break apart.',
            subHead3: 'Industry Uses',
            desc3: 'The compound can also be used in the manufacture of plastics and textiles, the manufacture of printing inks, adhesives, pesticides and in rubber-based industrial cements. It is used in the chemical industry as it is a precursor to methyl ethyl ketone peroxide which is itself used as a catalyst to initiate the polymerisation of polyester resins used in fibreglass reinforced products.'
          },

        },
      },
      {
        id: 6,
        name: 'Methyl Iso Butyl Ketone',
        details: {
          whatIs: {
            head1: 'What is Methyl Iso Butyl Ketone?',
            sub1: 'Methyl iso butyl ketone (also known as MIBK, methyl isobutyl ketone, and mono-iso butyl ketone) is a clear, colourless liquid with a characteristic ketone odour.  It has the chemical formula C6H12 and is slightly soluble in water and is miscible with most organic solvents.',
            img: '/products-img/ketones-4.jpg',
          },
          produce: {
            head1: 'How is Methyl Iso Butyl Ketone produced?',
            desc1: 'There are two main routes for MIBK production.  In the first, MIBK is produced from isopropanol in a mixed ketones process.  Di isobutyl ketone (DIBK) and acetone are co-products of this process.  In the second, MIBK is produced from acetone with hydrogen by a 3 step process of aldol condensation, dehydration, and hydrogenation.',
            desc2: 'At present, the global production capacity for MIBK stands at 370,000 tonnes per year.',
          },
          distribute: {
            head1: 'Storage and Distribution of Methyl Iso Butyl Ketone',
            desc1: 'MIBK is stored in drums and/or in bulk tanks and is transported by tank trucks.  It has a specific gravity of 0.802 and a low flash point of 16° C (closed cup) which makes it highly flammable.  It should, therefore, be stored in a cool, dry, well-ventilated area that is free from the risk of ignition.  For transportation purposes, MIBK is classified as packing group II, hazard class 3, and is an irritant.',
          },
          used: {
            head1: 'What is Methyl Iso Butyl Ketone used for?',
            desc1: 'MIBK is an excellent solvent and 64 % of the total global MIBK produced is consumed in this way.  It is primarily used as a solvent in cellulose-based and resin-based coatings and adhesives.  It is also an extraction solvent for antibiotics and other pharmaceuticals, and is employed in rare-metal extraction as a solvent for metal separation.',
            desc2: 'MIBK is also a chemical intermediate that is used to produce target molecules such as rubber antiozonants (used in the production of tyres) and acetylenic diol compounds.',
          },

        },
      },
    ],
  },
  {
    id: 12,
    name: 'Propylene Glycol Ethers',
    products: [
      {
        id: 1,
        name: 'Di Methoxy PropanolPropanol (DPM)',
        details: {
          whatIs: {
            head1: 'What is Di Methoxy Propanol (DPM)?',
            sub1: 'Dipropylene glycol monomethyl ether (also known as Methoxy Propoxy Propanol, Oxybispropanol, dipropylene glycol methyl ether, DPM, and Dowanol DPM) is a propylene oxide-based/P series glycol ether and has the formula C7H16O3.  It is a clear, colourless, viscous liquid which has a slight ether odour.',
            sub2: 'Dowanol DPM is completely soluble in water and is miscible with a number of organic solvents, for example ethanol, carbon tetrachloride, benzene, petroleum ether and monochlorobenzene.  It is also practically non- toxic and hygroscopic, and thus lends itself well to commercial and industrial use.',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Dipropylene glycol monomethyl ether is produced by the reaction of propylene oxide with methanol using a catalyst.',
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Dipropylene glycol monomethyl ether is stored in mild steel and /or stainless steel tanks and/or drums and can be transported by bulk vessels or tank trucks.  It should be stored away from heat and sources of ignition in a cool and well-ventilated area.  Dowanol DPM has a specific gravity of 0.95 and a flashpoint of 75oC (closed cup) and is not regulated for any form of transport.',
          },
          used: {
            head1: 'What is Dipropylene Glycol Methyl Ether Used For?',
            desc1: 'Dipropylene glycol monomethyl ether is a very useful industrial and commercial chemical.  One of its main commercial uses is as a solvent for paints, varnishes, inks, strippers, and degreasers.  It is also utilised as a coalescing agent for water-based paints and inks where it promotes polymer fusing during the drying process.  It is also a component of wood and coil coatings, as well as coatings used in the automotive industry, industrial maintainence, and metal finishing.  It is also a component of hydraulic fluids and industrial degreasers and is a chemical additive in the oil production and drilling industry.',
            desc2: 'Dowanol DPM is a very useful chemical building block in the manufacture of many products. This is due to its reaction with acids, forming esters and oxidising agents which produce aldehydes, carboxylic acids and alkali metals therefore creating alcoholates and acetals.',
            desc3: 'It is this flexibility that supports the use of DPM across a range of industries and therefore makes it a component of many household items that people use every day.  It is found in ceiling and wall paints and in many common cleaners including glass and surface cleaners, paint-brush cleaners, all-purpose cleaners, carpet cleaners and disinfectant cleaners.  It is also found in cosmetics where it provides emollient properties and product stabilisation as well as floor and aluminium polish, leather and textile dyes, rust removers and pesticides where it acts as a stabiliser.',
            desc4:'Dipropylene glycol methyl ether is also a chemical intermediate in the production of Dipropylene glycol monomethyl ether acetate or DPMA.'
          },

        },
      },
      {
        id: 2,
        name: 'Ethoxy Propanol',
        details: {
          whatIs: {
            head1: 'What is Ethoxy Propanol?',
            sub1: 'Ethoxy Propanol (also known as propylene glycol ether;  Arcosolv PE; ethyl proxitol; and propylene glycol monoethyl ether) is a clear liquid that has a characteristic ether-like odour.  It has the formula C5H12O2 and it is miscible with water, is hygroscopic, and it also provides good solvency for a wide variety of substances, including resins, inks, and adhesives.',
            img: '/products-img/propanols-1.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Ethoxy Propanol is a member of the Propylene Glycol Ether family.  These Propylene glycol ethers are formed from the base catalysed reaction of propylene oxide with alcohols.',
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Ethoxy Propanol has a specific gravity of 0.895 and a flash point of 40.5oC (Closed cup).  This low flash point means Ethoxy Propanol is regarded as Flammable and is classified as Dangerous goods class 3 and in pack group III.',
            desc2: 'It is transported by marine, rail, and road, primarily in bulk, but can also be transported as a packed product.  When being transported it should be in carbon steel or stainless steel vessels which should be tightly closed and properly vented.  The vessels should be stored in a cool, dry, and well-ventilated area that is away from all ignition sources.'
          },
          used: {
            head1: 'What is Ethoxy Propanol used for?',
            desc1: 'Ethoxy Propanol is used in a range of industrial, professional, and consumer applications as it provides good solvency  due to its’ bi-functional nature.  It is miscible with both polar and non-polar substances and is an effective solvent for a wide variety of resins, which include epoxies, acrylic, alkyds, polyesters, nitrocellulose, and polyurethanes.  It also provides low toxicity and this is another property which is valued by the users.',
            desc2: 'Ethoxy Propanol  is employed mainly in the surface coating and printing industries as it can regulate the flow, levelling, and coalescence of both surface coatings (including water-based paints), and of flexographic printing inks.  It is also utilised as a chemical intermediate in the production of agro-chemicals and in the production of de-icing/anti-icing formulations.',
            desc3:'Ethoxy Propanol is also utilised in the cleaning industry where it provides cleaning formulations with surface tension reduction, a fast evaporation rate, and low toxicity.',
            desc4: 'New markets may open up for Ethoxy  Propanol as it can provide a solvent power, viscosity, and volatility that is similar to the ethylene oxide-based glycol ethers which are now facing some pressure from air and workplace regulations around the world.  Ethoxy propanol can provide higher workplace exposure limits and, at present, is not listed as a HAP (Hazardous Air Pollutant) by the US Federal Government Clean Air Act.'
          },

        },
      },
      {
        id: 3,
        name: 'Methoxy Propanol (PM)',
        details: {
          whatIs: {
            head1: 'What is Methoxy Propanol (PM)?',
            sub1: 'Methoxy propanol (also known as propylene glycol monomethyl ether, 1-methoxy-2-propanol, PM, and PGME), is a colourless liquid that is soluble in water and is highly flammable.  It is a methoxy alcohol derivative and has a formula of C4H10O2.',
            img: '/products-img/propanols-1.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Methoxy propanol is produced by the reaction of 1,2-epoxy propane and methanol in the presence of a catalyst, and this is then followed by distillation.',
            desc2: 'The worldwide annual production of methoxy propanol is approximately 100,000 to 500,000 tonnes.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Methoxy propanol has a specific gravity of 0.924 and a flash point of 33° C and is therefore highly flammable so should be stored in a cool, dry and well-ventilated area that is free from sources of ignition.  For transport purposes, methoxy propanol is classified as packing group III and hazard class 3 and is an irritant.',
          },
          used: {
            head1: 'What is Methoxy Propanol (PM) used for?',
            desc1: 'Methoxy propanol is predominately used in the manufacture of propylene glycol methyl ether acetate (otherwise known as PMA) and is also used in industrial and commercial products including paints, varnishes, inks, synthetic resin and rubber adhesives, and automotive and oven cleaners.  It is also used as a cleaning agent in the LCD and electronics industry.',
          },

        },
      },
      {
        id: 4,
        name: 'Methoxy Propyl Acetate (PMA)',
        details: {
          whatIs: {
            head1: 'What is Methoxy Propyl Acetate (PMA)?',
            sub1: 'Methoxy propyl acetate (also known as PMA, 1-methoxy-2-acetoxypropane, or propylene glycol monomethyl ether-1,2-acetate) is a clear liquid that has limited miscibility with water.  It is a medium volatility solvent with a mild odour and has the formula C6H12O3.',
            img: '/products-img/propanols-3.jpg',
          },
          produce: {
            head1: 'How is it produced?',
            desc1: 'Methoxy propyl acetate is produced when ethylene, or propylene, oxide is reacted with alcohol.  This forms glycol monoethers which are then esterified with acetic acid to produce PMA.',
            desc2: 'The estimated global production of methoxy propyl acetate is between 300,000 and 500,000 tonnes annually.'
          },
          distribute: {
            head1: 'How is it stored and distributed?',
            desc1: 'Methoxy propyl acetate is generally distributed in 200 kg drums and should be stored in a cool, dry, and well-ventilated area.  For transport purposes it is classified as packing group III, hazard class 3.  It has a specific gravity of 0.965 and a flash point of 42° C (closed cup).',
          },
          used: {
            head1: 'What is Methoxy Propanol (PM) used for?',
            desc1: 'There are several applications for methoxy propyl acetate.  The first is as a solvent as PMA has good solvent power for many resins and dyes.  It is used in dyes for furniture polish or wood stains, and in dye solutions and pastes for printing.  It is also used in processes that colour leather and textiles, and in ball-point pen pastes.',
            desc2: 'PMA can also be used as a coalescent in coatings, and is particularly suitable for coatings containing polyisocyanates.  It can also be used as a binder for core sands in foundries and is also utilised as a cleaning agent in the electronics industry.'
          },

        },
      },
    ],
  },
  {
    id: 13,
    name: 'Chlor Alkali Products',
    products:[
      {
        id:1,
        name:'Sodum Hydoxide Flakes',
        details: {
          whatIs: {
            head1: 'Sodum Hydoxide Flakes',
            sub1: 'Sodium hydroxide is a popular strong base used in industry. Sodium hydroxide is used in the manufacture of sodium salts and detergents, pH regulation, and organic synthesis. In bulk, it is most often handled as an aqueous solution,[27] since solutions are cheaper and easier to handle.',
            sub2: 'Sodium hydroxide is used in many scenarios where it is desirable to increase the alkalinity of a mixture, or to neutralize acids.',
            sub_desc1: 'For example, in the petroleum industry, sodium hydroxide is used as an additive in drilling mud to increase alkalinity in bentonite mud systems, to increase the mud viscosity, and to neutralize any acid gas (such as hydrogen sulfide and carbon dioxide) which may be encountered in the geological formation as drilling progresses.',
            sub_desc2: 'Another use is in Salt spray testing where pH needs to be regulated. Sodium hydroxide is used with hydrochloric acid to balance pH. The resultant salt, NaCl, is the corrosive agent used in the standard neutral pH salt spray test.',
            sub_desc3: 'Poor quality crude oil can be treated with sodium hydroxide to remove sulfurous impurities in a process known as caustic washing. As above, sodium hydroxide reacts with weak acids such as hydrogen sulfide and mercaptans to yield non-volatile sodium salts, which can be removed. The waste which is formed is toxic and difficult to deal with, and the process is banned in many countries because of this. In 2006, Trafigura used the process and then dumped the waste in Ivory Coast.'
          },
          produce: {
            head1: 'Other common uses of sodium hydroxide include:',
            desc1: '•\tfor making soaps and detergents. Sodium hydroxide is used for hard bar soap, while potassium hydroxide is used for liquid soaps. Sodium hydroxide is used more often than potassium hydroxide because it is cheaper and a smaller quantity is needed.',
            desc2:'•\tas drain cleaners that contain sodium hydroxide convert fats and grease that can clog pipes into soap, which dissolves in water (see cleaning agent).',
            desc3: '•\tfor making artificial textile fibres (such as rayon).',
            desc4: '•\tfor making artificial textile fibres (such as rayon).',
            desc5: '•\tin purifying bauxite ore from which aluminium metal is extracted. This is known as Bayer process (see dissolving amphoteric metals and compounds).',
            desc6: '•\tin de-greasing metals, oil refining, and making dyes and bleaches.',
            desc7: '•\tin water treatment plants for pH regulation.',
            desc8: '•\tto treat bagels and pretzel dough, giving the distinctive shiny finish.'
          },
        },

      },
      {
        id:2,
        name:'Sodium Hydroxide Solution 50%',
        details: {
          whatIs: {
            head1: 'Sodium Hydroxide Solution 50%',
            sub1: 'Sodium hydroxide is a popular strong base used in industry. Sodium hydroxide is used in the manufacture of sodium salts and detergents, pH regulation, and organic synthesis. In bulk, it is most often handled as an aqueous solution,[27] since solutions are cheaper and easier to handle.',
            sub2: 'Sodium hydroxide is used in many scenarios where it is desirable to increase the alkalinity of a mixture, or to neutralize acids.',
            sub_desc1: 'For example, in the petroleum industry, sodium hydroxide is used as an additive in drilling mud to increase alkalinity in bentonite mud systems, to increase the mud viscosity, and to neutralize any acid gas (such as hydrogen sulfide and carbon dioxide) which may be encountered in the geological formation as drilling progresses.',
            sub_desc2: 'Another use is in Salt spray testing where pH needs to be regulated. Sodium hydroxide is used with hydrochloric acid to balance pH. The resultant salt, NaCl, is the corrosive agent used in the standard neutral pH salt spray test.',
            sub_desc3: 'Poor quality crude oil can be treated with sodium hydroxide to remove sulfurous impurities in a process known as caustic washing. As above, sodium hydroxide reacts with weak acids such as hydrogen sulfide and mercaptans to yield non-volatile sodium salts, which can be removed. The waste which is formed is toxic and difficult to deal with, and the process is banned in many countries because of this. In 2006, Trafigura used the process and then dumped the waste in Ivory Coast.'
          },
          produce: {
            head1: 'Other common uses of sodium hydroxide include:',
            desc1: '•\tfor making soaps and detergents. Sodium hydroxide is used for hard bar soap, while potassium hydroxide is used for liquid soaps.[30][31] Sodium hydroxide is used more often than potassium hydroxide because it is cheaper and a smaller quantity is needed.',
            desc2:'•\tas drain cleaners that contain sodium hydroxide convert fats and grease that can clog pipes into soap, which dissolves in water (see cleaning agent).',
            desc3: '•\tfor making artificial textile fibres (such as rayon).',
            desc4: '•\tfor making artificial textile fibres (such as rayon).',
            desc5: '•\tin purifying bauxite ore from which aluminium metal is extracted. This is known as Bayer process (see dissolving amphoteric metals and compounds).',
            desc6: '•\tin de-greasing metals, oil refining, and making dyes and bleaches.',
            desc7: '•\tin water treatment plants for pH regulation.',
            desc8: '•\tto treat bagels and pretzel dough, giving the distinctive shiny finish.'
          },
        },

      },
      {
        id:3,
        name:'Calcium Chloride',
        details: {
          whatIs: {
            head1: 'Calcium Chloride',
            sub1: 'Calcium chloride is an inorganic compound, a salt with the chemical formula CaCl2. It is a white crystalline solid at room temperature, and it is highly soluble in water. It can be created by neutralising hydrochloric acid with calcium hydroxide.',
            sub_desc1: 'By depressing the freezing point of water, calcium chloride is used to prevent ice formation and is used to de-ice. This application consumes the greatest amount of calcium chloride. Calcium chloride is relatively harmless to plants and soil. As a deicing agent, it is much more effective at lower  than sodium chloride. When distributed for this use, it usually takes the form of small,white spheres a few millimeters in diameter, called prills. Solutions of calcium chloride can prevent freezing at temperatures as low as −52 °C (−62 °F), making it ideal for filling agricultural implement tires as a liquid ballast, aiding traction in cold climates.',
            sub_desc2: 'It is also used in domestic and industrial chemical air dehumidifiers.\n',
            sub_desc3: 'The second largest application of calcium chloride exploits its hygroscopic nature and the tackiness of its hydrates; calcium chloride is highly hygroscopic and its hydration is an exothermic process. A concentrated solution keeps a liquid layer on the surface of dirt roads, which suppresses the formation of dust. It keeps the finer dust particles on the road, providing a cushioning layer. If these are allowed to blow away, the large aggregate begins to shift around and the road breaks down. Using calcium chloride reduces the need for grading by as much as 50% and the need for fill-in materials as much as 80%.'
          },
          produce: {
            desc1: 'The average intake of calcium chloride as food additives has been estimated to be 160–345 mg/day.Calcium chloride is permitted as a food additive in the European Union for use as a sequestrant and firming agent with the E number E509. It is considered as generally recognized as safe (GRAS) by the U.S. Food and Drug Administration. Its use in organic crop production is generally prohibited under the US National Organic Program.',
            desc2:'As a firming agent, calcium chloride is used in canned vegetables, in firming soybean curds into tofu and in producing a caviar substitute from vegetable or fruit juices. It is commonly used as an electrolyte in sports drinks and other beverages, including bottled water. The extremely salty taste of calcium chloride is used to flavor pickles without increasing the food\'s sodium content. Calcium chloride\'s freezing-point depression properties are used to slow the freezing of the caramel in caramel-filled chocolate bars. Also, it is frequently added to sliced apples to maintain texture.',
            desc3: 'In brewing beer, calcium chloride is sometimes used to correct mineral deficiencies in the brewing water. It affects flavor and chemical reactions during the brewing process, and can also affect yeast function during fermentation.',
            desc4: 'In cheesemaking, calcium chloride is sometimes added to processed (pasteurized/homogenized) milk to restore the natural balance between calcium and protein in casein. It is added before the coagulant.',
            desc5: 'Calcium chloride is used to prevent cork spot and bitter pit on apples by spraying on the tree during the late growing season.',
            desc6: 'Calcium chloride is used in concrete mixes to accelerate the initial setting, but chloride ions lead to corrosion of steel rebar, so it should not be used in reinforced concrete.The anhydrous form of calcium chloride may also be used for this purpose and can provide a measure of the moisture in concrete.',
            desc7: 'Calcium chloride is included as an additive in plastics and in fire extinguishers, in blast furnaces as an additive to control scaffolding (clumping and adhesion of materials that prevent the furnace charge from descending), and in fabric softener as a thinner.',
            desc8: 'The exothermic dissolution of calcium chloride is used in self-heating cans and heating pads.'
          },
          distribute: {
            desc1: 'In the oil industry, calcium chloride is used to increase the density of solids-free brines. It is also used to provide inhibition of swelling clays in the water phase of invert emulsion drilling fluids.',
            desc2:'CaCl2 acts as flux material, decreasing the melting point, in the Davy process for the industrial production of sodium metal through the electrolysis of molten NaCl.',
            desc3: 'Calcium chloride is also used in the production of activated charcoal.',
            desc4:'Calcium chloride can be used to precipitate fluoride ions from water as insoluble CaF2.',
            desc5:'Calcium chloride is also an ingredient used in ceramic slipware. It suspends clay particles so that they float within the solution, making it easier to use in a variety of slipcasting techniques.'
          },
        },
      },
      {
        id:4,
        name:'Sodium hypochlorite',
        details: {
          whatIs: {
            head1: 'What is Sodium hypochlorite',
            sub1: 'Sodium hypochlorite, commonly known in a dilute solution as (chlorine) bleach, is an inorganic chemical compound with the formula NaOCl (or NaClO),[3] consisting of a sodium cation (Na+) and a hypochloriteanion (OCl− or ClO−). It may also be viewed as the sodium salt of hypochlorous acid. The anhydrous compound is unstable and may decompose explosively. It can be crystallized as a pentahydrateNaOCl·5H2O, a pale greenish-yellow solid which is not explosive and is stable if kept refrigerated',
            sub2: 'Sodium hypochlorite is most often encountered as a pale greenish-yellow dilute solution referred to as liquid bleach, which is a household chemical widely used (since the 18th century) as a disinfectant or a bleaching agent. In solution, the compound is unstable and easily decomposes,  liberating chlorine, which is the active principle of such products. Sodium hypochlorite is the oldest and still most important chlorine-based bleach',
          },
          produce: {
            subHead1: 'Bleaching',
            desc1: 'Household bleach is, in general, a solution containing 3–8% sodium hypochlorite, by weight, and 0.01–0.05% sodium hydroxide; the sodium hydroxide is used to slow the decomposition of sodium hypochlorite into sodium chloride and sodium chlorate',
            subHead2: 'Cleaning',
            desc11:'Sodium hypochlorite has destaining properties.[43] Among other applications, it can be used to remove mold stains, dental stains caused by fluorosis,[44]and stains on crockery, especially those caused by the tannins in tea. It has also been used in laundry detergents and as a surface cleaner. It is also used in sodium hypochlorite washes.',
            desc12:'Its bleaching, cleaning, deodorizing and caustic effects are due to oxidation and hydrolysis (saponification). Organic dirt exposed to hypochlorite becomes water-soluble and non-volatile, which reduces its odor and facilitates its removal.'
          },
          distribute: {
            subHead1: 'Disinfection',
            desc1: 'Sodium hypochlorite in solution exhibits broad spectrum anti-microbial activity and is widely used in healthcare facilities in a variety of settings.[45] It is usually diluted in water depending on its intended use. "Strong chlorine solution" is a 0.5% solution of hypochlorite (containing approximately 5000 ppm free chlorine) used for disinfecting areas contaminated with body fluids, including large blood spills (the area is first cleaned with detergent before being disinfected).[45][46] It may be made by diluting household bleach as appropriate (normally 1 part bleach to 9 parts water).[47] Such solutions have been demonstrated to inactivate both C. difficile[45] and HPV.[48] "Weak chlorine solution" is a 0.05% solution of hypochlorite used for washing hands, but is normally prepared with calcium hypochlorite granules.',
            desc2: '"Dakin\'s Solution" is a disinfectant solution containing low concentration of sodium hypochlorite and some boric acid or sodium bicarbonate to stabilize the pH. It has been found to be effective with NaOCl concentrations as low as 0.025%.',
            desc3:'US government regulations allow food processing equipment and food contact surfaces to be sanitized with solutions containing bleach, provided that the solution is allowed to drain adequately before contact with food, and that the solutions do not exceed 200 parts per million (ppm) available chlorine (for example, one tablespoon of typical household bleach containing 5.25% sodium hypochlorite, per gallon of water). If higher concentrations are used, the surface must be rinsed with potable water after sanitizing.',
            desc3_1: 'A similar concentration of bleach in warm water is used to sanitize surfaces prior to brewing of beer or wine. Surfaces must be rinsed with sterilized (boiled) water to avoid imparting flavors to the brew; the chlorinated byproducts of sanitizing surfaces are also harmful. The mode of disinfectant action of sodium hypochlorite is similar to that of hypochlorous acid.',
            desc4: 'Solutions containing more than 500 ppm available chlorine are corrosive to some metals, alloys and many thermoplastics (such as acetal resin) and need to be thoroughly removed afterwards, so the bleach disinfection is sometimes followed by an ethanol disinfection. Liquids containing sodium hypochlorite as the main active component are also used for household cleaning and disinfection, for example toilet cleaners.[51] Some cleaners are formulated to be viscous so as not to drain quickly from vertical surfaces, such as the inside of a toilet bowl.',
            desc5: 'The undissociated (nonionized) hypochlorous acid is believed to react with and inactivate bacterial and viral enzymes.',
            subHead2_desc1:'Neutrophils of the human immune system produce small amounts of hypochlorite inside phagosomes, which digest bacteria and viruses.',
            subHead3: 'Deodorizing',
            desc6: 'Sodium hypochlorite has deodorizing properties, which go hand in hand with its cleaning properties.'
          },
          used: {
            subHead1: 'Waste water treatment',
            desc1: 'Sodium hypochlorite solutions have been used to treat dilute cyanide waste water, such as electroplating wastes. In batch treatment operations, sodium hypochlorite has been used to treat more concentrated cyanide wastes, such as silver cyanide plating solutions. Toxic cyanide is oxidized to cyanate(OCN−) that is not toxic, idealized as follows:',
            desc2: 'CN− + OCl− → OCN− + Cl−',
            desc2_2: 'Sodium hypochlorite is commonly used as a biocide in industrial applications to control slime and bacteria formation in water systems used at power plants, pulp and paper mills, etc., in solutions typically of 10–15% by weight.',
            desc2_3:'Dipropylene glycol methyl ether is also a chemical intermediate in the production of Dipropylene glycol monomethyl ether acetate or DPMA.',
            subHead3: 'Endodontics',
            desc3: 'Sodium hypochlorite is the medicament of choice due to its efficacy against pathogenic organisms and pulp digestion in endodontic therapy. Its concentration for use varies from 0.5% to 5.25%. At low concentrations it dissolves mainly necrotic tissue; at higher concentrations it also dissolves vital tissue and additional bacterial species. One study has shown that Enterococcus faecalis was still present in the dentin after 40 minutes of exposure of 1.3% and 2.5% sodium hypochlorite, whereas 40 minutes at a concentration of 5.25% was effective in E. faecalis removal.[52] In addition to higher concentrations of sodium hypochlorite, longer time exposure and warming the solution (60 °C) also increases its effectiveness in removing soft tissue and bacteria within the root canal chamber.[52] 2% is a common concentration as there is less risk of an iatrogenic hypochlorite incident.[53] A hypochlorite incident is an immediate reaction of severe pain, followed by edema, haematoma, and ecchymosis as a consequence of the solution escaping the confines of the tooth and entering the periapical space. This may be caused by binding or excessive pressure on the irrigant syringe, or it may occur if the tooth has an unusually large apical foramen.',
            subHead4: 'Nerve agent neutralization',
            desc4: 'At the various nerve agent (chemical warfare nerve gas) destruction facilities throughout the United States, 0.5-2.5% sodium hypochlorite is used to remove all traces of nerve agent or blister agent from Personal Protection Equipment after an entry is made by personnel into toxic areas. 0.5-2.5% sodium hypochlorite is also used to neutralize any accidental releases of the nerve agent in the toxic areas. Lesser concentrations of sodium hypochlorite are used in a similar fashion in the Pollution Abatement System to ensure that no nerve agent is released into the furnace flue gas.',
            subHead5: 'Reduction of skin damage',
            desc6: 'Dilute bleach baths have been used for decades to treat moderate to severe eczema in humans,[57][58]. Still, it has not been clear why they work. One of the reasons why bleach helps is that eczema can frequently result in secondary infections, especially from bacteria like Staphylococcus aureus, which makes managing it difficult. Staphylococcus aureus infection is related to the pathogenesis of eczema and AD. Bleach baths are one method for lowering the risk of staph infections in people with eczema. The antibacterial and anti-inflammatory properties of sodium hypochlorite contribute to the reduction of harmful bacteria on the skin and the reduction of inflammation, respectively.[59] According to work published by researchers at the Stanford University School of Medicine in November 2013, a very dilute (0.005%) solution of sodium hypochlorite in water was successful in treating skin damage with an inflammatory component caused by radiation therapy, excess sun exposure or aging in laboratory mice. Mice with radiation dermatitis given daily 30-minute baths in bleach solution experienced less severe skin damage and better healing and hair regrowth than animals bathed in water. A moleculecalled nuclear factor kappa-light-chain-enhancer of activated B cells (NF-κB) is known to play a critical role in inflammation, aging, and response to radiation. The researchers found that if NF-κB activity was blocked in elderly mice by bathing them in bleach solution, the animals\' skin began to look younger, going from old and fragile to thicker, with increased cell proliferation. The effect diminished after the baths were stopped, indicating that regular exposure was necessary to maintain skin thickness.'
          },

        },
      },
      {
        id:5,
        name:'Calcium hypochlorite',
        details: {
          whatIs: {
            head1: 'What is Calcium hypochlorite?',
            sub1: 'Calcium hypochlorite is an inorganic compound with formula Ca(ClO)2. It is a white solid, although commercial samples appear yellow. It strongly smells of chlorine, owing to its slow decomposition in moist air. This compound is relatively stable as a solid and solution and has greater available chlorine than sodium hypochlorite.[1] "Pure" samples have 99.2% active chlorine. Given common industrial purity, an active chlorine content of 65-70% is typical.[2] It is the main active ingredient of commercial products called bleaching powder,[a] used for water treatment and as a bleaching agent.',
          },
          produce: {
            subHead1: 'Sanitation',
            desc1: 'Calcium hypochlorite is commonly used to sanitize public swimming pools and disinfect drinking water. Generally the commercial substances are sold with a purity of 65% to 73% with other chemicals present, such as calcium chloride and calcium carbonate, resulting from the manufacturing process. In solution, calcium hypochlorite could be used as a general purpose sanitizer, but due to calcium residue (making the water harder), sodium hypochlorite (bleach) is usually preferred.',
            subHead2: 'Organic chemistry',
            desc11:'Calcium hypochlorite is a general oxidizing agent and therefore finds some use in organic chemistry. For instance the compound is used to cleave glycols, α-hydroxy carboxylic acids and keto acids to yield fragmented aldehydes or carboxylic acids. Calcium hypochlorite can also be used in the haloform reactionto manufacture chloroform. Calcium hypochlorite can be used to oxidize thiol and sulfide byproducts in organic synthesis and thereby reduce their odour and make them safe to dispose of. The reagent used in organic chemistry is similar to the sanitizer at ~70% purity.'
          },
        },
      },
    ]
  }
]

