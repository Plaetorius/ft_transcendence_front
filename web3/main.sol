// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    // State variable to store a string
    string public greeting = "Hello, World!";

    // Function to retrieve the greeting
    function getGreeting() public view returns (string memory) {
        return greeting;
    }

    // Function to change the greeting
    function setGreeting(string memory _newGreeting) public {
        greeting = _newGreeting;
    }
}
