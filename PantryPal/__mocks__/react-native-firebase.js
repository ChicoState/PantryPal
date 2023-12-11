// __mocks__/react-native-firebase.js

const firestoreMock = {
  // Dummy implementation for collection function
  collection: (name) => {
    return {
      // Dummy implementation for doc function
      doc: (id) => {
        return {
          // Dummy implementation for set function
          set: (data) => Promise.resolve(),
          // Dummy implementation for delete function
          delete: () => Promise.resolve(),
          // Dummy implementation for update function
          update: (data) => Promise.resolve(),
          // Dummy implementation for get function
          get: () => {
            return Promise.resolve({
              exists: true,
              data: () => data,
            });
          },
        };
      },
    };
  },
  // Dummy implementation for runTransaction function
  runTransaction: async (transactionFunction) => {
    await transactionFunction({
      // Dummy implementation for get function inside a transaction
      get: async (docRef) => {
        // Return a dummy snapshot for existing document
        return { exists: true, data: () => ({ /* dummy data */ }) };
      },
      // Dummy implementation for set function inside a transaction
      set: (docRef, data) => Promise.resolve(),
      // Dummy implementation for delete function inside a transaction
      delete: (docRef) => Promise.resolve(),
    });
  },
  // Dummy implementation for get function
  get: async () => ({
    exists: true,
    data: () => ({ /* dummy data */ }),
  }),
};

export default () => ({
  firestore: firestoreMock,
  // Add other properties or methods used in your code
});