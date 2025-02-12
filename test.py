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
        "Player { name: 'Grog' }"
    ]

    prepare_and_assert(input_array, output_array)

# Test 2
def test_task_two():
    # Inputs
    input_array = [
        '2'
    ]

    # Outputs
    output_array = [
        "Player { name: 'Grog', level: 4 }"
    ]

    prepare_and_assert(input_array, output_array)

# Test 3
def test_task_three():
    # Inputs
    input_array = [
        '3'
    ]

    # Outputs
    output_array = [
        'Grog has reached Level 4!'
    ]

    prepare_and_assert(input_array, output_array)

# Test 4
def test_task_four():
    # Inputs
    input_array = [
        '4'
    ]

    # Outputs
    output_array = [
        'Grog has reached Level 4!',
        'Grog has reached Level 5!'
    ]

    prepare_and_assert(input_array, output_array)
