from graph_builder.frontend.optimize_rules.compose_axiswise_operation import ComposeAxiswiseOperation
from graph_builder.frontend.optimize_rules.compose_elementwise_operation import ComposeElementwiseOperation
from graph_builder.frontend.optimize_rules.remove_last_softmax import RemoveLastSoftmax
from graph_builder.optimizer.optimizer import Optimizer


class GeneralOptimizer(Optimizer):
    def __init__(self):
        super(GeneralOptimizer, self).__init__()

        # self.register_rule(ComposeAxiswiseOperation())
        # self.register_rule(ComposeElementwiseOperation())
        self.register_rule(RemoveLastSoftmax())
