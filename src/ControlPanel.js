import { useState, useEffect } from 'react';
import { Button, Segment, Dropdown, Menu, Header, Icon, Card } from 'semantic-ui-react'
import useStore from "./Store";
import quakeData from './data/QuakeDB.json'
import QuakeInfoBar from './QuakeInfoBar';
