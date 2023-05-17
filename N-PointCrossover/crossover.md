# DATE

5/17/23

# Difficulty

6kyu

My thoughts:

-

## [N-Point Crossover](Phttps://www.codewars.com/kata/57339a5226196a7f90001bcf/train/python)

### Problem

In genetic algorithms, a crossover allows 2 chromosomes to exchange part of their genes.

For more details, you can visit these wikipedia links : Genetic algorithm and Crossover.

A chromosome is represented by a list of genes.
Consider for instance 2 chromosomes xs (with genes [x,x,x,x,x,x]) and ys (with genes [y,y,y,y,y,y])

A single-point crossover at index 2 would give :

```python
new chromosome1 = [x,x,y,y,y,y] and new chromosome2 = [y,y,x,x,x,x]
```

A two-point crossover at indices 1 and 3 would give :

```python
new chromosome1 = [x,y,y,x,x,x] and new chromosome2 = [y,x,x,y,y,y]
```

### Preliminary Solution

-   **Time Complexity**: O(TIME)
-   **Space Complexity**: O(SPACE)

#### Problem Broken Down

We will have two lists: xs & ys
We will also be given a list: ns

So if ns = [2]
We would swap everything from xs[1:] with everything from ys[1:]

If we had ns = [2,4]
We would swap everything from xs[2:4] with everything from ys[2:4]

Numbers in ns cannot be repeated
If ns = [2,3,4,3], we would use it as [2,3,4]

We return xs & ys

#### Solution Code

```
SOLUTION CODE GOES HERE
```

#### Notes

-   Anything additional goes here in bullets

### [Best Available Solution](SOLUTION_LINK)

-   **Time Complexity**: O(TIME)
-   **Space Complexity**: O(SPACE)

#### Solution Code

```
SOLUTION CODE GOES HERE
```

#### Notes

-   Anything additional goes here in bullets
