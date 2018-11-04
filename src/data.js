const flexiConfig = {
    items:[
        {
            "name":"person_name",
            "label":"Person's Name",
            "type":"text"
        },
        {
          "name":"state",
          "label":"Person's state",
          "type":"select",
          "value":"select city",
          "options":[
             { value: "Maharashtra" },
              { value:"Kerala" },
             { value:"Tamil Nadu" }
          ]
        }
    ]
};
export default flexiConfig;