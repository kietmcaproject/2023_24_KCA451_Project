import random, string

# Create a random character mapping for digits 0-9
char_set = string.ascii_letters + string.digits + string.punctuation

# Ensure mapping is consistent by using a fixed seed for random
random.seed(42)
mapping = {str(i): random.choice(char_set) for i in range(10)}
reverse_mapping = {v: k for k, v in mapping.items()}

def encode_msg(number):
    """Encode a number to a random character string based on the predefined mapping."""
    number_str = str(number)
    encoded_str = ''.join(mapping[digit] for digit in number_str)
    return encoded_str

def decode_msg(encoded_str):
    """Decode a string back to the original number based on the predefined reverse mapping."""
    decoded_number = ''.join(reverse_mapping[char] for char in encoded_str)
    return int(decoded_number)



