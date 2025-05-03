const form1_data = {
    "form_id": "child_detail_form",
    "form_name": "Child Detail",
    "form_description": "Captures details about the child and spouse, including name, DOB, gender, health, dependency, and family info.",
    "form_type": "complex_form",
    "elements": [
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__FirstName",
        "element_type": "input",
        "input_type": "text",
        "label": "Child First Name",
        "value": "Child 2",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__FirstName",
        "attributes": {
          "maxlength": 50,
          "required": true
        }
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__LastName",
        "element_type": "input",
        "input_type": "text",
        "label": "Child Last Name",
        "value": "Klein",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__LastName",
        "attributes": {
          "maxlength": 50,
          "required": true
        }
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__DateOfBirth",
        "element_type": "input",
        "input_type": "text",
        "label": "Child Date of Birth",
        "value": "5/2/2025",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__DateOfBirth",
        "attributes": {
          "maxlength": 10
        }
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__Gender",
        "element_type": "select",
        "label": "Child Gender",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__Gender",
        "options": [
          {
            "label": "Male",
            "value": "Male"
          },
          {
            "label": "Female",
            "value": "Female"
          },
          {
            "label": "Non-binary",
            "value": "NonBinary"
          },
          {
            "label": "Prefer not to specify",
            "value": "Unspecified"
          }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpecialNeeds",
        "element_type": "select",
        "label": "Child Special Needs?",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpecialNeeds",
        "options": [
          {
            "label": "No",
            "value": "False"
          },
          {
            "label": "Yes",
            "value": "True"
          }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__InGoodHealth",
        "element_type": "select",
        "label": "Child In Good Health?",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__InGoodHealth",
        "options": [
          {
            "label": "No",
            "value": "False"
          },
          {
            "label": "Yes",
            "value": "True"
          }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__FinanciallyDependent",
        "element_type": "select",
        "label": "Child Financially Dependent?",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__FinanciallyDependent",
        "options": [
          {
            "label": "No",
            "value": "False"
          },
          {
            "label": "Yes",
            "value": "True"
          }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__MaritalStatus",
        "element_type": "select",
        "label": "Child Marital Status",
        "value": "Single",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__MaritalStatus",
        "options": [
          {
            "label": "Single",
            "value": "Single"
          },
          {
            "label": "Married",
            "value": "Married"
          },
          {
            "label": "Separated",
            "value": "Separated"
          },
          {
            "label": "Divorced",
            "value": "Divorced"
          },
          {
            "label": "Domestic Partnership",
            "value": "Partnership"
          },
          {
            "label": "Widowed",
            "value": "Widowed"
          }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ParentDropDownList",
        "element_type": "select",
        "label": "Child Parent",
        "value": "c7340dbd-d478-4b8a-87b2-4849f827bce4|Joint",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ParentDropDownList",
        "options": [
          {
            "label": "Daniel Klein",
            "value": "c7340dbd-d478-4b8a-87b2-4849f827bce4|Person"
          },
          {
            "label": "Lisa Klein",
            "value": "c7340dbd-d478-4b8a-87b2-4849f827bce4|Spouse"
          },
          {
            "label": "Daniel and Lisa Klein",
            "value": "c7340dbd-d478-4b8a-87b2-4849f827bce4|Joint"
          }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__PreviousMarriage",
        "element_type": "select",
        "label": "From Previous Marriage?",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__PreviousMarriage",
        "options": [
          {
            "label": "No",
            "value": "False"
          },
          {
            "label": "Yes",
            "value": "True"
          }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__Citizenship",
        "element_type": "select",
        "label": "Child Citizenship",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__Citizenship",
        "options": [
          {
            "label": "U.S. Citizen",
            "value": "USCitizen"
          },
          {
            "label": "Resident Alien",
            "value": "ResidentAlien"
          },
          {
            "label": "Non-Resident Alien",
            "value": "NonResidentAlien"
          }
        ]
      }
    ],
    "conditional_sections": [
      {
        "condition": "MaritalStatus in ['Married', 'Separated', 'Partnership']",
        "section_id": "SpouseDiv",
        "section_name": "Spouse",
        "elements": [
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpFirstName",
            "element_type": "input",
            "input_type": "text",
            "label": "Spouse First Name",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpFirstName",
            "attributes": {
              "maxlength": 50,
              "required": true
            }
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpLastName",
            "element_type": "input",
            "input_type": "text",
            "label": "Spouse Last Name",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpLastName",
            "attributes": {
              "maxlength": 50,
              "required": true
            }
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpDateOfBirth",
            "element_type": "input",
            "input_type": "text",
            "label": "Spouse Date of Birth",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpDateOfBirth",
            "attributes": {
              "maxlength": 10
            }
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpGender",
            "element_type": "select",
            "label": "Spouse Gender",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpGender",
            "options": [
              {
                "label": "Male",
                "value": "Male"
              },
              {
                "label": "Female",
                "value": "Female"
              },
              {
                "label": "Non-binary",
                "value": "NonBinary"
              },
              {
                "label": "Prefer not to specify",
                "value": "Unspecified"
              }
            ]
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpSpecialNeeds",
            "element_type": "select",
            "label": "Spouse Special Needs?",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpSpecialNeeds",
            "options": [
              {
                "label": "No",
                "value": "False"
              },
              {
                "label": "Yes",
                "value": "True"
              }
            ]
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpInGoodHealth",
            "element_type": "select",
            "label": "Spouse In Good Health?",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpInGoodHealth",
            "options": [
              {
                "label": "No",
                "value": "False"
              },
              {
                "label": "Yes",
                "value": "True"
              }
            ]
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpCitizenship",
            "element_type": "select",
            "label": "Spouse Citizenship",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpCitizenship",
            "options": [
              {
                "label": "U.S. Citizen",
                "value": "USCitizen"
              },
              {
                "label": "Resident Alien",
                "value": "ResidentAlien"
              },
              {
                "label": "Non-Resident Alien",
                "value": "NonResidentAlien"
              }
            ]
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__DisplaySpouseName",
            "element_type": "select",
            "label": "Display on Reports",
            "value": "True",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__DisplaySpouseName",
            "options": [
              {
                "label": "No",
                "value": "False"
              },
              {
                "label": "Yes",
                "value": "True"
              }
            ]
          }
        ]
      }
    ]
}

const form2_data = {
    "form_id": "additional_info_form",
    "form_name": "Additional Info",
    "form_description": "Captures flat tax and core cash growth rate preferences.",
    "form_type": "simple_form",
    "elements": [
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__FlatTaxRate",
        "element_type": "input",
        "input_type": "text",
        "label": "Flat Tax Rate",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__FlatTaxRate",
        "attributes": {
          "maxlength": 6,
          "validation": {
            "type": "range",
            "min": 0.0,
            "max": 100.0
          }
        }
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__InvestmentGrowthRate_GrowthRateDropDown",
        "element_type": "select",
        "label": "Core Cash Account Growth Rate",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__InvestmentGrowthRate_GrowthRateDropDown",
        "options": [
          {
            "label": "No Growth (0.00%)",
            "value": "None"
          },
          {
            "label": "Inflation (2.54%)",
            "value": "Inflation"
          },
          {
            "label": "Asset Pres (2.47%)",
            "value": "assetpres"
          },
          {
            "label": "Income (3.56%)",
            "value": "income"
          },
          {
            "label": "Enh Income (4.90%)",
            "value": "enhincome"
          },
          {
            "label": "Growth Inc (5.73%)",
            "value": "growincome"
          },
          {
            "label": "Growth (7.58%)",
            "value": "growth"
          },
          {
            "label": "Agg Growth (8.02%)",
            "value": "aggrgrowth"
          },
          {
            "label": "Custom",
            "value": "Custom"
          }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__InvestmentGrowthRate_GrowthRateTextBox",
        "element_type": "input",
        "input_type": "text",
        "label": "Custom Growth Rate",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__InvestmentGrowthRate_GrowthRateTextBox",
        "attributes": {
          "maxlength": 7,
          "visibility_condition": "GrowthRateDropDown == 'Custom'",
          "validation": {
            "type": "range",
            "min": 0.0,
            "max": 25.0
          }
        }
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__StatusCheckBox",
        "element_type": "checkbox",
        "label": "Task Completed",
        "selector": "#ctl00_Content_PageContent__Placeholder__StatusCheckBox"
      }
    ]
}

export const forms2 = {
    "1": {
        "name": " Basic",
        "form_structure": form1_data
    },
    "2": {
        "name": "Additional Info",
        "form_structure": form2_data
    },  
}
