# ReactSkillSet

![Logo](https://raw.githubusercontent.com/Jac21/SkillSet/master/assets/img/SkillSet.PNG)

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

Intuitive job-candidate skill visualization, taking advantage of [D3.js](http://d3js.org/) and [JSONResume](https://jsonresume.org/) and [React](https://reactjs.org/) too !

**REACT WRAPPER & PACKAGE MADE BY [Romain OLIVIER](https://github.com/romain325)**

Live site:
>- https://jac21.github.io/SkillSet/

Live demo:  
>- https://jac21.github.io/viz.html


## Installing

`npm i react-skillset`

## Usage

You'll first need to generate the csv file for your data.
I redirect you to the authors page:  
>- https://jac21.github.io/SkillSet/

In your React App, do like so:
**!!!THE CSV FILE IS MANDATORY!!!**

```js
import React from "react";
import SkillSet from "react-skillset";
import CsvFile from 'LINK-TO-MY-CSV-FILE.csv';

const Profile = () => {

  return (
    <div>
        <SkillSet  
            csv={CsvFile}  
        />
    </div>
  );
};

export default Profile;
```

## Other Options  

The currently supported option for the SkillSet are:
    - The Width
    - The Height
    - The Nodes' Color (default is schemeCategory10)

The colors are limited and are from the [d3 set](https://github.com/d3/d3-scale-chromatic#categorical), Use any of the "Categorical" by entering their name without "scheme".

```js
        <SkillSet  
            csv={CsvFile}
            width={1000}
            height={1000}
            color={"Paired"}  
        />
```

React Wrapper for Jac21's SkillSet (https://github.com/Jac21/SkillSet)
