import random

def get_computer_choice():
    return random.choice(['rock', 'paper', 'scissors'])

def determine_winner(user, computer):
    if user == computer:
        return 'tie'
    if ((user == 'rock' and computer == 'scissors') or
        (user == 'paper' and computer == 'rock') or
        (user == 'scissors' and computer == 'paper')):
        return 'win'
    return 'lose'

def main():
    user_score = 0
    computer_score = 0
    round_num = 1

    while True:
        print(f"\nRound {round_num}:")
        user = input("Enter your choice (rock, paper, scissors or quit): ").strip().lower()
        if user == 'quit':
            print("Game over. Thanks for playing!")
            break
        if user not in ['rock', 'paper', 'scissors']:
            print("Invalid input. Try again.")
            continue

        computer = get_computer_choice()
        print(f"Computer chose: {computer}")

        result = determine_winner(user, computer)
        if result == 'win':
            print("You win! 🎉")
            user_score += 1
        elif result == 'lose':
            print("You lose! 😢")
            computer_score += 1
        else:
            print("It's a tie! 🤝")

        print(f"Score: You {user_score} - Computer {computer_score}")
        round_num += 1

if __name__ == "__main__":
    main()
