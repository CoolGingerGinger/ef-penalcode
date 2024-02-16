interface PenalCodeInterface {
  Title: string;
  Statutes: {
    [key: string]: {
      title: string;
      class: string;
      id: string;
      months: number;
      fine: number;
      color: string;
      description: string;
    };
  };
}

const PenalCode: PenalCodeInterface[] = [];

PenalCode[0] = {
  Title: "OFFENSES AGAINST PERSONS",
  Statutes: {
    1: {
      title: "Simple Assault",
      class: "Misdemeanor",
      id: "P.C. 1001",
      months: 1,
      fine: 150,
      color: "orange",
      description:
        "A person who intentionally puts another in the reasonable belief of imminent physical harm or offensive contact is guilty under this code section.",
    },
    2: {
      title: "Assault",
      class: "Misdemeanor",
      id: "P.C. 1002",
      months: 10,
      fine: 285,
      color: "orange",
      description:
        "A person who intentionally puts another in the reasonable belief of imminent serious physical harm or offensive contact is guilty under this code section.",
    },
    3: {
      title: "Aggravated Assault",
      class: "Felony",
      id: "P.C. 1003",
      months: 15,
      fine: 325,
      color: "red",
      description:
        "A person who uses intentional and unlawful force or violence to cause physical harm to another person is guilty under this code section.",
    },
    4: {
      title: "Assault with a Deadly Weapon",
      class: "Felony",
      id: "P.C. 1004",
      months: 20,
      fine: 475,
      color: "red",
      description:
        "A person who attempts to cause or threaten immediate harm to another while using a weapon, tool, or other dangerous item to communicate that threat is guilty under this code section.",
    },
    5: {
      title: "Battery",
      class: "Misdemeanor",
      id: "P.C. 1005",
      months: 15,
      fine: 275,
      color: "orange",
      description:
        "A person who unlawfully applies force directly or indirectly upon another person or their personal belongings, causing bodily injury or offensive contact is guilty under this code section.",
    },
    6: {
      title: "Aggravated Battery",
      class: "Felony",
      id: "P.C. 1006",
      months: 20,
      fine: 375,
      color: "red",
      description:
        "A person who intentionally and unlawfully applies force directly or indirectly upon another person or their personal belongings, causing bodily injury or offensive contact is guilty under this code section.",
    },
    7: {
      title: "Involuntary Manslaughter",
      class: "Felony",
      id: "P.C. 1007",
      months: 20,
      fine: 750,
      color: "red",
      description:
        " A person who unintentionally kills another, with or without a quarrel or heat of passion is guilty under this code section. A person who, through a criminal accident or negligence, causes someones death is guilty under this code section.",
    },
    8: {
      title: "Vehicular Manslaughter",
      class: "Felony",
      id: "P.C. 1008",
      months: 25,
      fine: 750,
      color: "red",
      description:
        "A person who, while operating a vehicle, through a criminal accident or negligence, causes someones death is guilty under this code section.",
    },
    9: {
      title: "Attempted Murder of a Civilian",
      class: "Felony",
      id: "P.C. 1009",
      months: 30,
      fine: 1500,
      color: "red",
      description:
        "A person who takes a direct step towards killing another person and intended to kill that person is guilty under this code section. A person who is hired to murder, slay, or execute another person for material or financial gain, even if a direct step towards the killing is not taken, is guilty under this code section.",
    },
    10: {
      title: "Second Degree Murder",
      class: "Felony",
      id: "P.C. 1010",
      months: 40,
      fine: 1750,
      color: "red",
      description:
        "A person who unlawfully kills another person either by intentional malice or reckless disregard that occurs in the spur of the moment is guilty under this code section.",
    },
    11: {
      title: "Accessory to Second Degree Murder",
      class: "Felony",
      id: "P.C. 1011",
      months: 25,
      fine: 500,
      color: "red",
      description:
        "A person who assists another person to commit murder of the second degree is guilty under this code section.",
    },
    12: {
      title: "First Degree Murder",
      class: "Felony",
      id: "P.C. 1012",
      months: 50,
      fine: 2500,
      color: "red",
      description:
        "A person who commits the intentional killing which is done in a way that is willful, deliberate and premeditated is guilty under this code section. Additionally, a person who kills another individual while engaging in a felony offense, that has been proved to be a premeditated act, is guilty under this code section.",
    },
    13: {
      title: "Accessory to First Degree Murder",
      class: "Felony",
      id: "P.C. 1013",
      months: 35,
      fine: 1500,
      color: "red",
      description:
        "A person who assists another person to commit murder of the first degree is guilty under this code section.",
    },
    14: {
      title: "Murder of a Public Servant or Peace Officer",
      class: "Felony",
      id: "P.C. 1014",
      months: 75,
      fine: 8000,
      color: "red",
      description:
        "A person who commits the intentional killing of a public servant or peace officer, while in the execution of their duties, in a way that is willful, deliberate and premeditated is guilty under this code section.",
    },
    15: {
      title: "Attempted Murder of a Public Servant or Peace Officer",
      class: "Felony",
      id: "P.C. 1015",
      months: 50,
      fine: 3500,
      color: "red",
      description:
        "A person who attempts to unlawfully kill or cause great bodily harm to a public servant or peace officer, while in the execution of their duties, is guilty under this code section.",
    },
    16: {
      title: "Accessory to the Murder of a Public Servant or Peace Officer",
      class: "Felony",
      id: "P.C. 1016",
      months: 35,
      fine: 2000,
      color: "red",
      description:
        "A person who assists another person who attempts to unlawfully kill or cause great bodily harm to a public servant or peace officer, while in the execution of their duties, is guilty under this code section.",
    },
    17: {
      title: "Unlawful Imprisonment",
      class: "Misdemeanor",
      id: "P.C. 1017",
      months: 1,
      fine: 300,
      color: "orange",
      description:
        "A person who intentionally restricts anothers freedom of movement without their consent is guilty under this code section",
    },
    18: {
      title: "Kidnapping",
      class: "Felony",
      id: "P.C. 1018",
      months: 15,
      fine: 500,
      color: "red",
      description:
        "A person who abducts or confines another individual against their will by force, threat, or deception, is guilty under this code section. ",
    },
    19: {
      title: "Accessory to Kidnapping",
      class: "Misdemeanor",
      id: "P.C. 1019",
      months: 7,
      fine: 150,
      color: "orange",
      description:
        "A person who, without directly committing the act of kidnapping, knowingly aids, assists, encourages, or facilitates the commission of the kidnapping by another person is guilty under this code section.",
    },
    20: {
      title: "Attempted Kidnapping",
      class: "Felony",
      id: "P.C. 1020",
      months: 10,
      fine: 150,
      color: "orange",
      description:
        "A person who takes a direct step towards the kidnapping of another person is guilty under this code section.",
    },
    21: {
      title: "Hostage Taking",
      class: "Felony",
      id: "P.C. 1021",
      months: 20,
      fine: 750,
      color: "red",
      description:
        "A person who kidnaps someone in an attempt to gain the power to attain something, with threat of their life is guilty under this code section.",
    },
    22: {
      title: "Accessory to Hostage Taking",
      class: "Misdemeanor",
      id: "P.C. 1022",
      months: 10,
      fine: 150,
      color: "orange",
      description:
        "A person who helps someone commit hostage taking is guilty under this code section.",
    },
    23: {
      title: "Unlawful Imprisonment of a Public Servant or Peace Officer.",
      class: "Felony",
      id: "P.C. 1023",
      months: 25,
      fine: 750,
      color: "red",
      description:
        "A person who intentionally restricts a public servant or peace officers freedom of movement without their consent is guilty under this code section",
    },
    24: {
      title: "Criminal Threats",
      class: "Misdemeanor",
      id: "P.C. 1024",
      months: 1,
      fine: 200,
      color: "orange",
      description:
        "A person who communicates to another that they will physically harm or kill such other, placing such other in a reasonable state of fear for their own safety is guilty under this code section. Such communication can be not just verbal, but also in writing or transmitted through other media is guilty under this code section.",
    },
    25: {
      title: "Reckless Endangerment",
      class: "Misdemeanor",
      id: "P.C. 1025",
      months: 10,
      fine: 175,
      color: "orange",
      description:
        "A person who consciously disregards the potential risks or dangers of their actions which create a substantial serious risk of injury to another person is guilty under this code section.",
    },
    26: {
      title: "Gang Related Enhancement",
      class: "Felony",
      id: "P.C. 1026",
      months: 10,
      fine: 500,
      color: "red",
      description:
        "This charge is added to another charge, when the individual’s actions are connected to or motivated by gang activity, which the individual is associated with.",
    },
    27: {
      title: "Desecration of a Human Corpse",
      class: "Felony",
      id: "P.C. 1027",
      months: 30,
      fine: 1000,
      color: "red",
      description:
        "Any act committed after the death of a human being including, but not limited to, dismemberment, disfigurement, mutilation, burning, or any act committed to cause the dead body to be devoured, scattered or dissipated",
    },
    28: {
      title: "Torture",
      class: "Felony",
      id: "P.C. 1028",
      months: 20,
      fine: 1500,
      color: "red",
      description:
        "A person who intentionally causes extreme pain and suffering to someone for reasons such as punishment, extracting a confession, interrogation, revenge, extortion, or any sadistic purpose, is guilty under this code section.",
    },
  },
};

PenalCode[1] = {
  Title: "OFFENSES INVOLVING THEFT",
  Statutes: {
    1: {
      title: "Petty Theft",
      class: "Infraction",
      id: "P.C. 2001",
      months: 0,
      fine: 400,
      color: "green",
      description:
        "A person who steals or takes the personal property of another worth $2000 or less is guilty under this code section.",
    },
    2: {
      title: "Grand Theft",
      class: "Misdemeanor",
      id: "P.C. 2002",
      months: 10,
      fine: 850,
      color: "orange",
      description:
        "A person who steals or takes the personal property of another worth more than $2,000 but less than $15,000 or a firearm of any value is guilty under this code section.",
    },
    3: {
      title: "Grand Theft Auto A",
      class: "Felony",
      id: "P.C. 2003",
      months: 10,
      fine: 120,
      color: "red",
      description:
        "A person who commits the theft of any motor vehicle, no matter the value is guilty under this code section.",
    },
    4: {
      title: "Grand Theft Auto B",
      class: "Felony",
      id: "P.C. 2004",
      months: 15,
      fine: 400,
      color: "red",
      description:
        "A person who commits the theft of any motor vehicle, no matter the value, while armed or committing another felony, is guilty under this code section.",
    },
    5: {
      title: "Carjacking",
      class: "Felony",
      id: "P.C. 2005",
      months: 20,
      fine: 400,
      color: "red",
      description:
        "A person who commits the theft of a motor vehicle from another person while it is being operated is guilty under this code section",
    },
    6: {
      title: "Burglary",
      class: "Misdemeanor",
      id: "P.C. 2006",
      months: 10,
      fine: 500,
      color: "orange",
      description:
        "A person who enters a structure without the permission of the owner or agent of the owner, typically with the intention of committing a criminal offense, is guilty under this code section.",
    },
    7: {
      title: "Robbery",
      class: "Felony",
      id: "P.C. 2007",
      months: 25,
      fine: 1000,
      color: "red",
      description:
        "A person who takes property from the possession of another against their will, by means of force or fear, such as through criminal threats, blunt weapons, assault or battery is guilty under this code section.",
    },
    8: {
      title: "Accessory to Robbery",
      class: "Felony",
      id: "P.C. 2008",
      months: 12,
      fine: 200,
      color: "red",
      description:
        "A Person who assists someone with comitting Robbery is guilty under this code section.",
    },
    9: {
      title: "Attempted Robbery",
      class: "Felony",
      id: "P.C. 2009",
      months: 15,
      fine: 300,
      color: "red",
      description:
        "A person who attempts to take property from the possession of another against their will, by means of force or fear, such as through criminal threats, blunt weapons, assault or battery is guilty under this code section.",
    },
    10: {
      title: "Armed Robbery",
      class: "Felony",
      id: "P.C. 2010",
      months: 25,
      fine: 1500,
      color: "red",
      description:
        "A person who takes property from the possession of another against their will, by means of force facilitated with a gun or any bladed weapon is guilty under this code section.",
    },
    11: {
      title: "Accessory to Armed Robbery",
      class: "Felony",
      id: "P.C. 2011",
      months: 12,
      fine: 300,
      color: "red",
      description:
        "A person who helps someone to take property from the possession of another against their will, by means of force facilitated with a gun or any bladed weapon is guilty under this code section.",
    },
    12: {
      title: "Attempted Armed Robbery",
      class: "Felony",
      id: "P.C. 2012",
      months: 25,
      fine: 300,
      color: "red",
      description:
        "A person who attempts to take property from the possession of another against their will, by means of force facilitated with a gun or any bladed weapon is guilty under this code section.",
    },
    13: {
      title: "Grand Larceny",
      class: "Felony",
      id: "P.C. 2013",
      months: 30,
      fine: 1000,
      color: "red",
      description:
        "A person who steals or takes the personal property of another worth more than $15000 is guilty under this code section.",
    },
    14: {
      title: "Leaving Without Paying",
      class: "Infraction",
      id: "P.C. 2014",
      months: 0,
      fine: 300,
      color: "green",
      description:
        "A person who leaves a billed premises without paying the total amount of their bill is guilty under this code section.",
    },
    15: {
      title: "Possession of Nonlegal Currency",
      class: "Misdemeanor",
      id: "P.C. 2015",
      months: 10,
      fine: 750,
      color: "orange",
      description:
        "A person who is in possession of, or attempts to use a fraudulent currency in the attempt to pass it off as legal tender is guilty under this code section. The fraudulent currency is subject to confiscation.",
    },
    16: {
      title: "Possession of Government-Issued Items",
      class: "Misdemeanor",
      id: "P.C. 2016",
      months: 20,
      fine: 1000,
      color: "orange",
      description:
        "A person who is unlawfully in possession of a goverment issued firearm, vehicle, or other item is guilty under this code section.",
    },
    17: {
      title: "Possession of Items Used in the Commission of a Crime",
      class: "Misdemeanor",
      id: "P.C. 2017",
      months: 10,
      fine: 500,
      color: "orange",
      description:
        "A person in possession of tools used by that person to commit another crime, such as a firearm or burglary tools, is guilty under this code section.",
    },
    18: {
      title: "Sale of Items Used in the Commission of a Crime",
      class: "Misdemeanor",
      id: "P.C. 2018",
      months: 15,
      fine: 100,
      color: "orange",
      description:
        "A person who is in possession of, or attempts to use a fraudulent currency in the attempt to pass it off as legal tender is guilty under this code section. The fraudulent currency is subject to confiscation.",
    },
    19: {
      title: "Theft of an Aircraft",
      class: "Felony",
      id: "P.C. 2019",
      months: 40,
      fine: 5000,
      color: "red",
      description:
        "A person who commits the theft of an aircraft is guilty under this code section.",
    },
    20: {
      title: "Criminal Possession of Stolen Property",
      class: "Misdemeanor",
      id: "P.C. 2020",
      months: 10,
      fine: 200,
      color: "orange",
      description:
        "A person who has possession of stolen items, with knowledge that the item is stolen, is guilty under this code section.",
    },
  },
};

PenalCode[2] = {
  Title: "OFFENSES INVOLVING FRAUD",
  Statutes: {
    1: {
      title: "Impersonating",
      class: "Misdemeanor",
      id: "P.C. 3001",
      months: 25,
      fine: 1250,
      color: "orange",
      description:
        "A person who attempts to assume the identity of someone else is guilty under this code section.",
    },
    2: {
      title: "Impersonating a Peace Officer or Public Servant",
      class: "Felony",
      id: "P.C. 3002",
      months: 30,
      fine: 2050,
      color: "red",
      description:
        "A person who attempts to assume the identity, or state that they are a peace officer or public servant, when they are not, are guilty under this code section.",
    },
    3: {
      title: "Impersonating a Judge",
      class: "Felony",
      id: "P.C. 3003",
      months: 45,
      fine: 3500,
      color: "red",
      description:
        "A person who attempts to assume the identity, or state that they are a judge, when they are not, are guilty under this code section.",
    },

    5: {
      title: "Possession of Stolen Government Identification",
      class: "Misdemeanor",
      id: "P.C. 3005",
      months: 20,
      fine: 200,
      color: "orange",
      description:
        "A person who is in possession of a piece of government identification that does not belong to them, who has not made any attempt to dispose of the item, is guilty under this section.",
    },
    6: {
      title: "Extortion",
      class: "Felony",
      id: "P.C. 3006",
      months: 30,
      fine: 1500,
      color: "red",
      description:
        "A person who intimidates or influences another to provide or hand over properties or services is guilty under this code section. A person who utilizes or threatens their power or authority with demonstrated malice aforethought in order to compel action by another is guilty under this code section",
    },
    7: {
      title: "Fraud",
      class: "Misdemeanor",
      id: "P.C. 3007",
      months: 10,
      fine: 150,
      color: "orange",
      description:
        "A person who knowingly alters, creates, or uses a written document with the intent to defraud or deceive another is guilty under this code section. ",
    },
    8: {
      title: "Forgery",
      class: "Misdemeanor",
      id: "P.C. 3008",
      months: 15,
      fine: 650,
      color: "orange",
      description:
        "A person who knowingly signs a document or agreement, electronic or otherwise, without the consent or authority of whom they are signing for is guilty under this code section. A person who creates fake government documents is guilty under this code section.",
    },
    9: {
      title: "Money Laundering",
      class: "Felony",
      id: "P.C. 3009",
      months: 25,
      fine: 4000,
      color: "red",
      description:
        "A person who possesses, hides, transfers, receives, or maintains the storage of funds earned through comprehensive criminal activities is guilty under this code. A person who maintains an establishment with a purpose to launder funds collected through comprehensive criminal activities is guilty under this code.",
    },
  },
};

PenalCode[3] = {
  Title: "OFFENSES INVOLVING DAMAGE TO PROPERTY",
  Statutes: {
    1: {
      title: "Trespassing",
      class: "Misdemeanor",
      id: "P.C. 4001",
      months: 5,
      fine: 455,
      color: "orange",
      description:
        "A person who remains on a property after being told to leave by the property owner, an agent of the property owner, or a peace officer, or returns to a property after having been previously trespassed from the property is guilty under this code section.",
    },
    2: {
      title: "Felony Trespassing",
      class: "Felony",
      id: "P.C. 4002",
      months: 15,
      fine: 1500,
      color: "red",
      description:
        "A person who, without proper authorization, enters any government owned or managed facility that is secured with the intent of keeping ordinary citizens outside is guilty under this code section.",
    },
    3: {
      title: "Arson",
      class: "Felony",
      id: "P.C. 4003",
      months: 15,
      fine: 2500,
      color: "red",
      description:
        "A person who intentionally and maliciously sets fire to or burns any structure, forest land, or property without prior authorization is guilty under this code section. A person who intentionally aids, counsels, or helps facilitate the burning of any structure, forest land, or property without proper authorization is guilty under this code section.",
    },
    4: {
      title: "Vandalism",
      class: "Infraction",
      id: "P.C. 4004",
      months: 0,
      fine: 100,
      color: "green",
      description:
        "A person that defaces, damages, or destroys property which belongs to another is guilty under this code section.",
    },
    5: {
      title: "Vandalism of Government Property",
      class: "Misdemeanor",
      id: "P.C. 4005",
      months: 10,
      fine: 350,
      color: "orange",
      description:
        "A person that defaces, damages, or destroys property which belongs to a government agency is guilty under this code section.",
    },
    6: {
      title: "Littering",
      class: "Infraction",
      id: "P.C. 4006",
      months: 0,
      fine: 150,
      color: "green",
      description:
        'As used in this section, "litter" means garbage, trash, waste, ashes, cans, bottles, wire, paper, cartons, vessel parts, vehicle parts, furniture, glass, or anything else of an unsightly or unsanitary nature. No person shall place any waste, refuse, litter or foreign substance in any area or receptacle except those provided for that purpose.',
    },
  },
};

PenalCode[4] = {
  Title: "OFFENSES AGAINST PUBLIC ADMINISTRATION",
  Statutes: {
    1: {
      title: "Bribery of a Government Official",
      class: "Felony",
      id: "P.C. 5001",
      months: 20,
      fine: 200,
      color: "green",
      description:
        "A person who offers or gives a monetary gift, gratuity, valuable goods, or other reward to a public official, a government employee, or peace officer in an attempt to influence their duties or actions is guilty under this code section.",
    },
    2: {
      title: "Anti-Mask Law",
      class: "Infraction",
      id: "P.C. 5002",
      months: 0,
      fine: 150,
      color: "green",
      description:
        "A person who wears a mask or face covering while committing a crime is guilty under this code section. A person who wears a mask in a government facility, after being asked to remove it, is guilty under this code section.",
    },
    3: {
      title: "Possession of Contraband in a Government Facility",
      class: "Felony",
      id: "P.C. 5003",
      months: 5,
      fine: 200,
      color: "green",
      description:
        "A person who possesses a controlled substance, illegal firearm, or any other illegal item while on the premesis of a government facility is guilty under this code section.",
    },
    4: {
      title: "Escaping",
      class: "Felony",
      id: "P.C. 5004",
      months: 10,
      fine: 1005,
      color: "red",
      description:
        "Any person arrested, booked, charged, or convicted of any crime who thereafter escapes from a county or city jail, prison, community service, or custody of a Correctional or Parole Officer is guilty under this code section.",
    },
    5: {
      title: "Jailbreak",
      class: "Felony",
      id: "P.C. 5005",
      months: 30,
      fine: 2500,
      color: "red",
      description:
        "A person who breaks out a prisoner from a correctional facility without authorization is guilty under this code section.",
    },
    6: {
      title: "Accessory to Jailbreak",
      class: "Felony",
      id: "P.C. 5006",
      months: 20,
      fine: 500,
      color: "red",
      description:
        "A person who helps someone to break out a prisoner from a correctional facility without authorization is guilty under this code section.",
    },
    7: {
      title: "Attempted Jailbreak",
      class: "Felony",
      id: "P.C. 5007",
      months: 20,
      fine: 1000,
      color: "red",
      description:
        "A person who attempts to break out a prisoner from a correctional facility without authorization is guilty under this code section.",
    },
    8: {
      title: "Perjury",
      class: "Felony",
      id: "P.C. 5008",
      months: 20,
      fine: 4000,
      color: "red",
      description:
        "A person who willfully gives false information while testifying in court, during a deposition, or on a signed document presented to a court is guilty under this section.",
    },
    9: {
      title: "Violation of a Restraining Order",
      class: "Misdemeanor",
      id: "P.C. 5009",
      months: 20,
      fine: 525,
      color: "orange",
      description:
        "A person who knowingly and intentionally violates the parameters of a restraining order against them is guilty under this code section.",
    },
    10: {
      title: "Embezzlement",
      class: "Misdemeanor",
      id: "P.C. 5010",
      months: 20,
      fine: 1000,
      color: "orange",
      description:
        "A person who steals or misappropriates funds in their trust or belonging to their employer is guilty under this code section.",
    },
    11: {
      title: "Unlawful Practice",
      class: "Misdemeanor",
      id: "P.C. 5011",
      months: 15,
      fine: 1500,
      color: "orange",
      description:
        "A person who practices medical procedures that they are not licenced or lawfully allowed to practice is guilty under this code section.",
    },
    12: {
      title: "Misuse of Emergency Systems",
      class: "Infraction",
      id: "P.C. 5012",
      months: 0,
      fine: 600,
      color: "green",
      description:
        "A person who misuses an emergency system, such as 911 or panic buttons, to waste police time or resources, is guilty under this code section",
    },
    13: {
      title: "Conspiracy",
      class: "Misdemeanor",
      id: "P.C. 5013",
      months: 0,
      fine: 0,
      color: "orange",
      description:
        "A person who conspires to commit a crime, either alone or with a group, is guilty under this section. A person charged with this can be charged up to half of the fine and sentence of the conspired crime.",
    },
    14: {
      title: "Violating a Court Order",
      class: "Misdemeanor",
      id: "P.C. 5014",
      months: 10,
      fine: 800,
      color: "orange",
      description:
        "A person who fails to abide by a court order ruled by a judge of San Andreas is guilty under this code section.",
    },
    15: {
      title: "Failure to Appear",
      class: "Misdemeanor",
      id: "P.C. 5015",
      months: 10,
      fine: 650,
      color: "orange",
      description:
        "A person who fails to appear to a lawfully binding court summons or order for appearance is guilty under this code section.",
    },
    16: {
      title: "Contempt of Court",
      class: "Misdemeanor",
      id: "P.C. 5016",
      months: 5,
      fine: 300,
      color: "orange",
      description:
        "A person who is disrespectful of the court process, such as being excessively loud or belligerent, refusing to be sworn in as a witness, refusing to comply with a judges request, is guilty under this code section. Repeated offenses can result in multiplication of the maximum fine and sentence.",
    },
    17: {
      title: "Resisting Arrest",
      class: "Misdemeanor",
      id: "P.C. 5017",
      months: 10,
      fine: 750,
      color: "orange",
      description:
        "A person who avoids apprehension from an officer by non-vehicular means or resists apprehension by any physical means is guilty under this code section is guilty under this code section.",
    },
  },
};

PenalCode[5] = {
  Title: "OFFENSES AGAINST PUBLIC ORDER",
  Statutes: {
    1: {
      title: "Disobeying a Peace Officer",
      class: "Infraction",
      id: "P.C. 6001",
      months: 0,
      fine: 175,
      color: "green",
      description:
        "A person who fails to comply with a lawful order given from an on duty peace officer or public servant is guilty under this code section.",
    },
    2: {
      title: "Disorderly Conduct",
      class: "Infraction",
      id: "P.C. 6002",
      months: 0,
      fine: 125,
      color: "green",
      description:
        "A person who commits such acts that are of a nature to corrupt the public morals, or outrage the sense of public decency, or affect the peace and quiet of persons who may witness them, or engages in brawling or fighting, or engages in such conduct as to constitute a breach of the peace is guilty under this code section.",
    },
    3: {
      title: "Disturbing the Peace",
      class: "Infraction",
      id: "P.C. 6003",
      months: 0,
      fine: 100,
      color: "green",
      description:
        "A person who violates a reasonable expectation of peace in a public area is guilty under this code section.",
    },
    4: {
      title: "False Reporting",
      class: "Misdemeanor",
      id: "P.C. 6004",
      months: 10,
      fine: 175,
      color: "orange",
      description:
        "A person who reports to any peace officer that a felony or misdemeanor has been committed knowing the report to be false is guilty under this code section.",
    },
    5: {
      title: "Harassment",
      class: "Misdemeanor",
      id: "P.C. 6005",
      months: 10,
      fine: 250,
      color: "orange",
      description:
        "A person who makes communication, whether in person or by means of internet, phone, or other devices (may also apply to circumventing a block on a phone number) with the repeated intent to cause annoyance.",
    },
    6: {
      title: "Misdemeanor Obstruction of Justice",
      class: "Misdemeanor",
      id: "P.C. 6006",
      months: 10,
      fine: 500,
      color: "orange",
      description:
        "A person who shows a clear and motivated attempt to prevent a peace officer from conducting their duties or completing an investigation is guilty under this code section.",
    },
    7: {
      title: "Felony Obstruction of Justice",
      class: "Felony",
      id: "P.C. 6007",
      months: 15,
      fine: 900,
      color: "red",
      description:
        "A person who shows a clear and motivated attempt to prevent an official government proceeding or government officer from completing their assigned duties is guilty under this code section.",
    },
    8: {
      title: "Inciting a Riot",
      class: "Felony",
      id: "P.C. 6008",
      months: 25,
      fine: 500,
      color: "red",
      description:
        " A person who with the intent to cause a riot does an act or engages in conduct that urges a riot, or urges others to commit acts of force or violence, or the burning or destroying of property, and at a time and place and under circumstances that produce a clear and present and immediate danger of acts of force or violence or the burning or destroying of property is guilty under this code section.",
    },
    9: {
      title: "Loitering on Government Properties",
      class: "Infraction",
      id: "P.C. 6009",
      months: 0,
      fine: 100,
      color: "green",
      description:
        "Criminal loitering refers to anyone who is lingering or hanging around in a public or private area, with the intent to commit criminal activity, or who is assisting and/or aiding another with a crime",
    },
    10: {
      title: "Vehicle Tampering",
      class: "Misdemeanor",
      id: "P.C. 6010",
      months: 15,
      fine: 175,
      color: "green",
      description:
        "A person who intentionally tampers or damages a vehicle without the consent of the owner is guilty under this code section.",
    },
    11: {
      title: "Evidence Tampering",
      class: "Felony",
      id: "P.C. 6011",
      months: 20,
      fine: 150,
      color: "red",
      description:
        "A person who willfully and intentionally destroys or attempts to destroy, creates or attempts to create false evidence, conceal, or alter any evidence that can later potentially be used in a Criminal investigation or court proceeding is guilty under this code section.",
    },
    12: {
      title: "Witness Tampering",
      class: "Felony",
      id: "P.C. 6012",
      months: 25,
      fine: 1000,
      color: "red",
      description:
        "This pertains to a person who knowingly and maliciously prevents or encourages any witness or victim from attending or giving testimony at any trial, proceeding, or inquiry authorized by law with the use of bribery, fear, or other tactics.",
    },
    13: {
      title: "Failure to Provide Identification",
      class: "Misdemeanor",
      id: "P.C. 6013",
      months: 1,
      fine: 350,
      color: "green",
      description:
        "A person who fails to identify when lawfully ordered to by a Law Enforcement Officer is guilty under this code section.",
    },
    14: {
      title: "Vigilantism",
      class: "Felony",
      id: "P.C. 6014",
      months: 30,
      fine: 150,
      color: "red",
      description:
        "A person who unlawfully attempts to enforce law, or act as law enforcement, is guilty under this code section.",
    },
    15: {
      title: "Unlawful Assembly",
      class: "Misdemeanor",
      id: "P.C. 6015",
      months: 10,
      fine: 750,
      color: "orange",
      description:
        "Whenever two or more persons, assembled and acting together, make any attempt or advance toward the commission of an act which would be a riot if actually committed. Whenever two or more persons assemble together to do an unlawful act, or do a lawful act in a violent, boisterous, or tumultuous manner is guilty under this code section.",
    },
    16: {
      title: "Government Corruption",
      class: "Felony",
      id: "P.C. 6016",
      months: 40,
      fine: 2000,
      color: "red",
      description:
        "A government employee, including but not limited to law enforcement, who act outside of the interests of the public good or justice OR a government employee who demonstrates criminal negligence in their duties OR a government employee convicted for committing a felony while on duty is guilty under this code section.",
    },
    17: {
      title: "Stalking",
      class: "Felony",
      id: "P.C. 6017",
      months: 30,
      fine: 350,
      color: "red",
      description:
        "A person who intentionally and maliciously follows or harasses another person who has made it known that they do not consent to such following or harassment is guilty under this code section. A person whose actions cause another person to reasonably fear for their safety, or the safety of any person is guilty under this code section.",
    },
    18: {
      title: "Aiding and Abetting",
      class: "Misdemeanor",
      id: "P.C. 6018",
      months: 15,
      fine: 140,
      color: "orange",
      description:
        "A person who assists in the committing of a crime, or assists in the fleeing of a wanted person is guilty under this code section.",
    },
    19: {
      title: "Harboring a Fugitive",
      class: "Misdemeanor",
      id: "P.C. 6019",
      months: 20,
      fine: 375,
      color: "orange",
      description:
        "A person who knowingly and intentionally hides, harbours or prevents law enforcement from finding a wanted felon is guilty under this code section.",
    },
  },
};

PenalCode[6] = {
  Title: "OFFENSES AGAINST HEALTH AND MORALS",
  Statutes: {
    1: {
      title: "Possession of Marijuana",
      class: "Infraction",
      id: "P.C. 7001",
      months: 5,
      fine: 152,
      color: "green",
      description:
        "A person who is in possession of a small quantity of illegal marijuana is guilty under this code section. Marijuana obtained from legal dispensaries is exempt from this section. A small quantity is defined as less than 10 kg of marijuana.",
    },
    2: {
      title: "Possession of Marijuana",
      class: "Misdemeanor",
      id: "P.C. 7002",
      months: 15,
      fine: 200,
      color: "orange",
      description:
        "A person who is in possession of illegal marijuana that weighs more than 10 kg, but less than 100 kg is guilty under this code section.",
    },
    3: {
      title: "Possession of Marijuana with Intent to Distribute",
      class: "Felony",
      id: "P.C. 7003",
      months: 20,
      fine: 500,
      color: "red",
      description:
        "A person who is in possession of illegal marijuana that exceeds 100 kg in weight, or is packaged individually for sale, and possesses items used in the distribution of drugs (ie. scale, empty baggies, etc.) and weighs more than 50 kg, is guilty under this code section.",
    },
    4: {
      title: "Misdemeanor Possession of Cocaine",
      class: "Misdemeanor",
      id: "P.C. 7004",
      months: 0,
      fine: 500,
      color: "orange",
      description:
        "A person who is in possession of cocaine, either in powder or crack formulations, under 10 kg is guilty under this code section.",
    },
    5: {
      title: "Felony Possession of Cocaine",
      class: "Felony",
      id: "P.C. 7005",
      months: 15,
      fine: 750,
      color: "red",
      description:
        "A person who is in possession of cocaine, either in powder or crack formulations, greater than 10kg but less than 100kg is guilty under this code section.",
    },
    6: {
      title: "Possession of Cocaine with Intent to Distribute",
      class: "Felony",
      id: "P.C. 7006",
      months: 20,
      fine: 1300,
      color: "red",
      description:
        "A person who is in possession of cocaine, either in powder or crack formulations, that exceeds 100 kg in weight, or is packaged individually for sale, and possesses items used in the distribution of drugs (ie. scale, empty baggies, etc.) and weighs more than 50 kg, is guilty under this code section.",
    },
    7: {
      title: "Misdemeanor Possession of Amphetamines",
      class: "Misdemeanor",
      id: "P.C. 7007",
      months: 0,
      fine: 300,
      color: "orange",
      description:
        "A person who is in possession of amphetamines, including but not limited to methamphetamine and adderall, under 10 kg is guilty under this code section.",
    },
    8: {
      title: "Felony Possession of Amphetamines",
      class: "Felony",
      id: "P.C. 7008",
      months: 15,
      fine: 750,
      color: "red",
      description:
        "A person who is in possession of amphetamines, including but not limited to methamphetamine and adderall, greater than 10kg but less than 100kg is guilty under this code section.",
    },
    9: {
      title: "Possession of Amphetamines with Intent to Distribute",
      class: "Felony",
      id: "P.C. 7009",
      months: 20,
      fine: 1500,
      color: "red",
      description:
        "A person who is in possession of amphetamines, including but not limited to methamphetamine and adderall, that exceeds 100 kg in weight, or is packaged individually for sale, and possesses items used in the distribution of drugs (ie. scale, empty baggies, etc.) and weighs more than 50 kg, is guilty under this code section.",
    },
    10: {
      title: "Misdemeanor Possession of Opioids",
      class: "Misdemeanor",
      id: "P.C. 7010",
      months: 0,
      fine: 350,
      color: "orange",
      description:
        "A person who is in possession of opioids, including but not limited to morphine, heroin, hydrocodone, oxycodone, under 10 kg is guilty under this code section.",
    },
    11: {
      title: "Felony Possession of Opioids",
      class: "Felony",
      id: "P.C. 7011",
      months: 15,
      fine: 450,
      color: "red",
      description:
        "A person who is in possession of opioids, including but not limited to morphine, heroin, hydrocodone, oxycodone, greater than 10kg but less than 100kg is guilty under this code section",
    },
    12: {
      title: "Possession of Opioids with Intent to Distribute",
      class: "Felony",
      id: "P.C. 7012",
      months: 20,
      fine: 1450,
      color: "red",
      description:
        "A person who is in possession of amphetamines, including but not limited to opioids, including but not limited to morphine, heroin, hydrocodone, oxycodone, or is packaged individually for sale, and possesses items used in the distribution of drugs (ie. scale, empty baggies, etc.) and weighs more than 50 kg, is guilty under this code section.",
    },
    13: {
      title: "Misdemeanor Possession of Opium",
      class: "Misdemeanor",
      id: "P.C. 7013",
      months: 0,
      fine: 350,
      color: "orange",
      description:
        "A person who is in possession of an amount of Opium under 500 grams is guilty under this code section.",
    },
    14: {
      title: "Felony Possession of Opium",
      class: "Felony",
      id: "P.C. 7014",
      months: 15,
      fine: 750,
      color: "red",
      description:
        "A person who is in possession of an amount of Opium over 500 grams is guilty under this code section.",
    },
    15: {
      title: "Possession of Opium with Intent to Distribute",
      class: "Felony",
      id: "P.C. 7015",
      months: 25,
      fine: 2500,
      color: "red",
      description:
        "A person who is carrying Opium, either in a quantity over 1 kg, or packaged for sale, is guilty under this code section.",
    },
    16: {
      title: "Misdemeanor Possession of Heroine",
      class: "Misdemeanor",
      id: "P.C. 7016",
      months: 0,
      fine: 350,
      color: "orange",
      description:
        "A person who is in possession of an amount of heroine under 500 grams is guilty under this code section.",
    },
    17: {
      title: "Felony Possession of Heroine",
      class: "Felony",
      id: "P.C. 7017",
      months: 15,
      fine: 750,
      color: "red",
      description:
        "A person who is in possession of an amount of heroine over 500 grams is guilty under this code section.",
    },
    18: {
      title: "Possession of Heroine with Intent to Distribute",
      class: "Felony",
      id: "P.C. 7018",
      months: 25,
      fine: 2300,
      color: "red",
      description:
        "A person who is carrying heroine, either in a quantity over 1 kg, or packaged for sale, is guilty under this code section.",
    },
    19: {
      title: "Possession of Drug Paraphernalia",
      class: "Misdemeanor",
      id: "P.C. 7019",
      months: 5,
      fine: 350,
      color: "orange",
      description:
        "A person who is in possession of any equipment, product or material of any kind which is primarily intended or designed for use in injecting, ingesting, inhaling, or otherwise introducing into the human body a controlled substance.",
    },
    20: {
      title: "Possession of Drug Manufacturing Materials",
      class: "Felony",
      id: "P.C. 7020",
      months: 7,
      fine: 750,
      color: "red",
      description:
        "A person who is in possession of any equipment, product or material of any kind which could be used in manufacturing, compounding, converting, concealing, producing, processing, preparing a controlled substance.",
    },
    21: {
      title: "Sale of a controlled substance",
      class: "Misdemeanor",
      id: "P.C. 7021",
      months: 10,
      fine: 800,
      color: "orange",
      description:
        "A person who sells, offers to sell, transports with the intent to sell, or gives away a controlled substance to another person, regardless of whether or not they possess that controlled substance is guilty under this code section.",
    },
    22: {
      title: "Drug Trafficking",
      class: "Felony",
      id: "P.C. 7022",
      months: 60,
      fine: 5000,
      color: "red",
      description:
        "A person who unlawfully transports a large quantity of a controlled substance, defined as greater than 10 kg, across, into, or out of the state is guilty under this section.",
    },
    23: {
      title: "Driving Under the Influence of Narcotics",
      class: "Felony",
      id: "P.C. 7023",
      months: 20,
      fine: 300,
      color: "red",
      description:
        "A person who operates a motor vehicle on a public roadway while under the influence of narcotics, or other medicine that inhibits your ability to drive safely is guilty under this code section.",
    },
    24: {
      title: "Public Intoxication",
      class: "Infraction",
      id: "P.C. 7024",
      months: 0,
      fine: 150,
      color: "green",
      description:
        "A person who is under the influence of alcohol in a public place, and disturbing the natural expectation of peace, is guilty under this code section.",
    },
    25: {
      title: "Public Indecency",
      class: "Infraction",
      id: "P.C. 7025",
      months: 0,
      fine: 200,
      color: "green",
      description:
        "A person who fails to appropriately dress themselves in a public place, or displays themselves to unconsenting parties in public areas, is guilty under this code section.",
    },
  },
};

PenalCode[7] = {
  Title: "OFFENSES AGAINST PUBLIC SAFETY",
  Statutes: {
    1: {
      title: "Criminal Possession of Weapon Class A",
      class: "Felony",
      id: "P.C. 8001",
      months: 5,
      fine: 250,
      color: "red",
      description:
        "A person who illegally possesses a weapon of Class A is guilty under this code section. Illegal possession is defined as someone who is not licensed to or legally able to carry a weapon based on their criminal history. Class A weapons are defined as melee or blunt instruments that are designed to inflict damage, defined to include switchblades, knife, or brass knuckles.",
    },
    2: {
      title: "Criminal Possession of Weapon Class B",
      class: "Felony",
      id: "P.C. 8002",
      months: 10,
      fine: 2000,
      color: "red",
      description:
        "A person who illegally possesses a weapon of Class B is guilty under this code section. Illegal possession is defined as someone who is not licensed to or legally able to carry a weapon based on their criminal history. Class B weapons are defined as semi-automatic handguns or rifles.",
    },
    3: {
      title: "Criminal Possession of Weapon Class C",
      class: "Felony",
      id: "P.C. 8003",
      months: 15,
      fine: 5000,
      color: "red",
      description:
        "A person who illegally possesses a weapon of Class C is guilty under this code section. Illegal possession is defined as someone who is not licensed to or legally able to carry a weapon based on their criminal history. Class C weapons are defined as automatic handguns or rifles.",
    },
    4: {
      title: "Criminal Possession of Weapon Class D",
      class: "Felony",
      id: "P.C. 8004",
      months: 20,
      fine: 7500,
      color: "red",
      description:
        "A person who illegally possesses a weapon of Class D is guilty under this code section. Illegal possession is defined as someone who is not licensed to or legally able to carry a weapon based on their criminal history. Class D weapons are defined as heavy artillery and explosives, including rocket launchers, C4, grenades, home-made explosives.",
    },
    5: {
      title: "Criminal Sale of Weapon Class A",
      class: "Felony",
      id: "P.C. 8005",
      months: 25,
      fine: 450,
      color: "red",
      description:
        "A person who illegally sells or distributes a weapon of Class A is guilty under this code section. Class A weapons are defined as melee or blunt instruments that are designed to inflict damage, defined to include switchblades, knife, or brass knuckles.",
    },
    6: {
      title: "Criminal Sale of Weapon Class B",
      class: "Felony",
      id: "P.C. 8006",
      months: 10,
      fine: 5000,
      color: "red",
      description:
        "A person who illegally sells or distributes a weapon of Class B is guilty under this code section. Illegal possession is defined as someone who is not licensed to or legally able to carry a weapon based on their criminal history. Class B weapons are defined as semi-automatic handguns or rifles.",
    },
    7: {
      title: "Criminal Sale of Weapon Class C",
      class: "Felony",
      id: "P.C. 8007",
      months: 15,
      fine: 9000,
      color: "red",
      description:
        "A person who illegally sells or distributes a weapon of Class C is guilty under this code section. Illegal possession is defined as someone who is not licensed to or legally able to carry a weapon based on their criminal history. Class C weapons are defined as automatic handguns or rifles.",
    },
    8: {
      title: "Criminal Sale of Weapon Class D",
      class: "Felony",
      id: "P.C. 8008",
      months: 60,
      fine: 12000,
      color: "red",
      description:
        "A person who illegally sells or distributes a weapon of Class D is guilty under this code section. Illegal possession is defined as someone who is not licensed to or legally able to carry a weapon based on their criminal history. Class D weapons are defined as heavy artillery and explosives, including rocket launchers, C4, grenades, home-made explosives.",
    },
    9: {
      title: "Criminal Use of Weapon",
      class: "Misdemeanor",
      id: "P.C. 8009",
      months: 15,
      fine: 4000,
      color: "orange",
      description:
        "A person who uses a weapon or firearm in the process of committing a crime is guilty under this code section.",
    },
    10: {
      title: "Possession of Illegal Firearm Modifications",
      class: "Misdemeanor",
      id: "P.C. 8010",
      months: 5,
      fine: 4000,
      color: "orange",
      description:
        "A person who is in possession of a firearm with modifications that are illegal is guilty under this code section. Examples include Full Auto Switch, extended magazines, suppressors, and serial number removal.",
    },
    11: {
      title: "Weapon Trafficking",
      class: "Felony",
      id: "P.C. 8011",
      months: 45,
      fine: 11000,
      color: "red",
      description:
        "A person who is responsible for the mass transportation (excess of 8) illegal firearms and weapons within or across the state of San Andreas with the intention of sale or distribution is guilty under this code section.",
    },
    12: {
      title: "Brandishing a Weapon",
      class: "Misdemeanor",
      id: "P.C. 8012",
      months: 5,
      fine: 2500,
      color: "orange",
      description:
        "A person who removes a firearm from concealment or holstering in a public place, either recklessly or threateningly, without obvious threat of harm or other lawful reason to use a firearm is guilty under this code section.",
    },
    13: {
      title: "Insurrection",
      class: "Felony",
      id: "P.C. 8013",
      months: 240,
      fine: 20000,
      color: "red",
      description:
        "A person who incites, sets on foot, assists, or engages in any rebellion or insurrection against the authority of the United States is guilty under this code section.",
    },
    14: {
      title: "Flying into Restricted Airspace",
      class: "Felony",
      id: "P.C. 8014",
      months: 10,
      fine: 750,
      color: "red",
      description:
        "A person who, while operating an aircraft, flies over restricted airspace, or flies into controlled airspace without prior authorization from air control, is guilty under this code section.",
    },
    15: {
      title: "Jaywalking",
      class: "Infraction",
      id: "P.C. 8015",
      months: 0,
      fine: 100,
      color: "green",
      description:
        "A person who crosses a road not at a valid crossing, within 100 meters of a valid crossing, is guilty under this code section.",
    },
    16: {
      title: "Criminal Use of Explosives",
      class: "Felony",
      id: "P.C. 8016",
      months: 30,
      fine: 5000,
      color: "red",
      description:
        "A person who uses explosives or incediaries in the act of committing a crime is guilty under this code section.",
    },
  },
};

PenalCode[8] = {
  Title: "OFFENSES INVOLVING THE OPERATION OF A VEHICLE",
  Statutes: {
    1: {
      title: "Driving While Intoxicated",
      class: "Misdemeanor",
      id: "P.C. 9001",
      months: 5,
      fine: 100,
      color: "orange",
      description:
        "A person who operates a motor vehicle while under the influence of alcohol with a BAC over 0.08 is guilty under this code section.",
    },
    2: {
      title: "Evading",
      class: "Misdemeanor",
      id: "P.C. 9002",
      months: 10,
      fine: 200,
      color: "orange",
      description:
        "A person who, while operating a vehicle on land, sea, or in air, or while operating a bicycle, willfully flees or otherwise attempts to elude or avoid a pursuing peace officer who communicates visually or audibly their request to pull over or stop is guilty under this code.",
    },
    3: {
      title: "Reckless Evading",
      class: "Felony",
      id: "P.C. 9003",
      months: 15,
      fine: 750,
      color: "red",
      description:
        "A person who, while operating a vehicle on land, sea, or in air, or while operating a bicycle, willfully flees or otherwise attempts to elude or avoid a pursuing peace officer in a reckless or dangerous manner, defined as failure to maintain correct lanes of travel, excessive variability in rates of speed (ie. brake checking), or shows an imminent threat to the wellbeing of the general public, is guilty under this code section.",
    },
    4: {
      title: "Failure to Yield to Emergency Vehicle",
      class: "Infraction",
      id: "P.C. 9004",
      months: 0,
      fine: 120,
      color: "green",
      description:
        "A person who, while operating a motor vehicle, fails to yeild when signalled to by emergency services lights and sirens is guilty under this code section.",
    },
    5: {
      title: "Failure to Obey Traffic Control Device",
      class: "Infraction",
      id: "P.C. 9005",
      months: 0,
      fine: 150,
      color: "green",
      description:
        "A person who fails to obey a traffic control device, such as a stop sign, traffic lights, or yield sign is guilty under this code section.",
    },
    6: {
      title: "Unroadworthy Vehicle",
      class: "Infraction",
      id: "P.C. 9006",
      months: 0,
      fine: 450,
      color: "green",
      description:
        "A person who operates a motor vehicle on a public roadway that is not permitted for legal road use is guilty under this code section. Vehicles such as dirtbikes, tracked vehicles, racecars, golf carts, fall under this section. Additionally, vehicles that are not equipped with indicators, brake lights, or have excessive damage are also guilty under this section.",
    },
    7: {
      title: "Negligent Driving",
      class: "Infraction",
      id: "P.C. 9007",
      months: 0,
      fine: 125,
      color: "green",
      description:
        "A person who, while operating a motor vehicle, displays behavior that endangers the safety of other drivers or pedestrians, due to negligence, is guilty under this code section.",
    },
    8: {
      title: "Reckless Driving",
      class: "Misdemeanor",
      id: "P.C. 9008",
      months: 10,
      fine: 725,
      color: "orange",
      description:
        "A person who, while operating a motor vehicle, displays behavior that endangers the safety of other drivers or pedestrians, due to recklessness, defined as failure to maintain correct lanes of travel, excessive variability in rates of speed (ie. brake checking), or shows an imminent threat to the wellbeing of the general public, is guilty under this code section.",
    },
    9: {
      title: "Speeding 1-10",
      class: "Infraction",
      id: "P.C. 9009",
      months: 0,
      fine: 100,
      color: "green",
      description:
        "A person who drives up to 10mph over the posted speed limit is guilty under this code section.",
    },
    10: {
      title: "Speeding 11-25",
      class: "Infraction",
      id: "P.C. 9010",
      months: 0,
      fine: 500,
      color: "green",
      description:
        "A person who drives up to 25 mph over the posted speed limit is guilty under this code section.",
    },
    11: {
      title: "Speeding 26+",
      class: "Infraction",
      id: "P.C. 9011",
      months: 0,
      fine: 700,
      color: "green",
      description:
        "A person who drives more than 26mph over the posted speed limit is guilty under this code section.",
    },
    12: {
      title: "Unlicensed Operation of Vehicle",
      class: "Infraction",
      id: "P.C. 9012",
      months: 0,
      fine: 350,
      color: "green",
      description:
        "A person who operates a motor vehicle on a public roadway without the proper licenses for that vehicle class is guilty under this section.",
    },
    13: {
      title: "Failing to Present a Driver's License",
      class: "Infraction",
      id: "P.C. 9013",
      months: 0,
      fine: 200,
      color: "green",
      description:
        "A person who operates a motor vehicle on a public roadway who fails to display upon the request of an officer a valid driver's license is guilty under this section.",
    },
    14: {
      title: "Illegal U-Turn",
      class: "Infraction",
      id: "P.C. 9014",
      months: 0,
      fine: 100,
      color: "green",
      description:
        "A person who turns around on a roadway where the markings do not permit it is guilty under this code section.",
    },
    15: {
      title: "Illegal Passing",
      class: "Infraction",
      id: "P.C. 9015",
      months: 0,
      fine: 100,
      color: "green",
      description:
        "A person who passes traffic illegally, unsafely, or where the markings do not permit it is guilty under this code section.",
    },
    16: {
      title: "Failure to Maintain Lane",
      class: "Infraction",
      id: "P.C. 9016",
      months: 0,
      fine: 100,
      color: "green",
      description:
        "A person who crosses over lane markings where they do not permit passing, or when passing in an unsafe manner, is guilty under this code section.",
    },
    17: {
      title: "Illegal Turn",
      class: "Infraction",
      id: "P.C. 9017",
      months: 0,
      fine: 100,
      color: "green",
      description:
        "A person who makes a turn from the wrong lane, or where signs disallow it, is guilty under this code section.",
    },
    18: {
      title: "Unauthorized Parking",
      class: "Infraction",
      id: "P.C. 9018",
      months: 0,
      fine: 100,
      color: "green",
      description:
        "A person who parks their vehicle while blocking the roadway, on a red curb, or in a marked no parking zone is guilty under this code section.",
    },
    19: {
      title: "Hit and Run",
      class: "Misdemeanor",
      id: "P.C. 9019",
      months: 10,
      fine: 500,
      color: "orange",
      description:
        "A person who is involved in a motor vehicle accident, and does not stop to exchange license or insurance information is guilty under this code section.",
    },
    20: {
      title: "Driving without Headlights or Signals",
      class: "Infraction",
      id: "P.C. 9020",
      months: 0,
      fine: 100,
      color: "orange",
      description:
        "A person who operates a motor vehicle in low light conditions or inclement weather conditions without their headlights switched on is guilty under this code section.",
    },
    21: {
      title: "Motor Vehicle Contest",
      class: "Misdemeanor",
      id: "P.C. 9021",
      months: 10,
      fine: 1000,
      color: "orange",
      description:
        "A person who attempts to or engages in racing or vehicular contest on public roadways is guilty under this code section.",
    },
    22: {
      title: "Piloting without Proper Licensing",
      class: "Felony",
      id: "P.C. 9022",
      months: 20,
      fine: 1500,
      color: "red",
      description:
        "A person who operates an aircraft without the appropriate licenses is guilty under this code section.",
    },
    23: {
      title: "Illegal Vehicle Modifications",
      class: "Infraction",
      id: "P.C. 9023",
      months: 0,
      fine: 650,
      color: "green",
      description:
        "Owners and drivers of vehicles on public streets with upgrades that are not legal for street use, are guilty under this code section. Upgrades that are not legal for street use, but are legal for off-road or track use include: Engines that are Tier 4 or 5, Transmission 3 or 4, NOS, and bulletproof tires.",
    },
    24: {
      title: "Public Disturbance by Motor Vehicle",
      class: "Infraction",
      id: "P.C. 9024",
      months: 0,
      fine: 350,
      color: "green",
      description:
        "Individuals who use a motor vehicle in a way that causes public disturbance are guilty under this code section. Examples of public disturbance include excessive burnouts, repeated revving of engine, loud music, and improper use of a horn.",
    },
  },
};

PenalCode[9] = {
  Title: "OFFENSES INVOLVING THE WELL-BEING OF WILDLIFE",
  Statutes: {
    1: {
      title: "Hunting in Restricted Areas",
      class: "Infraction",
      id: "P.C. 10001",
      months: 0,
      fine: 450,
      color: "green",
      description:
        "A person who hunts for game outside of allocated hunting areas is guilty under this code section.",
    },
    2: {
      title: "Unlicensed Hunting",
      class: "Infraction",
      id: "P.C. 10002",
      months: 0,
      fine: 450,
      color: "green",
      description:
        "A person who hunts for game without the appropriate license is guilty under this code section.",
    },
    3: {
      title: "Animal Cruelty",
      class: "Misdemeanor",
      id: "P.C. 10003",
      months: 10,
      fine: 450,
      color: "orange",
      description:
        "A person who causes harm to an animal with malicious intent, with no cause for self defence, is guilty under this code section.",
    },
    4: {
      title: "Hunting with a Non-Hunting Weapon",
      class: "Misdemeanor",
      id: "P.C. 10004",
      months: 10,
      fine: 450,
      color: "orange",
      description:
        "A person who hunts game with a weapon that is not a legal licensed hunting weapon is guilty under this code section. Legal licensed hunting weapons are defined as weapons that are sold direct-to-consumer by official hunting stores, with weapons being automatically registered to the individual who purchases the weapon.",
    },
    5: {
      title: "Hunting outside of hunting hours",
      class: "Infraction",
      id: "P.C. 10005",
      months: 0,
      fine: 450,
      color: "green",
      description:
        "A person who hunts game outside of the legal hours for hunting in that area is guilty under this code section. Legal hunting hours are from dawn to dusk in all legal hunting zones.",
    },
    6: {
      title: "Overhunting",
      class: "Misdemeanor",
      id: "P.C. 10006",
      months: 10,
      fine: 100,
      color: "orange",
      description:
        "A person who hunts over the amount allowed in a given hunting area is guilty under this code section. The current amount legally allowed by a single individual is defined as 200 kg of combined animal meat and skins, fur, tusks, or other animal by-products.",
    },
    7: {
      title: "Poaching",
      class: "Felony",
      id: "P.C. 10007",
      months: 20,
      fine: 1250,
      color: "red",
      description:
        "A person who hunts for an endangered or protected species in the state of San Andreas is guilty under this code section. Current endangered and protected species include the following: Mountain Lions, Bears, Seagulls, and Capybara.",
    },
  },
};

export default PenalCode;
