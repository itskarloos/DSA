visited = set()
graph = {
    'A': ['B', 'D'],
    'B': ['A', 'C', 'E'],
    'C': ['B'],
    'D': ['A', 'E'],
    'E': ['B', 'D']
}


def dfs(node):
    if node in visited:
        return
    visited.add(node)
    print(node)
    for neighbour in graph[node]:
        return dfs(neighbour)


dfs("A")
