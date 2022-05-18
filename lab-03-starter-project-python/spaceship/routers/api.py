from fastapi import APIRouter
import numpy as numPy

router = APIRouter()


@router.get('')
def hello_world() -> dict:
    return {'msg': 'Hello, World!'}

@router.get('/matrix')
def getMatrix():
    matrix1 = numPy.random.rand(10,10)
    matrix2 = numPy.random.rand(10,10)
    product = numPy.matmul(matrix1, matrix2)

    return {
        'matrix1': matrix1.tolist(),
        'matrix2': matrix2.tolist(),
        'product': product.tolist()
    }