from collections import defaultdict

class Graph:
	def __init__(self):
	   self.graph = defaultdict(list)
 
	def num_of_nodes(self):
		return len(self.graph)

	def get_all_nodes(self):
		return self.graph.keys()

	def add_edge(self, u, v):
		self.graph[u].append(v)
