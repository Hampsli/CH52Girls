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
        '1',
        '124'
    ]

    # Outputs
    output_array = [
        '128.24'
    ]

    prepare_and_assert(input_array, output_array)

# Test 2
def test_task_two():
    # Inputs
    input_array = [
        '2',
        'Karim',
        'Uli',
        'Georgina'
    ]

    # Outputs
    output_array = [
        "FriendNames { name1: 'Karim', name2: 'Uli', name3: 'Georgina' }"
    ]

    prepare_and_assert(input_array, output_array)

# Test 3
def test_task_three():
    # Inputs
    input_array = [
        '3',
        '2001',
        '12',
        '25'
    ]

    # Outputs
    output_array = [
        'Successful'
    ]

    prepare_and_assert(input_array, output_array)

# Test 4
def test_task_four():
    # Inputs
    input_array = [
        '4',
        'Kimi',
        '1998',
        '11',
        '5'
    ]

    # Outputs
    output_array = [
        'Successful'
    ]

    prepare_and_assert(input_array, output_array)

# Test 5
def test_task_five_pass():
    # Inputs
    input_array = [
        '5',
        '6'
    ]

    # Outputs
    output_array = [
        'Pass'
    ]

    prepare_and_assert(input_array, output_array)

# Test 6
def test_task_five_fail():
    # Inputs
    input_array = [
        '5',
        '4'
    ]

    # Outputs
    output_array = [
        'Fail'
    ]

    prepare_and_assert(input_array, output_array)

# Test 7
def test_task_six_excellent():
    # Inputs
    input_array = [
        '6',
        '9'
    ]

    # Outputs
    output_array = [
        'Excellent'
    ]

    prepare_and_assert(input_array, output_array)

# Test 8
def test_task_six_not_excellent():
    # Inputs
    input_array = [
        '6',
        '8'
    ]

    # Outputs
    output_array = [
        'Pass'
    ]

    prepare_and_assert(input_array, output_array)

# Test 9
def test_task_seven_perfect():
    # Inputs
    input_array = [
        '7',
        '11'
    ]

    # Outputs
    output_array = [
        'Perfect'
    ]

    prepare_and_assert(input_array, output_array)

# Test 10
def test_task_seven_not_perfect():
    # Inputs
    input_array = [
        '7',
        '5'
    ]

    # Outputs
    output_array = [
        'Pass'
    ]

    prepare_and_assert(input_array, output_array)
