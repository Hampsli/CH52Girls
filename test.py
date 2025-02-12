import subprocess

# Boilerplate function - include this in every test below!
def prepare_and_assert(input_array, output_array):
    # Prepare Variables
    expected_output = '\n'.join(output_array)

    # Get Actual Output 
    output_data = subprocess.run(['node', 'index.js'] + input_array, stdout=subprocess.PIPE)
    output_bytes = output_data.stdout.strip()
    output_string = output_bytes.decode("utf-8")

    # Test if Expected Output is found in Actual Output
    assert expected_output in output_string

# Test 1
def test_task_one():
    # Inputs
    input_array = [
        '1'
    ]

    # Outputs
    output_array = [
        'hello: world'
    ]

    prepare_and_assert(input_array, output_array)

# Test 2
def test_task_two():
    # Inputs
    input_array = [
        '2',
        'tomato',
        'sauce'
    ]

    # Outputs
    output_array = [
        'tomato: sauce'
    ]

    prepare_and_assert(input_array, output_array)

# Test 3
def test_task_three():
    # Inputs
    input_array = [
        '3',
        'pizza',
        'pineapple'
    ]

    # Outputs
    output_array = [
        'pizza: pineapple'
    ]

    prepare_and_assert(input_array, output_array)

# Test 4
def test_task_four():
    # Inputs
    input_array = [
        '4',
        'Queens',
        'Brooklyn'
    ]

    # Outputs
    output_array = [
        'Booking a taxi from Queens to Brooklyn.'
    ]

    prepare_and_assert(input_array, output_array)

# Test 5
def test_task_five():
    # Inputs
    input_array = [
        '5',
        '3',
        'Gigi',
        'Sam',
        'Jack'
    ]

    # Outputs
    output_array = [
        "[ 'Gigi', 'Sami', 'Jack' ]"
    ]

    prepare_and_assert(input_array, output_array)
