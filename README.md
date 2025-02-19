# Instructions

A **Web API** allows our applications to communicate - **request** resources and **receive** responses - over the internet. 

**For your end of module assessment, you will be writing your own methods for interacting with a Web API.**

This Web API will serve a **JSON** database containing a list of **users**. Each user will have an associated **id** number, a **First Name**, a **Last Name**, and an **email** address. You will **teach yourself** how to interact with an **npm** module named `json-server`.


## Tasks

1. Create and export a method to **return** the **URL** of the server from the SD-12-1: AssessmentServer-Individual project.
    * The `getServerURL()` method should **return** the URL of your running JSON server.

2. Create and export a method to **print** a list of **users** from the JSON server.
    * The `listUsers()` method should simply print the **entire** JSON response, containing the list of **users**, to the console.

3. Create and export a method to **add** a new user to the JSON server.
    * The `addUser()` method should:
      * Take **3** inputs as follows: `addUser(<first_name>, <last_name>, <email>)`
      * Result in a complete new user being added to the JSON server with a **new, sequential, unique id number**.
        * For example: if the highest id number in the existing list is `4`, then this new id number should be `5`.

4. Create and export a method to **delete** a user from the JSON server.
    * The `delUser()` method should:
      * Take an **id** number as input as follows: `delUser(<id>)`
      * Result in the user matching that **id** number being deleted from the JSON server.