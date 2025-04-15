from main import trivia_fetch

# Test 1
def test_trivia_42():
  assert trivia_fetch(42)["number"] == 42

# Test 2
def test_trivia_1000():
  assert trivia_fetch(1000)["number"] == 1000