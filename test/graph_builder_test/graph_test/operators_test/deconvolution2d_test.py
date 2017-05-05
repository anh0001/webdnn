from collections import Iterable
from typing import Dict

from graph_builder.graph.axis import Axis
from graph_builder.graph.operators.deconvolution2d import Deconvolution2D
from graph_builder.graph.variable import Variable
from graph_builder.graph.variables.attributes.order import OrderNHWC, OrderNCHW, OrderCHWN, OrderHWCN, OrderHWNC, OrderCNHW


def _convert_to_list(x):
    return x if isinstance(x, Iterable) else (x, x)


# FIXME 各orderをテストにわけられないか
def main(k, s, p, n, h1, w1, c1, c2, expected_shape_dict: Dict[Axis, int]):
    for order_x in [OrderNHWC,
                    OrderHWNC,
                    OrderHWCN,
                    OrderNCHW,
                    OrderCNHW,
                    OrderCHWN]:
        for order_w in [OrderNHWC,
                        OrderHWNC,
                        OrderHWCN,
                        OrderNCHW,
                        OrderCNHW,
                        OrderCHWN]:

            k = _convert_to_list(k)

            op = Deconvolution2D("deconv", parameters={
                "ksize": k,
                "stride": _convert_to_list(s),
                "padding": _convert_to_list(p)
            })

            x = Variable((n, h1, w1, c1), OrderNHWC)
            x.change_axis_order(order_x)

            w = Variable((c1, k[0], k[1], c2), OrderCHWN)
            w.change_axis_order(order_w)

            y, = op(x, w)

            for axis in y.axis_order.axes:
                assert y.shape_dict[axis] == expected_shape_dict[axis]


def test_normal():
    main(3, 1, 1, 2, 3, 4, 6, 5, {
        Axis.N: 2,
        Axis.H: 3,
        Axis.W: 4,
        Axis.C: 5,
    })


def test_large_stride():
    main(3, 2, 1, 2, 3, 4, 6, 3, {
        Axis.N: 2,
        Axis.H: 5,
        Axis.W: 7,
        Axis.C: 3,
    })


def test_no_padding():
    main(3, 1, 0, 2, 3, 5, 6, 3, {
        Axis.N: 2,
        Axis.H: 5,
        Axis.W: 7,
        Axis.C: 3,
    })


def test_projection():
    main(1, 1, 0, 2, 5, 7, 6, 3, {
        Axis.N: 2,
        Axis.H: 5,
        Axis.W: 7,
        Axis.C: 3,
    })


def test_fully_connected():
    main((5, 7), 1, 0, 2, 1, 1, 6, 3, {
        Axis.N: 2,
        Axis.H: 5,
        Axis.W: 7,
        Axis.C: 3,
    })