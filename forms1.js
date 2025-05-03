const form1_data = 
{
    "form_id": "client_spouse_detail_form",
    "form_name": "Client and Spouse Detail",
    "form_description": "Captures personal details of the client and spouse including name, DOB, health, marital status, and citizenship.",
    "form_type": "simple_form",
    "elements": [
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__FirstName",
        "element_type": "input",
        "input_type": "text",
        "label": "Name (first/last)",
        "value": "Daniel",
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
        "label": "Name (first/last)",
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
        "label": "Date of Birth",
        "value": "12/31/1982",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__DateOfBirth",
        "attributes": {
          "maxlength": 10,
          "required": false
        }
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__Gender",
        "element_type": "select",
        "label": "Gender",
        "value": "Male",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__Gender",
        "options": [
          { "label": "Male", "value": "Male" },
          { "label": "Female", "value": "Female" },
          { "label": "Non-binary", "value": "NonBinary" },
          { "label": "Prefer not to specify", "value": "Unspecified" }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpecialNeeds",
        "element_type": "select",
        "label": "Special Needs?",
        "value": "False",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpecialNeeds",
        "options": [
          { "label": "No", "value": "False" },
          { "label": "Yes", "value": "True" }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__InGoodHealth",
        "element_type": "select",
        "label": "In Good Health?",
        "value": "True",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__InGoodHealth",
        "options": [
          { "label": "No", "value": "False" },
          { "label": "Yes", "value": "True" }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__MaritalStatus",
        "element_type": "select",
        "label": "Marital Status",
        "value": "Married",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__MaritalStatus",
        "options": [
          { "label": "Single", "value": "Single" },
          { "label": "Married", "value": "Married" },
          { "label": "Separated", "value": "Separated" },
          { "label": "Divorced", "value": "Divorced" },
          { "label": "Domestic Partnership", "value": "Partnership" },
          { "label": "Widowed", "value": "Widowed" }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__PreviousMarriage",
        "element_type": "select",
        "label": "Previous Marriages?",
        "value": "True",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__PreviousMarriage",
        "options": [
          { "label": "No", "value": "False" },
          { "label": "Yes", "value": "True" }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__Citizenship",
        "element_type": "select",
        "label": "Citizenship",
        "value": "USCitizen",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__Citizenship",
        "options": [
          { "label": "U.S. Citizen", "value": "USCitizen" },
          { "label": "Resident Alien", "value": "ResidentAlien" },
          { "label": "Non-Resident Alien", "value": "NonResidentAlien" }
        ]
      },
  
      // Spouse Fields
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpFirstName",
        "element_type": "input",
        "input_type": "text",
        "label": "Spouse Name (first/last)",
        "value": "Lisa",
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
        "label": "Spouse Name (first/last)",
        "value": "Klein",
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
        "value": "11/11/1976",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpDateOfBirth",
        "attributes": {
          "maxlength": 10,
          "required": false
        }
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpGender",
        "element_type": "select",
        "label": "Spouse Gender",
        "value": "Female",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpGender",
        "options": [
          { "label": "Male", "value": "Male" },
          { "label": "Female", "value": "Female" },
          { "label": "Non-binary", "value": "NonBinary" },
          { "label": "Prefer not to specify", "value": "Unspecified" }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpSpecialNeeds",
        "element_type": "select",
        "label": "Spouse Special Needs?",
        "value": "False",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpSpecialNeeds",
        "options": [
          { "label": "No", "value": "False" },
          { "label": "Yes", "value": "True" }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpInGoodHealth",
        "element_type": "select",
        "label": "Spouse In Good Health?",
        "value": "False",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpInGoodHealth",
        "options": [
          { "label": "No", "value": "False" },
          { "label": "Yes", "value": "True" }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpPreviousMarriage",
        "element_type": "select",
        "label": "Spouse Previous Marriages?",
        "value": "False",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpPreviousMarriage",
        "options": [
          { "label": "No", "value": "False" },
          { "label": "Yes", "value": "True" }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpCitizenship",
        "element_type": "select",
        "label": "Spouse Citizenship",
        "value": "USCitizen",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__SpCitizenship",
        "options": [
          { "label": "U.S. Citizen", "value": "USCitizen" },
          { "label": "Resident Alien", "value": "ResidentAlien" },
          { "label": "Non-Resident Alien", "value": "NonResidentAlien" }
        ]
      }
    ]
}

const form2_data = {
        "form_id": "contact_info_form",
        "form_name": "Contact Information",
        "form_description": "Captures address, phone, and email details for the client and spouse.",
        "form_type": "simple_form",
        "elements": [
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_Address1",
            "element_type": "input",
            "input_type": "text",
            "label": "Address",
            "value": "",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_Address1",
            "attributes": {
              "maxlength": 100,
              "required": false
            }
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_Address2",
            "element_type": "input",
            "input_type": "text",
            "label": "Address Line 2",
            "value": "",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_Address2",
            "attributes": {
              "maxlength": 100,
              "required": false
            }
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_City",
            "element_type": "input",
            "input_type": "text",
            "label": "City",
            "value": "",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_City",
            "attributes": {
              "maxlength": 50,
              "required": false
            }
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_State",
            "element_type": "select",
            "label": "State",
            "value": "",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_State",
            "options": [
              { "label": "AL", "value": "AL" }, { "label": "AK", "value": "AK" }, { "label": "AZ", "value": "AZ" },
              { "label": "CA", "value": "CA" }, { "label": "NY", "value": "NY" }, { "label": "TX", "value": "TX" },
              { "label": "FL", "value": "FL" }, { "label": "WA", "value": "WA" }, { "label": "Other", "value": "OT" }
              // Add remaining states as needed
            ]
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_Zip",
            "element_type": "input",
            "input_type": "text",
            "label": "Zip",
            "value": "",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_Zip",
            "attributes": {
              "maxlength": 10,
              "required": false
            }
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_HomePhone",
            "element_type": "input",
            "input_type": "text",
            "label": "Home Phone",
            "value": "",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_HomePhone",
            "attributes": {
              "maxlength": 25,
              "required": false
            }
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_CellPhone",
            "element_type": "input",
            "input_type": "text",
            "label": "Cell Phone",
            "value": "",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_CellPhone",
            "attributes": {
              "maxlength": 25,
              "required": false
            }
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_SpouseCellPhone",
            "element_type": "input",
            "input_type": "text",
            "label": "Spouse Cell Phone",
            "value": "",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_SpouseCellPhone",
            "attributes": {
              "maxlength": 25,
              "required": false
            }
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_Fax",
            "element_type": "input",
            "input_type": "text",
            "label": "Fax",
            "value": "",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_Fax",
            "attributes": {
              "maxlength": 25,
              "required": false
            }
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_Email",
            "element_type": "input",
            "input_type": "text",
            "label": "Email",
            "value": "",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_Email",
            "attributes": {
              "maxlength": 100,
              "required": false
            }
          },
          {
            "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_SpouseEmail",
            "element_type": "input",
            "input_type": "text",
            "label": "Spouse Email",
            "value": "",
            "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__ContactInfoControl_SpouseEmail",
            "attributes": {
              "maxlength": 100,
              "required": false
            }
          }
        ]
}

const form3_data = {
    "form_id": "employment_info_form",
    "form_name": "Employment Information",
    "form_description": "Captures employment details for both the client and spouse including employer, address, contact, job title, and duration.",
    "form_type": "simple_form",
    "elements": [
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpName",
        "element_type": "input",
        "input_type": "text",
        "label": "Employer Name (Daniel)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpName"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpAddress",
        "element_type": "input",
        "input_type": "text",
        "label": "Employer Address (Daniel)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpAddress"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpAddress2",
        "element_type": "input",
        "input_type": "text",
        "label": "Employer Address Line 2 (Daniel)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpAddress2"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpCity",
        "element_type": "input",
        "input_type": "text",
        "label": "Employer City (Daniel)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpCity"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpState",
        "element_type": "select",
        "label": "Employer State (Daniel)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpState"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpZip",
        "element_type": "input",
        "input_type": "text",
        "label": "Employer Zip (Daniel)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpZip"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_BusinessPhone",
        "element_type": "input",
        "input_type": "text",
        "label": "Work Phone (Daniel)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_BusinessPhone"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_BusinessFax",
        "element_type": "input",
        "input_type": "text",
        "label": "Work Fax (Daniel)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_BusinessFax"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpEmailAddress",
        "element_type": "input",
        "input_type": "text",
        "label": "Email Address (Daniel)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpEmailAddress"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpJobTitle",
        "element_type": "input",
        "input_type": "text",
        "label": "Title/Position (Daniel)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpJobTitle"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpYearsEmployed",
        "element_type": "input",
        "input_type": "text",
        "label": "Years Employed (Daniel)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpYearsEmployed"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpPrevEmpName",
        "element_type": "input",
        "input_type": "text",
        "label": "Previous Employer (Daniel)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpPrevEmpName"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpPrevJobTitle",
        "element_type": "input",
        "input_type": "text",
        "label": "Previous Title/Position (Daniel)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpPrevJobTitle"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpPrevEmpYearsEmployed",
        "element_type": "input",
        "input_type": "text",
        "label": "Previous Years Employed (Daniel)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_EmpPrevEmpYearsEmployed"
      },
  
      // Lisa's fields follow same structure
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpName",
        "element_type": "input",
        "input_type": "text",
        "label": "Employer Name (Lisa)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpName"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpAddress",
        "element_type": "input",
        "input_type": "text",
        "label": "Employer Address (Lisa)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpAddress"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpAddress2",
        "element_type": "input",
        "input_type": "text",
        "label": "Employer Address Line 2 (Lisa)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpAddress2"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpCity",
        "element_type": "input",
        "input_type": "text",
        "label": "Employer City (Lisa)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpCity"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpState",
        "element_type": "select",
        "label": "Employer State (Lisa)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpState"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpZip",
        "element_type": "input",
        "input_type": "text",
        "label": "Employer Zip (Lisa)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpZip"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpJobTitle",
        "element_type": "input",
        "input_type": "text",
        "label": "Title/Position (Lisa)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpJobTitle"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpYearsEmployed",
        "element_type": "input",
        "input_type": "text",
        "label": "Years Employed (Lisa)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpYearsEmployed"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpPrevEmpName",
        "element_type": "input",
        "input_type": "text",
        "label": "Previous Employer (Lisa)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpPrevEmpName"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpPrevJobTitle",
        "element_type": "input",
        "input_type": "text",
        "label": "Previous Title/Position (Lisa)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpPrevJobTitle"
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpPrevEmpYearsEmployed",
        "element_type": "input",
        "input_type": "text",
        "label": "Previous Years Employed (Lisa)",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__EmploymentInfoControl_SpouseEmpPrevEmpYearsEmployed"
      }
    ]
}
  

const form4_data = {
    "form_id": "additional_info_form",
    "form_name": "Additional Info",
    "form_description": "Captures flat tax rate and custom investment growth settings for an individual.",
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
          "required": false,
          "validation_range": {
            "min": 0.0,
            "max": 100.0,
            "unit": "%"
          }
        }
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__InvestmentGrowthRate_GrowthRateDropDown",
        "element_type": "select",
        "label": "Core Cash Account Growth Rate",
        "value": "Nothing",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__InvestmentGrowthRate_GrowthRateDropDown",
        "options": [
          { "label": "", "value": "Nothing" },
          { "label": "No Growth (0.00%)", "value": "None" },
          { "label": "Inflation (2.54%)", "value": "Inflation" },
          { "label": "Asset Pres (2.47%)", "value": "assetpres" },
          { "label": "Income (3.56%)", "value": "income" },
          { "label": "Enh Income (4.90%)", "value": "enhincome" },
          { "label": "Growth Inc (5.73%)", "value": "growincome" },
          { "label": "Growth (7.58%)", "value": "growth" },
          { "label": "Agg Growth (8.02%)", "value": "aggrgrowth" },
          { "label": "Custom", "value": "Custom" }
        ]
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__InvestmentGrowthRate_GrowthRateTextBox",
        "element_type": "input",
        "input_type": "text",
        "label": "Custom Growth Rate",
        "value": "",
        "selector": "#ctl00_Content_PageContent__Placeholder__FactFinderContent__PlaceHolder__InvestmentGrowthRate_GrowthRateTextBox",
        "attributes": {
          "maxlength": 7,
          "required": false,
          "validation_range": {
            "min": 0.0,
            "max": 25.0,
            "unit": "%"
          },
          "display_condition": "shown when dropdown is set to Custom"
        }
      },
      {
        "element_id": "ctl00_Content_PageContent__Placeholder__StatusCheckBox",
        "element_type": "checkbox",
        "label": "Task Completed",
        "value": true,
        "selector": "#ctl00_Content_PageContent__Placeholder__StatusCheckBox"
      }
    ]
}

export const forms1 = {
    "1": {
        "name": " Basic",
        "form_structure": form1_data
    },
    "2": {
        "name": "Contact Info",
        "form_structure": form2_data
    },
    "3": {
        "name": "Employment Info",
        "form_structure": form3_data
    },
    "4": {
        "name": "Additional Info",
        "form_structure": form4_data
    }    
}


  

  
