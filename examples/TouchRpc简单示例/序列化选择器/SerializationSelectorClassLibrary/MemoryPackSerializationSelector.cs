﻿using MemoryPack;
using System;
using System.Collections.Generic;
using System.Text;
using TouchSocket.Core;
using TouchSocket.Rpc.TouchRpc;

namespace SerializationSelectorClassLibrary
{
    public class MemoryPackSerializationSelector:DefaultSerializationSelector
    {
        public override byte[] SerializeParameter(SerializationType serializationType, object parameter)
        {
            if ((byte)serializationType == 4)
            {
               return MemoryPackSerializer.Serialize(parameter.GetType(),parameter);
            }
            return base.SerializeParameter(serializationType, parameter);
        }

        public override object DeserializeParameter(SerializationType serializationType, byte[] parameterBytes, Type parameterType)
        {
            if ((byte)serializationType == 4)
            {
                if (parameterBytes==null)
                {
                    return default;
                }
                return MemoryPackSerializer.Deserialize(parameterType,parameterBytes);
            }
            return base.DeserializeParameter(serializationType, parameterBytes, parameterType);
        }
    }
}
