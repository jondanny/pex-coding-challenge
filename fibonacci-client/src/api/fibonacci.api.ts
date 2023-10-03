import network from "../utils/network";

export const getCurrent = async () => {
  try {
    const response = await network.get({
      path: `/current`,
    });

    return response.data.value;
  } catch (error) {
    throw error;
  }
};

export const getPrevious = async () => {
  try {
    const response = await network.get({
      path: `/previous`,
    });

    return response.data.value;
  } catch (error) {
    throw error;
  }
};

export const getNext = async () => {
  try {
    const response = await network.get({
      path: `/next`,
    });

    return response.data.value;
  } catch (error) {
    throw error;
  }
};
