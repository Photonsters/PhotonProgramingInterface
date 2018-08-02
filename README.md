# PhotonProgramingInterface

API protocol that defines a standard for sharing and manipulating photon file data
The PPI is a attempt to make a standart common photon data interface between any language apps.

This standart Proposal come from a group talk with the following photonsters: @Bonosoft @NardJ @Antharon and @X3msnake

The standart will define the type of transfer file and focus on the intended output as well as provide sippets on various languages to help devs implement read and write to the format. These snippets will be written including but not limited to Java/ Javascript/ Python

----
## BASIC FORMAT

- Filebased RLE Encoded Temp File
- JSON info

### OUTPUT MESSAGES

the output are transfered how?

**Bo**

Standard out or a progress log file...

**Ivan**

Not sure about python, but usually if you create some process you can listen to its standard output, we should create some rules for how should this output be tagged
I think of four kinds of messages

- Info
- Warning
- Error
- Progress
 
----
