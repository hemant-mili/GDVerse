

class Field:
    label: str
    type: str # ["text_input", "selector"]

class SelectorInputField(Field):
    type: str = "selector"
    options : list[str]
    
    def fill(self):
        pass

class TextInputField(Field):
    type: str = "text_input"
    def fill(self): 
        pass

class Form:
    name: str
    fields: list[Field]

    def save(self, fields):
        self.fields = fields

class LeafNode:
    name: str
    forms: list[Form]
    node_chain: list[str]

    __form_map = map[str: Form]

    def __create__():
        #use parent Node to crefernce to create this leaf node
        update_leaf_node()

    def update_leaf_node():
        for form in self.forms:
            fill_form_with_llm()

    def __get_form(self, form_identifier):
        return self.__form_map[form_identifier]

    def edit(self, form_identifier, fields):
        self.__get_form(form_identifier).update(fields)


class ArrayNode:
    name: str
    leaf_nodes: list[LeafNode]
    def create(self, leaf_identified):
        return LeafNode
        

class ParentNode:
    name: str
    leaf_nodes: list[LeafNode]
    array_nodes: list[ArrayNode]
    actions: list[Action]


class NavigationTree:
    parent_nodes: list[ParentNode]


leaf_node_dict = dict{LeafNode}

class FormAction:
    leaf_node: LeafNode # ForeignKey 
    form: Form #Actual Form
    updated_fields: list[Field] 


# class Action:
#     parent_node: ParentNode
#     leaf_node: LeafNode # can be null
#     form_actions: list[FormAction]

#     def apply(self):
#         if not self.leaf_node:
#             self.leaf_node = LeafNode()
#             self.parent_node.add_leaf_node(self.leaf_node)
#         self.leaf_node.update(self.form_actions)
    

tree = NavigationTree(
    [
        ParentNode(
            "Family Information",
            [
                LeafNode(
                    "Client & Spouse",

                )
            ]
        )
    ]
)

class EMoneyClient:
    navigation_tree: NavigationTree
    emoney_client_id: str
    action_dict: dict

    mili_client_id: Optional[int]
    latest_meeting_note: str

    def init():
        pass

    def get_client_meeting(emoney_client_id):
        return latest_meeting_note
    
    def get_action_names(action_dict):
        return action_names
    
    def get_actions_from_llm(latest_meeting_note, navigation_tree):
        return {
            create_leaf_node_list: list [actions],
            update_leaf_node_list: list[LeafNode]
        }
                    
    def update_crm(latest_meeting_note, navigation_tree, action_dict):
        action_names = get_action_names(action_dict)
        create_leaf_node_list, update_leaf_node_list = get_actions_from_llm(latest_meeting_note, navigation_tree, action_names)

        #execute actions 
        for leaf_node in create_leaf_node_list:
            leaf_node.create(latest_meeting_note)
            
        for leaf_node in update_leaf_node_list:
            leaf_node.update(latest_meeting_note)

            


        

