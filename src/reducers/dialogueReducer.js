import actionStrings from '../actions/actionStrings.json';
import GetDialogue from '../network services/DialogueService.js';

const dialogueActions = actionStrings.dialogueActions;

const dialogueReducer = (state = null, action) => {
    switch (action.type) {
        case dialogueActions.get:
            const dialogue = GetDialogue(action.id);
            
            if (dialogue === undefined) {
                return state
            } else {
                return dialogue
            }
        default:
            return state;
    }
}

export default dialogueReducer;