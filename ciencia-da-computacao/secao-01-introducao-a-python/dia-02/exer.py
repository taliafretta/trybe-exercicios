def vertical_inverted_ladder(word):
    for removed_leters in range(len(word)):
        for index in range(len(word) - removed_leters):
            print(word[index], end='')
        print()

if __name__ == '__main__':
    word = input('Enter a word: ')
    vertical_inverted_ladder(word)