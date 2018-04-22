## Connect Four
> Classic game implemented with react/redux and a node server.

## Video Sample

[[<img src="images/four.png" width:"200" height:"200">]](https://www.youtube.com/watch?v=fNkz_jUvDYA&feature=youtu.be)
## Usage

Clone repo:
```
git clone https://github.com/borerjason/connect-four.git  
```

cd into directory & install dependencies:
```
npm install
```

Start server:
```
npm start
```

Navigate to:
```
localhost:3000
```

## Main Technologies
  - react  
  - redux  
  - styled-components  
  - node/express

## App Design:

1. App
    Summary: Renders header and board on start. 
2. Header
  - Summary: Renders who's turn it is, who the winner is, OR if want to start new game
  - State:
    - who's turn (number and color)
    - isWinner?
    - activeGame? (or should is winner be fine)
3. Board
   Summary: Renders slots      
4. Slot
   Summary: Displays color or play 
   - State
     Who's turn (determine what color to play)
   - Methods
     - Validate move
     - Check for winner
     - Update active player
