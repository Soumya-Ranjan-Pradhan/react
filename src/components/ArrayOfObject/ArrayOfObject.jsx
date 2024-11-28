import React from "react";

const ArrayOfObject = () => {
  const userData = [
    {
      _id: "66b5ef8ad2b1c71c9b2d7042",
      productType: "simple",
      title: "Electric Bike Throttle",
      price: 4,
      salePrice: 3,
      image: [
        "https://res.cloudinary.com/djjfv1lmv/image/upload/v1723199366/products/rv1pbquf1dfmwvbr3vv2.webp",
        "https://res.cloudinary.com/djjfv1lmv/image/upload/v1723199366/products/h3qvq8yzdnbxvjx7crtz.webp",
      ],
      shortDescription:
        "Component: Hero Throttle\nVoltage Range: 48V-72V\nApplication: Electric Vehicles\nCasing Material: Sturdy Heavy PVC\nMaterial: Durable Heavy PVC\nBrand: ENSURESALE\nColor: Black\nPart Quality: Branded Manufacturing\nCountry of Origin: Manufactured in India\nHERO E BIKE Comfort: Ensuring Genuine and Smooth Operation\n\nWe specialize in providing HERO electric bike throttles and an assortment of other variant parts. Our expansive distribution network spans all regions of India, providing comprehensive support for electric vehicles.\n\nHERO ELECTRIC GENUINE PRODUCTS\nEnsuring a Comfortable Riding Experience with HERO E Bikes",
      description:
        "Component: Hero Throttle\nVoltage Range: 48V-72V\nApplication: Electric Vehicles\nCasing Material: Sturdy Heavy PVC\nMaterial: Durable Heavy PVC\nBrand: ENSURESALE\nColor: Black\nPart Quality: Branded Manufacturing\nCountry of Origin: Manufactured in India\nHERO E BIKE Comfort: Ensuring Genuine and Smooth Operation\n\nWe specialize in providing HERO electric bike throttles and an assortment of other variant parts. Our expansive distribution network spans all regions of India, providing comprehensive support for electric vehicles.\n\nHERO ELECTRIC GENUINE PRODUCTS\nEnsuring a Comfortable Riding Experience with HERO E Bikes\n",
      tags: [],
      catalogVisibility: "shop",
      sku: "CTMEEEEVPT06-1",
      stockQty: 1,
      allowBackorders: "no",
      soldIndividually: true,
      weight: 20,
      length: 2,
      width: 3,
      height: 2,
      shippingClass: "Free Shipping",
      processingTime: "1-3 business days",
      taxStatus: "taxable",
      taxClass: "standard",
      attributes: [],
      upSells: [],
      crossSells: [],
      hsnCode: {
        id: "66a23e9a3a0d3ffdd9a3ce3b",
        code: "7878787",
      },
      minimumOrderQuantity: 5,
      unitOfMeasure: "/ Piece",
      overridePolicyFields: false,
      policyTabLabel: "",
      shippingPolicy: "",
      refundPolicy: "",
      cancelReturnExchangePolicy: "",
      enableReviews: true,
      menuOrder: 0,
      purchaseNote: "",
      createdAt: "2024-08-09T10:29:30.163Z",
      updatedAt: "2024-08-09T10:29:30.163Z",
      category: {
        id: "66b5aa3d4b2498bebcf876d3",
        name: "Energy Efficient Equipment",
      },
    },
    {
      _id: "66b61bae2ac9ba7181763ec0",
      productType: "simple",
      title: "Luminous Solar Inverter Off Grid Combo",
      price: 2,
      salePrice: 3,
      image: [
        "https://res.cloudinary.com/djjfv1lmv/image/upload/v1723210667/products/w5taptqcwufatnltlgnt.webp",
      ],
      shortDescription:
        "\nProduct Details:\n\nMinimum Order Quantity\t1 Set\nCountry of Origin\tMade in India\nWarranty\t24 months\nMax Supported Panel Power\t600Watts\nInput Voltage\t230V\nGrid Type\tOff Grid\nCapacity\t1000\nModel\tNXG 1400\nBrand\tLuminous\nSolar Inverter - NXG+ 1400\n\nRated AC power - 900VA, 12V Operating Voltage 100V-290V\nMax Supported Panel Power -12V upto 1000 Wp\nInput Voltage Range: Voc - 19V-25V, Vmp - 17V-19V\nCharge Controller Rating - 40 Amp/12V, with 98% efficiency for fast charging\n24 Month Warranty\nPure Sine Wave Solar Inverter\n\nSolar Battery - LPTT12150H\n\n150 Ah Rated Capacity @ C10, 12V\nWarranty - 60 Months\nTubular plate Technology - Next generation tall tubular battery with better charge acceptance and longer backup\nNo of Batteries in Combo - 1\nSolar Panel - 165W / 12V\n\nCapacity - 165W, 12V, Poly crystalline Panel\nVoltage: Voltage at Max Power (Vmp) - 18.65V, Open Circuit Voltage (Voc) – 22.84V\nCurrent: Current at Max Power (Imp) - 8.85A, Short Circuit Current (Isc) - 9.55A\n25 years performance warranty.\nNo of Panels in the Combo - 4.",
      description: "",
      tags: ["Solar Energy &gt; Solar Inverters"],
      catalogVisibility: "shop",
      sku: "CMSESI09-1",
      stockQty: 1,
      allowBackorders: "no",
      soldIndividually: true,
      weight: 20,
      length: 10,
      width: 5,
      height: 5,
      shippingClass: "Free Shipping",
      processingTime: "1-3 business days",
      taxStatus: "taxable",
      taxClass: "standard",
      attributes: [],
      upSells: [],
      crossSells: [],
      minimumOrderQuantity: 1,
      unitOfMeasure: "/ Set",
      overridePolicyFields: false,
      policyTabLabel: "",
      shippingPolicy: "",
      refundPolicy: "",
      cancelReturnExchangePolicy: "",
      enableReviews: true,
      menuOrder: 1,
      purchaseNote: "",
      createdAt: "2024-08-09T13:37:50.875Z",
      updatedAt: "2024-08-09T13:37:50.875Z",
      category: {
        id: "66b5aa344b2498bebcf876d0",
        name: "Solar Energy",
      },
    },
  ];
  return (
    <div>
      {userData.map((item, index) => (
        <>
          <h1>{item.productType}</h1>
          <img src={item.image[0]} alt="" />
        </>
      ))}
    </div>
  );
};

export default ArrayOfObject;
