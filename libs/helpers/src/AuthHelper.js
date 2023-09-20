import { authRole } from '@crema/constants/AppConst';

export const getUserFromAuth0 = (user) => {
  if (user)
    return {
      id: 1,
      uid: user.sub,
      displayName: user.name,
      email: user.email,
      photoURL: user.picture,
      role: authRole.User,
    };
  return user;
};

export const getUserFromFirebase = (user) => {
  if (user)
    return {
      id: 1,
      uid: user.uid,
      displayName: user.displayName ? user.displayName : 'Crema User',
      email: user.email,
      photoURL: user.photoURL ? user.photoURL : '/assets/images/avatar/A11.jpg',
      role: authRole.User,
      company: [{
        id: 1,
        name: "Company name 1",
        image_url: "/assets/images/avatar/A1.jpg",
      }, 
      {
        id: 2,
        name: "Company name 2", 
        image_url: "/assets/images/avatar/A2.jpg"
      }, 
      {
        id: 3,
        name: "Company name 3", 
        image_url: "/assets/images/avatar/A3.jpg"
      }]
    };
  return user;
};
export const getUserFromAWS = (user) => {
  if (user)
    return {
      id: 1,
      uid: user.username,
      displayName: user.attributes.name ? user.attributes.name : 'Crema User',
      email: user.attributes.email,
      photoURL: user.photoURL,
      role: authRole.User,
    };
  return user;
};

export const getUserFromJwtAuth = (user) => {
  if (user)
    return {
      id: 1,
      uid: user._id,
      displayName: user.name,
      email: user.email,
      photoURL: user.avatar,
      role: authRole.User,
    };
  return user;
};
