#!/bin/bash
#! Question 2.2 Passowrd Checker
VALID_PASSWORD=password123

echo "Enter a password"
read USER_INPUT

if [ "$USER_INPUT" == "$VALID_PASSWORD" ]; then
	echo "You have Access"
else
	echo "Access Denied"
fi
