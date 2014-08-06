package lsfusion.server.logics.property;

import lsfusion.server.data.where.classes.ClassWhere;
import lsfusion.server.logics.property.infer.InferType;

public interface AlgType {

    <P extends PropertyInterface> ClassWhere<Object> getClassValueWhere(CalcProperty<P> property);
    
    AlgInfoType getAlgInfo();

    public final static boolean useInfer = true;
    public final static boolean useInferForInfo = true;
    public final static boolean checkInfer = false;
    public final static boolean useClassInfer = useInfer;
    public final static AlgInfoType defaultType = useInfer ? InferType.PREVBASE : CalcClassType.PREVBASE;
    public final static AlgInfoType caseIntersectType = defaultType; // вопрос, так как возможно нужна сильнее логика разгребать
    public final static AlgInfoType checkType = defaultType;
    public final static AlgInfoType hintType = CalcType.EXPR.getAlgInfo();
    public final static AlgInfoType drillType = defaultType;
    public final static AlgInfoType syncType = defaultType; // тоже желательно совпадать с настройкой для classValueWhere
    public final static AlgInfoType actionType = defaultType; // компиляция действий assign и for

}
