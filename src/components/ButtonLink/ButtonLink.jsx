import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ to, children }) => <Link to={to}>{children}</Link>;

export default ButtonLink;
