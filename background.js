// Background script for GDVerse extension
console.log('[GDVerse] Background script starting...');

// Listen for extension installation
chrome.runtime.onInstalled.addListener(() => {
    console.log('[GDVerse] Extension installed/updated');
});

// Handle side panel opening
chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));

// Listen for extension icon click and side panel opening
chrome.action.onClicked.addListener((tab) => {
    console.log('[GDVerse] Extension icon clicked, opening side panel...');
    chrome.sidePanel.open({ windowId: tab.windowId });
}); 


//   // Listen for messages from content scripts
//   chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === 'call_llm') {
//       call_llm(request.promptId, request.data)
//         .then(result => sendResponse(result))
//         .catch(error => sendResponse({ error: error.message }));
//       return true; // Indicates async response
//     }
//   });


async function call_llm(promptId, data) {
    console.log("data:", data)
    try {
      const url = `https://api.portkey.ai/v1/prompts/${promptId}/completions`;
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'x-portkey-api-key': 'zJmahLWNomHDdUlruPib/13g4pdc',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          stream: false,
          variables: {"keys":data}
        })
      });
  
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const responseData = await response.json();
      console.log("Response data:", responseData);
      
      // Extract the message content from the response
      const messageContent = responseData.choices[0].message.content;
      console.log("message", messageContent)
      return messageContent;

    } catch (error) {
      console.error('Error calling LLM API:', error);
      throw error;
    }
  }
  
  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
  const form1_data = {
    "form_id": "child_detail_form",
    "form_name": "Child Detail",
    "form_description": "Captures details about the child including name, DOB, gender, health, dependency, and family info.",
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
    "form_description": "Captures flat tax and core cash growth rate preferences for a child",
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
  
  const forms2 = [
    {
        "name": "Basic",
        "structure": form1_data
    },
    {
        "name": "Additional Info",
        "structure": form2_data
    },  
]
  
  const parent_nodes = {
    "1": {
        "name": "Family Information",
        "available_actions": ["Edit Client/Spouse Info", "Add Child", "Add Grandchild", "Add Great Grandchild"],
    },
  
    "2": {
        "name": "Entities",
        "available_action_text": ["Add Individual", "Add Charity"]
        },
  
    "3": {
        "name": "Assumptions",
        "available_action_text": ["Investment Assumptions", "Miscellaneous Assumptions", "Tax Assumptions", "Default Growth Rates"]
    },
  
    "4": {
        "name": "Property",
        "available_action_text": ["Real Estate Property", "Personal Property"]
    }
  }
  
  const data_nodes = {
    "1": {
        "name": "Child",
        "parent_id": "1",
        "action_in_parent": "Add Child",
        "forms": forms2
  
    },
    "2": {
        "name": "Grandchild",
        "parent_id": "1",
        "action_in_parent": "Add Grandchild"
    },
    "3": {
        "name": "Great Grandchild",
        "parent_id": "1",
        "action_in_parent": "Add Great Grandchild"
    },
    "4": {
        "name": "Individual",
        "parent_id": "2",
        "action_in_parent": "Add Individual"
    },
    "5": {
        "name": "Charity",
        "parent_id": "2",
        "action_in_parent": "Add Charity"
    },
    "6": {
        "name": "Investment",
        "parent_id": "3",
        "action_in_parent": "Investment Assumptions"
    },
    "7": {
        "name": "Miscellaneous",
        "parent_id": "3",
        "action_in_parent": "Miscellaneous Assumptions"
    },
    "8": {
        "name": "Tax",
        "parent_id": "3",
        "action_in_parent": "Tax Assumptions"
    },
    "9": {
        "name": "Default Growth Rates",
        "parent_id": "3",
        "action_in_parent": "Default Growth Rates"
    },
    "10": {
        "name": "Real Estate",
        "parent_id": "4",
        "action_in_parent": "Real Estate Property"
    },
    "11": {
        "name": "Personal Property",
        "parent_id": "4",
        "action_in_parent": "Personal Property"
    }
    }
  
  const navigation_tree = {
          "Overview": {
            "Family Information": {
              "Client & Spouse": {},
              "Children": {
                "Child 1 Klein": {}
              },
              "Grandchildren": {
                "Grandchild 1 Klein": {},
                "Grandchild 2 Klein": {}
              },
              "Great Grandchildren": {}
            },
            "Entities": {
              "Individuals": {
                "Individual 1 Individual": {}
              },
              "Charities": {
                "Charity 1": {}
              }
            },
            "Assumptions": {
              "Investment": {},
              "Miscellaneous": {},
              "Tax": {},
              "Default Growth Rates": {}
            },
            "Property": {
              "Real Estate": {
                "Real Estate 1": {}
              },
              "Personal Property": {
                "Personal Property 1": {}
              }
            }
      }
  };
  
  // Navigation tree should be available from import
  console.log('[GDVerse] Navigation tree:', navigation_tree);
  
  function assignIdsToTree(tree, counter = { value: 1 }) {
    // If the current node is an object (not an array), assign an id
    if (tree && typeof tree === 'object' && !Array.isArray(tree)) {
      tree.id = `${counter.value++}`;
      for (const key in tree) {
        if (typeof tree[key] === 'object') {
          assignIdsToTree(tree[key], counter);
        }
      }
    }
    return tree;
  }
  
  // function findNavigationNodeById(tree, id) {
  //   // If tree is null/undefined, return null
  //   if (!tree) return null;
    
  //   // Check if current node has the id we're looking for
  //   if (tree.id === id) {
  //     return tree;
  //   }
    
  //   // Recursively search through all properties of the tree
  //   for (const key in tree) {
  //     if (typeof tree[key] === 'object') {
  //       const result = findNavigationNodeById(tree[key], id);
  //       if (result) return result;
  //     }
  //   }
    
  //   return null;
  // } 
  
  function findNavigationNodeKeyById(tree, id, parentKey = null) {
    if (!tree) return null;
  
    if (tree.id === id) {
      return parentKey;
    }
  
    for (const key in tree) {
      if (typeof tree[key] === 'object') {
        const result = findNavigationNodeKeyById(tree[key], id, key);
        if (result) return result;
      }
    }
  
    return null;
  }
  
  // Usage:
  const navigation_tree_with_ids = assignIdsToTree(navigation_tree);
  console.log('[GDVerse] Navigation tree:', navigation_tree_with_ids);
  

  
  const meeting_notes = `John Smith, age 44 (born June 15, 1980), 
      is in good health and planning to retire at age 67. His spouse, Emily Smith, is 43 years old (born March 22, 1982). S
      he has noted some minor health concerns but nothing currently impacting long-term planning. 
      Emily plans to retire slightly earlier, at age 65. Both John and Emily are planning with a life expectancy of 90 years.
      They have two children: Ava, their 13-year-old daughter, and Noah, their 9-year-old son.`;
  
  
  const prepare_update_plan_prompt = (meeting_notes, navigation_tree_with_ids, data_nodes) => {
        const prompt = `
      You are an expert CRM assistant. Your job is to analyze the following information and recommend actions for updating the CRM.
      
      Inputs:
      - meeting_notes: These are notes from a recent client meeting. They may mention new information to be added or updates to existing data.
      - current_data_pages (navigation_tree): This is a JSON tree structure showing what data categories and pages are currently present in the CRM for the client. Each node in this tree has a unique "id".
      - available_data_pages (data_nodes): This is a JSON structure listing all possible types of data/pages that can be added to the CRM, organized by category. Each node in this structure also has a unique "id".
      
      Your task:
      1. Read the meeting_notes and identify any every new data page that should be added to the CRM, based on what is currently missing (compare navigation_tree and data_nodes).
      2. For **pages_to_be_added**, use the "id" from the data_nodes structure for each recommended addition, and provide a brief reason for adding it.
      3. Identify any existing data/pages in the CRM that might need to be updated, based on the meeting_notes.
      4. For **pages_that_might_be_updated**, use the "id" from the navigation_tree structure for each page that might need updating, and provide a brief reason for updating it.
      5. The navigation_tree is a tree structure. When suggesting updates, try to match the most specific (final/leaf) node possible, especially if the meeting notes clearly mention a name or detail that matches a leaf node.
  
      Important:
      1. In case you have to add new pages of same data type, keep them seperate entries in the lists like adding multiple children or grandchildren or properties etc
      2. Many times you might see some default pages that are already present in the navigation_tree, you can ignore them. and add the new ones if name does not macthes or seem correct
      
      Return your answer as a JSON object in the following format:
      {
        "pages_to_be_added": [
          {"data_node_id": "<data_node_id from data_nodes>", "reason": "<reason for adding>"},
          ...
        ],
        "pages_that_might_be_updated": [
          {"navigation_tree_id": "<id from navigation_tree>", "reason": "<reason for updating>"},
          ...
        ]
      }
      
      Here is the input data:
      {
        "meeting_notes": ${JSON.stringify(meeting_notes)},
        "current_data_pages": ${JSON.stringify(navigation_tree_with_ids)},
        "available_data_pages": ${JSON.stringify(data_nodes)}
      }
      
      Return only the JSON object as your answer.
      `;
        return prompt;
      };
  
  const parse_llm_response = (llmResponse) => {
    // If response is already an object, return it
    if (typeof llmResponse === 'object' && llmResponse !== null) {
      return llmResponse;
    }
  
    // If response is a string, try to parse it as JSON
    if (typeof llmResponse === 'string') {
      // Try direct JSON.parse first
      try {
        return JSON.parse(llmResponse);
      } catch (e) {
        // Try to extract JSON from markdown code blocks or curly braces
        const jsonMatch = llmResponse.match(/```(?:json)?\n([\s\S]*?)\n```/) ||
                          llmResponse.match(/```([\s\S]*?)```/) ||
                          llmResponse.match(/{[\s\S]*?}/);
        if (jsonMatch) {
          try {
            const extracted = jsonMatch[1] || jsonMatch[0];
            return JSON.parse(extracted);
          } catch (e) {
            console.log("parsing failed .....", e)
            return null;
          }
        }
        console.log("parsing failed ..... no JSON found in LLM response")
        return null;
      }
    }
  
    return null;
  };
  
  const get_update_plan_from_llm =  async (meeting_notes, navigation_tree_with_ids, data_nodes) => {
    const prompt = prepare_update_plan_prompt(meeting_notes, navigation_tree_with_ids, data_nodes)
    const response =  await call_llm("pp-n8n-prompt-7bc8be", prompt)
    const result = parse_llm_response(response)
    console.log("yolo:", result)
    return result
  }
  

  // Add this function near the top with other utility functions
  const updateSidePanelStatus = async (message, type = 'info') => {
    await chrome.runtime.sendMessage({
      action: 'updateStatus',
      message: message,
      type: type
    });
  };

  // Add this function before processMeetingNotes
  async function cleanupDebuggerAttachments(tabId) {
    try {
      const targets = await chrome.debugger.getTargets();
      const isAttached = targets.some(target => 
        target.tabId === tabId && target.attached
      );
      
      if (isAttached) {
        console.log('[GDVerse] Debugger is attached, attempting to detach...');
        try {
          await chrome.debugger.detach({tabId: tabId});
          console.log('[GDVerse] Successfully detached debugger');
        } catch (detachError) {
          console.warn('[GDVerse] Could not detach debugger:', detachError.message);
          return false;
        }
      } else {
        console.log('[GDVerse] No debugger attached, proceeding...');
      }
      return true;
    } catch (error) {
      console.error('[GDVerse] Error during debugger cleanup:', error);
      return false;
    }
  }

  // Add this new function to handle debugger attachment
  async function ensureDebuggerAttached(tabId) {
    try {
      const targets = await chrome.debugger.getTargets();
      const isAttached = targets.some(target => 
        target.tabId === tabId && target.attached
      );

      if (!isAttached) {
        console.log('[GDVerse] Attaching debugger...');
        await chrome.debugger.attach({tabId: tabId}, "1.0");
        console.log('[GDVerse] Debugger attached successfully');
      }
      return true;
    } catch (error) {
      console.error('[GDVerse] Error attaching debugger:', error);
      return false;
    }
  }

  async function processMeetingNotes() {
    console.log('[GDVerse] processMeetingNotes function started');
    
    try {
      await updateSidePanelStatus('Getting filling plan from LLM...', 'info');
      const result = await get_update_plan_from_llm(meeting_notes, navigation_tree_with_ids, data_nodes);
      console.log("[GDVerse] LLM result:", result);
      await updateSidePanelStatus('Successfully received filling plan from LLM', 'success');

      let to_be_added_node_info = []
      let to_be_updated_node_info = []
      
      //lets find all elements we wanna add and add
      const llm_pages_to_be_added = result["pages_to_be_added"]
      console.log("[GDVerse] Pages to be added:", llm_pages_to_be_added);
      if (llm_pages_to_be_added && llm_pages_to_be_added.length > 0) {
        await updateSidePanelStatus(`Found ${llm_pages_to_be_added.length} pages to add`, 'info');
        llm_pages_to_be_added.forEach(node => {
          console.log("[GDVerse] Processing node:", node);
          if (node.data_node_id && data_nodes[node.data_node_id]) {
            console.log('[GDVerse] Node present in data_nodes:', data_nodes[node.data_node_id]);
            const data_node = data_nodes[node.data_node_id];
            const parent_node = parent_nodes[data_node.parent_id];
            to_be_added_node_info.push({"parent_node_text": parent_node.name, "parent_action_text": data_node.action_in_parent, "context": node.reason, "forms":data_node.forms})
          } else {
            console.warn('[GDVerse] Invalid data_node_id:', node.data_node_id);
          }
        });
      }
      
      const data_pages_to_be_updated = result["pages_that_might_be_updated"]
      console.log("[GDVerse] Pages to be updated:", data_pages_to_be_updated);
      if (data_pages_to_be_updated && data_pages_to_be_updated.length > 0) {
        await updateSidePanelStatus(`Found ${data_pages_to_be_updated.length} pages to update`, 'info');
        data_pages_to_be_updated.forEach(node => {
          console.log("[GDVerse] Processing update node:", node);
          if (node.navigation_tree_id) {
            const foundKey = findNavigationNodeKeyById(navigation_tree_with_ids, node.navigation_tree_id);
            if (foundKey) {
              console.log('[GDVerse] Node found in navigation_tree_with_key:', foundKey);
              to_be_updated_node_info.push({"data_node_text": foundKey, "context": node.reason})
            } else {
              console.warn('[GDVerse] Invalid navigation_tree_id:', node.navigation_tree_id);
            }
          }
        });
      }
      
      console.log("[GDVerse] Final to_be_added_node_info:", to_be_added_node_info);
      console.log("[GDVerse] Final to_be_updated_node_info:", to_be_updated_node_info);
      
      // Process each node info by sending messages to content script
      for (const node_info of to_be_added_node_info.slice(0, 1)) {
        console.log("[GDVerse] Processing node_info:", node_info);
        await updateSidePanelStatus(`Adding page: ${node_info.parent_node_text} - ${node_info.parent_action_text}`, 'info');
        
        try {
          // Get the active tab ID when needed
          const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
          if (!tabs || tabs.length === 0) {
            throw new Error('No active tab found');
          }
          const currentTabId = tabs[0].id;
          console.log('[GDVerse] Current tab ID:', currentTabId, 'URL:', tabs[0].url);

          // Clean up any existing debugger attachments
          const cleanupSuccess = await cleanupDebuggerAttachments(currentTabId);
          if (!cleanupSuccess) {
            console.warn('[GDVerse] Could not clean up debugger attachments, proceeding with caution');
          }

          // Ensure content script is loaded before proceeding
          const isContentScriptLoaded = await ensureContentScriptLoaded(currentTabId);
          if (!isContentScriptLoaded) {
            throw new Error('Content script failed to load');
          }

          // Add retry mechanism for sending messages
          const sendMessageWithRetry = async (message, maxRetries = 3) => {
            for (let i = 0; i < maxRetries; i++) {
              try {
                return await chrome.tabs.sendMessage(currentTabId, message);
              } catch (error) {
                if (i === maxRetries - 1) throw error;
                console.log(`[GDVerse] Retry ${i + 1} for sending message...`);
                await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retry
                // Try to reload content script before retry
                await ensureContentScriptLoaded(currentTabId);
              }
            }
          };

          // Wait for page to load after parent link click
          console.log("[GDVerse] Waiting for page to load after parent link click...");
          await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds

          // Step 1: Click parent link
          await updateSidePanelStatus(`Navigating to ${node_info.parent_node_text}...`, 'info');
          const parentResponse = await sendMessageWithRetry({
            action: 'clickParentLink',
            parentText: node_info.parent_node_text
          });
          
          if (!parentResponse || !parentResponse.success) {
            throw new Error('Failed to click parent link');
          }

          // Wait for page to load after parent link click
          console.log("[GDVerse] Waiting for page to load after parent link click...");
          await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
          
          // Step 2: Click action button
          await updateSidePanelStatus(`Clicking ${node_info.parent_action_text}...`, 'info');
          const actionResponse = await sendMessageWithRetry({
            action: 'clickActionButton',
            actionButtonText: node_info.parent_action_text
          });
          
          if (!actionResponse || !actionResponse.success) {
            throw new Error('Failed to click action button');
          }

          // Wait for action button click to complete
          await updateSidePanelStatus('Waiting for action button click to complete...', 'info');
          
          //get all forms on the page and fill one by one and 
          // then we ask user to validate the forms before moving to next data page
          const page_context = node_info.context;
          const forms = node_info.forms;
          await updateSidePanelStatus(`Found ${forms.length} forms to process...`, 'info');

          for (const form of forms) {
            const form_structure = form.structure;
            const form_name_text = form.name;
            let llm_filled_form;

            await updateSidePanelStatus(`Starting to process form: ${form_name_text}...`, 'info');

            // Switch to the correct tab first
            await updateSidePanelStatus(`Switching to tab: ${form_name_text}...`, 'info');
            try {
              const response = await sendMessageWithRetry({
                action: 'switchTab',
                tabText: form_name_text
              });
              if (!response.success) {
                throw new Error(`Failed to switch to tab:${form_name_text}`);
              }
              await updateSidePanelStatus(`Successfully switched to tab: ${form_name_text}`, 'success');
            } catch (error) {
              console.error("[GDVerse] Error during tab switch:", error);
              throw error;
            }

            // Wait for tab switch to complete
            await new Promise(resolve => setTimeout(resolve, 1000));
            await updateSidePanelStatus('Reading current form data...', 'info');

            const actionResponse = await sendMessageWithRetry({
              action: 'readForm',
              formData: form_structure
            });
            
            if (!actionResponse || !actionResponse.success) {
              throw new Error('Failed to read form data');
            }

            await updateSidePanelStatus('Successfully read current form data', 'success');
            const current_form_data = actionResponse.formData;

            //llm request to update the form 
            await updateSidePanelStatus(`Getting AI suggestions for ${form_name_text}...`, 'info');
            llm_filled_form = await get_update_form_from_llm(page_context, form_structure, current_form_data)
            await updateSidePanelStatus(`Successfully received AI suggestions`, 'success');
          
            //call formFill in content.js
            await updateSidePanelStatus(`Filling form: ${form_name_text}...`, 'info');
            const fillFormResponse = await sendMessageWithRetry({
              action: 'fillForm',
              formData: llm_filled_form
            });
            
            if (!fillFormResponse || !fillFormResponse.success) {
              throw new Error('Failed to fill form');
            }

            await updateSidePanelStatus(`Successfully filled form: ${form_name_text}`, 'success');
            await updateSidePanelStatus('Waiting for form to update...', 'info');
            await new Promise(resolve => setTimeout(resolve, 2000));
          }

          //wait for user to confirm to next page 
          await updateSidePanelStatus('Please review all filled forms on this page', 'info');
          await chrome.runtime.sendMessage({
            action: 'showFormConfirmation',
            message: 'Please review all filled forms on this page. Click continue when ready to proceed.'
          });

          // Wait for user confirmation
          const confirmationPromise = new Promise((resolve) => {
            chrome.runtime.onMessage.addListener(function listener(message) {
              if (message.action === 'formConfirmationReceived') {
                chrome.runtime.onMessage.removeListener(listener);
                resolve();
              }
            });
          });

          await confirmationPromise;
          await updateSidePanelStatus('Moving to next page...', 'info');
          console.log("[GDVerse] User confirmed forms, proceeding to next page...");

          // Get current tab ID again before cleanup
          const currentTabs = await chrome.tabs.query({ active: true, currentWindow: true });
          if (currentTabs && currentTabs.length > 0) {
            await cleanupDebuggerAttachments(currentTabs[0].id);
          }

        } catch (error) {
          console.error("[GDVerse] Error sending message to content script:", error);
          await updateSidePanelStatus(`Error: ${error.message}`, 'error');
          // Get current tab ID for cleanup
          const currentTabs = await chrome.tabs.query({ active: true, currentWindow: true });
          if (currentTabs && currentTabs.length > 0) {
            await cleanupDebuggerAttachments(currentTabs[0].id);
          }
        }
      }
      
      await updateSidePanelStatus('All pages processed successfully!', 'success');
      console.log('[GDVerse] processMeetingNotes function completed');
    } catch (error) {
      console.error('[GDVerse] Error in processMeetingNotes:', error);
      await updateSidePanelStatus(`Error: ${error.message}`, 'error');
      // Get current tab ID for final cleanup
      const currentTabs = await chrome.tabs.query({ active: true, currentWindow: true });
      if (currentTabs && currentTabs.length > 0) {
        try {
          await cleanupDebuggerAttachments(currentTabs[0].id);
        } catch (cleanupError) {
          console.error('[GDVerse] Error during final cleanup:', cleanupError);
        }
      }
    }
  }

    // Add this function before processMeetingNotes
    async function ensureContentScriptLoaded(tabId) {
        try {
          // Try to ping the content script
          const response = await chrome.tabs.sendMessage(tabId, { action: 'ping' });
          return response && response.loaded;
        } catch (error) {
          console.log('[GDVerse] Content script not loaded, attempting to inject...');
          
          // Inject the content script
          try {
            await chrome.scripting.executeScript({
              target: { tabId: tabId },
              files: ['content.js']
            });
            
            // Wait a bit for the script to initialize
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Try pinging again
            const retryResponse = await chrome.tabs.sendMessage(tabId, { action: 'ping' });
            return retryResponse && retryResponse.loaded;
          } catch (injectError) {
            console.error('[GDVerse] Failed to inject content script:', injectError);
            return false;
          }
        }
      }

  // Export the function
  export { processMeetingNotes };

// Handle CDP clicks
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'cdpClick') {
    console.log("[GDVerse] Background: Handling CDP click at coordinates:", request.coordinates);
    
    const performCdpClick = async () => {
      try {
        // Try to attach debugger once
        const debuggerAttached = await ensureDebuggerAttached(sender.tab.id);
        if (!debuggerAttached) {
          throw new Error('Failed to attach debugger');
        }
        
        // Move mouse to position
        await chrome.debugger.sendCommand({tabId: sender.tab.id}, "Input.dispatchMouseEvent", {
          type: "mouseMoved",
          x: request.coordinates.x,
          y: request.coordinates.y
        });

        // Press mouse button
        await chrome.debugger.sendCommand({tabId: sender.tab.id}, "Input.dispatchMouseEvent", {
          type: "mousePressed",
          x: request.coordinates.x,
          y: request.coordinates.y,
          button: "left",
          clickCount: 1
        });
        
        // Release mouse button
        await chrome.debugger.sendCommand({tabId: sender.tab.id}, "Input.dispatchMouseEvent", {
          type: "mouseReleased",
          x: request.coordinates.x,
          y: request.coordinates.y,
          button: "left",
          clickCount: 1
        });

        // Clean up debugger
        await cleanupDebuggerAttachments(sender.tab.id);
        return true;
      } catch (error) {
        console.error("[GDVerse] Background: Debugger error:", error);
        // Try to clean up debugger on error
        await cleanupDebuggerAttachments(sender.tab.id);
        throw error;
      }
    };

    // Execute the click and send response
    performCdpClick()
      .then(success => {
        if (success) {
          sendResponse({ success: true });
        } else {
          sendResponse({ success: false, error: "Failed to perform CDP click" });
        }
      })
      .catch(error => {
        sendResponse({ success: false, error: error.message });
      });

    return true; // Keep the message channel open for async response
  }
});

// Handle debugger errors
chrome.debugger.onDetach.addListener((source, reason) => {
  console.log("[GDVerse] Background: Debugger detached:", reason);
});

chrome.debugger.onEvent.addListener((source, method, params) => {
  if (method === "Debugger.paused") {
    console.log("[GDVerse] Background: Debugger paused:", params);
  }
});

const prepare_update_form_prompt = (page_context, form_structure, current_form_data) => {
  const prompt = `
You are an AI assistant tasked with analyzing and updating form data. Your goal is to understand the form structure and provide appropriate values for each field.

Given the following information:
1. Page Context: ${page_context}
2. Form Structure: ${JSON.stringify(form_structure)}
3. Current Form Data: ${JSON.stringify(current_form_data)}

Please analyze the form and provide a detailed response that includes:
1. Form context and purpose
2. Field-by-field analysis
3. Suggested values for each field
4. Any validation rules or constraints to consider

Return your response in the following JSON format:
{
  "form_analysis": {
    "purpose": "string describing the form's purpose",
    "context": "string providing additional context about the form"
  },
  "field_updates": [
    {
      "field_id": "string identifying the field",
      "field_name": "string name of the field",
      "current_value": "current value in the field",
      "suggested_value": "suggested value for the field",
      "reasoning": "string explaining why this value was chosen",
      "validation": {
        "required": boolean,
        "format": "string describing expected format",
        "constraints": ["array of specific constraints"]
      }
    }
  ],
  "additional_notes": "string with any additional observations or recommendations"
}

Return only the JSON object as your answer.
`;
  return prompt;
};

const get_update_form_from_llm = async (page_context, form_structure, current_form_data) => {
  const prompt = prepare_update_form_prompt(page_context, form_structure, current_form_data);
  const response = await call_llm("pp-n8n-prompt-7bc8be", prompt);
  const result = parse_llm_response(response);
  console.log("[GDVerse] Form update LLM result:", result);
  const llm_filled_form = create_llm_filled_form(form_structure, result);
  return llm_filled_form;
};

const create_llm_filled_form = (form_structure, llm_form_json) => {
  // Create a deep copy of the form structure
  const filled_form = JSON.parse(JSON.stringify(form_structure));
  
  // If llm_form_json is invalid, return the original form structure
  if (!llm_form_json || !llm_form_json.field_updates) {
    console.warn("[GDVerse] Invalid LLM form JSON, returning original form structure");
    return filled_form;
  }

  // Create a map of field updates for quick lookup
  const field_updates_map = new Map(
    llm_form_json.field_updates.map(update => [update.field_id, update])
  );

  // Update main form elements
  if (filled_form.elements) {
    filled_form.elements = filled_form.elements.map(element => {
      const update = field_updates_map.get(element.element_id);
      if (update) {
        // Update the element with the suggested value
        return {
          ...element,
          value: update.suggested_value
        };
      }
      return element;
    });
  }

  // Update conditional sections if they exist
  if (filled_form.conditional_sections) {
    filled_form.conditional_sections = filled_form.conditional_sections.map(section => {
      if (section.elements) {
        section.elements = section.elements.map(element => {
          const update = field_updates_map.get(element.element_id);
          if (update) {
            // Update the element with the suggested value
            return {
              ...element,
              value: update.suggested_value
            };
          }
          return element;
        });
      }
      return section;
    });
  }

  // Add the LLM analysis as metadata
  filled_form.llm_analysis = {
    purpose: llm_form_json.form_analysis?.purpose,
    context: llm_form_json.form_analysis?.context,
    additional_notes: llm_form_json.additional_notes
  };

  console.log("[GDVerse] Created filled form:", filled_form);
  return filled_form;
};

