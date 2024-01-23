# Question : 

Which out of the two components (which are performing the same functionality) is performing better and how?

# Answer : 

The key difference between Pure Components and Simple components is about re-rendering.

Simple components performs unnecessary re-renders which may result in bad performance.
PureComponent automatically handles shallow comparisons in its shouldComponentUpdate method, saving you from writing custom comparison logic.It leads to better performance by reducing unnecessary re-renders when there are no changes in data.

In conclusion, Pure components are better than Simple components as there is no unnecessary re-rendering and better performance optimization.