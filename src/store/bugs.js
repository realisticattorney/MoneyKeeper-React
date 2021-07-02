//Action Types
const BUG_ADDED = 'bugAdded';
const BUG_REMOVED = 'bugRemoved';
const BUG_RESOLVED = 'bugResolved';

//Actions

export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: {
    description: 'Bug number oneee',
  },
});

export const bugResolved = (id) => ({
  type: BUG_RESOLVED,
  payload: {
    id,
  },
});

//Reducer

let lastId = 0;

export default function reducer(state = [], action) { //state in case of being empty, it wont be undefined  
   if (action.type === BUG_ADDED) {
      return [
         ...state,
         {
            id:++lastId,
            description: action.payload.description,
            resolved: false
         }
      ]
   }
   if (action.type === BUG_REMOVED) {
   return state.filter(bug => bug.id !== action.payload.id);
   }
   if (action.type === BUG_RESOLVED) {
      return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true});
      }
   else {
      return state;
   }
}