const Redux = require('redux');

// People dropping off a form === Action Creator
const createPolicy = (name, amount) => {
  return { // Action 
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount 
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload:{
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  }
}

// Reducers (Departments)
// 처음 들어올 것을 방지해서 oldListofClaims 를 undefined 로 하면 안되고,
// 빈 배열을 초기화해서 집어넣자.
const claimsHistory = (oldListofClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // we care about this action (FORM!)
    // oldListofClaims.push(action.payload);
    // 이것을 하지 않는 이유는,, 배열이 변하지 않길 원한다...!!!
    // 새로운 배열이 리턴되어야 한다.
    return [...oldListofClaims, action.payload];
  }

  // we don't care the action (FORM!)
  return oldListofClaims;
}


// bagOfMoney 도,, 처음 null 을 방지하기 위해서 100 으로 초기화해서 넘겨준다.
const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  }

  if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }

  return bagOfMoney;
};


const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } // DO NOT MODIFY the original array..!

  if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter((name) => name !== action.payload.name);
  } // filter 함수 사용하면 new array 가 나온다는 것..!

  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

// 리듀서를 조합하고
// 각각의 리듀서가 리턴하는 데이터가 스토어의 state 변수에 매칭된다.
const ourDepartments = combineReducers({
  // match reducers..
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

// 스토어에.. 저장
const store = createStore(ourDepartments);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));
console.log(store.getState());

store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Jim', 50));

store.dispatch(deletePolicy('Bob'));

console.log(store.getState());



