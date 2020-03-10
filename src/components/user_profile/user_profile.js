import React from "react";
import { Card } from 'react-bootstrap';
import avatar from '../../images/avatar.png';

const UserProfile = () => (
  <Card className="text-center py-4 mb-5">
    <img src={avatar} className="circle responsive-img w-50 m-auto"  alt="Imagem de perfil" />
    <h5>Lorem Ipsum</h5>
    <p className="grey darken-2 white-text">Ruby Developer</p>
  </Card>
);

export default UserProfile;