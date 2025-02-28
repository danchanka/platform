---
title: 'EVAL operator'
---

The `EVAL` operator: creating an [action](Actions.md) that [executes code](Eval_EVAL.md) in the **lsFusion** language.

### Syntax

    EVAL [ACTION] expression [PARAMS paramExpr1, ..., paramExprN]

### Description

The `EVAL` operator is designed to execute program code while the server is running. The operator takes as its argument a string containing source code. This string can be a simple string [constant](Constant.md) or a more complex [expression](Expression.md) that evaluates to a string.

The code that is passed should consist of a sequence of [statements](Statements.md) (or [action operators](Action_operators_paradigm.md) and local property declarations, if the `ACTION` option is specified). When the action is executed, this code is inserted into a [module](Modules.md) with a unique name. The module header is generated by the system: it declares a unique name for the module and lists all the modules that are in the project in the [`REQUIRE` statement](Module_header.md). Thus, you can use all [elements](Element_identification.md) from other modules in the code passed in the `EVAL` operator. If the `ACTION` option is not specified, it is assumed that one of the passed statements will be the creation of action with the name `run` (it is this action that will be executed).

### Parameters

- `expression`

    An [expression](Expression.md) whose value is the string to be executed.

- `ACTION`

    Keyword.

- `paramExpr1, ..., paramExprN`

    A list of expressions whose values will be passed to the action being executed as arguments. The number of expressions must be equal to the number of parameters of the action being executed.

### Examples

```lsf
addProperty  { EVAL ACTION 'MESSAGE \'Hello World\''; }  // source code consisting of one statement is specified with a string constant

code 'Source code' = DATA BPSTRING[2000] ();              // a property to which the user can enter the source code
execute 'Execute code'  { EVAL code(); }      // the action executing this code
```
